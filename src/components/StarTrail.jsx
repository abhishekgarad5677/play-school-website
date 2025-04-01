import React, { useEffect } from "react";

const StarTrail = () => {
  useEffect(() => {
    const createStar = (x, y) => {
      const star = document.createElement("div");

      star.className = `
        fixed w-2 h-2
        bg-yellow-300
        pointer-events-none
        animate-fade-star
        z-[9999]
        star-shape
      `;

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    const handleMouseMove = (e) => {
      createStar(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default StarTrail;
