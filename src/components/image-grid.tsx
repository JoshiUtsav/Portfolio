"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for the parent container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each image
const imageVariants = {
  hidden: {
    rotate: -5,
    x: -200,
    opacity: 0,
    willChange: "transform, opacity",
  },
  visible: {
    rotate: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ImageComponent to fetch individual images
const ImageComponent = ({ imageName }: { imageName: string }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);  

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-lg"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 5, x: 0, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={"https://portfolio-1825f.appspot.com/Images/" + imageName}
            alt={imageName}
            width={300}
            height={300}
            className="rounded-xl"
            priority={true}
          />
        </motion.div>
      )}
    </div>
  );
};

function ImageGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ImageComponent imageName={"Me.jpg"} />
    </motion.div>
  );
}

export default ImageGrid;
