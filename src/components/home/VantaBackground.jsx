import { useEffect, useRef } from "react";

import "./VantaBackground.css";

function VantaBackground() {
  const containerRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !window.VANTA) {
      return;
    }

    effectRef.current = window.VANTA.NET({
      el: containerRef.current,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      scale: 1,
      scaleMobile: 1,

      color: 0x747474,
      backgroundColor: 0x121212,

      points: 12,
      maxDistance: 22,
      spacing: 17,
      showDots: true,
    });

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="vanta-background"
      aria-hidden="true"
    />
  );
}

export default VantaBackground;