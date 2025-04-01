// SparkleBackground.jsx
import React, { useEffect } from "react";

const SparkleBackground = () => {
  useEffect(() => {
    const sparkleContainer = document.createElement("div");
    sparkleContainer.className =
      "fixed inset-0 overflow-hidden pointer-events-none z-0";
    document.body.appendChild(sparkleContainer);

    for (let i = 0; i < 50; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = `
        absolute w-1 h-1
        rounded-full bg-white
        opacity-30 animate-sparkle
      `;
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      sparkleContainer.appendChild(sparkle);
    }

    return () => {
      sparkleContainer.remove();
    };
  }, []);

  return null;
};

export default SparkleBackground;
