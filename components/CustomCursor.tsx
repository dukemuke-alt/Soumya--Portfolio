import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.1s cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      <div 
        className={`flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* The </> Cursor */}
          <span className="text-[14px] font-mono font-bold tracking-tight text-white select-none whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            &lt;/&gt;
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;