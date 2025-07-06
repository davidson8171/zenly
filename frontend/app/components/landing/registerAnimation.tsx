import { motion } from "framer-motion";

export default function RegisterAnimation() {
  return (
    <svg width="180">
      <motion.line
        className="stroke-muted-foreground/20"
        x1="0"
        y1="6"
        x2="160"
        y2="6"
        strokeWidth="10"
        strokeDasharray="160"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 160 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.line
        className="stroke-emerald-400"
        x1="0"
        y1="20"
        x2="90"
        y2="20"
        strokeWidth="6"
        strokeDasharray="90"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 90 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 1.6,
        }}
      />
      <motion.line
        className="stroke-muted-foreground/20"
        x1="0"
        y1="51"
        x2="120"
        y2="51"
        strokeWidth="10"
        strokeDasharray="120"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 120 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />
      <motion.line
        className="stroke-emerald-400"
        x1="0"
        y1="65"
        x2="60"
        y2="65"
        strokeWidth="6"
        strokeDasharray="60"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 60 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 1.8,
        }}
      />
      <motion.line
        className="stroke-muted-foreground/20"
        x1="0"
        y1="96"
        x2="140"
        y2="96"
        strokeWidth="10"
        strokeDasharray="140"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 140 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
      <motion.line
        className="stroke-emerald-400"
        x1="0"
        y1="110"
        x2="75"
        y2="110"
        strokeWidth="6"
        strokeDasharray="75"
        strokeLinecap="round"
        initial={{ strokeDashoffset: 75 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 2.2,
        }}
      />
    </svg>
  );
}
