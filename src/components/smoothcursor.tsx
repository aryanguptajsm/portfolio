import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './smoothcursor.css';

export default function SmoothCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Position of the mouse (raw coordinates)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for trailing/smooth physics
  // Outer ring (lagging trailing effect)
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });

  // Inner dot (faster, tighter tracking)
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.2 });

  useEffect(() => {
    // 1. Detect touch/mobile device
    const checkMobile = () => {
      const match = window.matchMedia('(pointer: coarse)');
      setIsMobile(match.matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 2. Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // 3. Track mouse window entry/exit
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // 4. Track hover states on interactive items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if target or any ancestor is interactive
      const isInteractive = target.closest(
        'a, button, input, select, textarea, [role="button"], .project-card, .btn-primary, .btn-secondary, .nav-logo, .theme-toggle, .clickable'
      );
      
      setIsHovered(!!isInteractive);
    };

    // 5. Track mouse click active states
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className={`smooth-cursor-ring ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Inner precise dot */}
      <motion.div
        className={`smooth-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'visible' : ''}`}
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
