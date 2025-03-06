import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function InlineScrollProgressLine() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%", // Full width of the body
        height: "5px", // Thin line
        zIndex: 1000,
        pointerEvents: "none" //Prevent from blocking clicks
      }}
    >
      <motion.div
        style={{
          width: `${scrollPercentage}%`,
          height: "100%",
          background: "linear-gradient(to right, #4caf50, #81c784)", // Horizontal gradient
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollPercentage}%` }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      />
    </motion.div>
  );
}