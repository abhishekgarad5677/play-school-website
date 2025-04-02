import { motion } from "framer-motion";

const RotateImage = ({ src, className, delay, rotateIn = false }) => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: rotateIn ? 15 : 0, // if rotateIn is true, start at 90°
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1,
        delay,
        ease: "easeOut",
      },
    },
    hover: {
      rotateX: [-5, 5, 0],
      rotateY: [5, -5, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.img
      initial="hidden"
      animate={["visible"]} // Only fade + rotate in once
      whileHover="hover"
      variants={imageVariants}
      className={`${className} pointer-events-none`}
      src={src}
      alt=""
    />
  );
};

export default RotateImage;
