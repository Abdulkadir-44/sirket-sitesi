import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: any;
  splitType?: "chars" | "words";
  from?: any;
  to?: any;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 0.6,
  ease = "easeOut",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: {},
    visible: (i = 1) => ({
      transition: {
        staggerChildren: delay / 1000,
        delayChildren: 0,
      },
    }),
  };

  const childVariants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease,
      },
    },
  };

  const splitText = splitType === "words" ? text.split(" ") : Array.from(text);

  return (
    <motion.div
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onAnimationComplete={onLetterAnimationComplete}
    >
      {splitText.map((item, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {item}
          {splitType === "words" && "\u00A0"}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
