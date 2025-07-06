import { motion } from "framer-motion";

export default function ChatAnimation() {
  return (
    <svg width="180" height="220">
      <defs>
        <linearGradient
          id="gradient-primary"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      <motion.rect
        className="fill-accent"
        width="140"
        height="60"
        x="0"
        y="0"
        rx="10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.1,
        }}
      />
      <motion.rect
        className="fill-accent"
        width="120"
        height="30"
        x="0"
        y="65"
        rx="10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.3,
        }}
      />
      <motion.path
        className="fill-accent"
        d="M 0 80 Q -8 80 -8 75 Q -8 70 0 70 L 0 80 Z"
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.4,
        }}
      />
      <motion.rect
        style={{
          fill: "url(#gradient-primary)",
        }}
        width="120"
        height="30"
        x="60"
        y="108"
        rx="10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.5,
        }}
      />
    </svg>
  );
}
