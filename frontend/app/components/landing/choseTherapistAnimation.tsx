import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function ChoseTherapistAnimation() {
  return (
    <svg width="180" height="220">
      {/* first */}
      <motion.rect
        className="fill-accent"
        width="180"
        height="50"
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
      <motion.foreignObject
        x="20"
        y="15"
        width="24"
        height="24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <User className="h-5 w-5 text-emerald-400" />
      </motion.foreignObject>
      <motion.line
        className="stroke-muted-foreground/20"
        x1="55"
        y1="18"
        x2="120"
        y2="18"
        strokeLinecap="round"
        strokeWidth="5"
        strokeDasharray="65"
        initial={{ strokeDashoffset: 65 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />
      <motion.line
        className="stroke-muted-foreground/20"
        x1="55"
        y1="30"
        x2="85"
        y2="30"
        strokeLinecap="round"
        strokeWidth="5"
        strokeDasharray="85"
        initial={{ strokeDashoffset: 85 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />

      {/* seccond */}
      <motion.rect
        className="fill-accent"
        width="180"
        height="50"
        x="0"
        y="65"
        rx="10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.4,
        }}
      />
      <motion.foreignObject
        x="20"
        y="80"
        width="24"
        height="24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <User className="h-5 w-5 text-emerald-400" />
      </motion.foreignObject>
      <motion.line
        className="stroke-muted-foreground/20"
        x1="55"
        y1="83"
        x2="105"
        y2="83"
        strokeLinecap="round"
        strokeWidth="5"
        strokeDasharray="50"
        initial={{ strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 0.9, duration: 0.3 }}
      />
      <motion.line
        className="stroke-muted-foreground/20"
        x1="55"
        y1="95"
        x2="90"
        y2="95"
        strokeLinecap="round"
        strokeWidth="5"
        strokeDasharray="90"
        initial={{ strokeDashoffset: 90 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 1.0, duration: 0.3 }}
      />

      {/* third */}
      <motion.rect
        className="fill-accent"
        width="180"
        height="50"
        x="0"
        y="130"
        rx="10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.7,
        }}
      />
      <motion.foreignObject
        x="20"
        y="145"
        width="24"
        height="24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <User className="h-5 w-5 text-emerald-400" />
      </motion.foreignObject>
      <motion.line
        className="stroke-muted-foreground/20"
        x1="55"
        y1="148"
        x2="135"
        y2="148"
        strokeLinecap="round"
        strokeWidth="5"
        strokeDasharray="80"
        initial={{ strokeDashoffset: 80 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
      <motion.line
        className="stroke-muted-foreground/20"
        x1="55"
        y1="160"
        x2="105"
        y2="160"
        strokeLinecap="round"
        strokeWidth="5"
        strokeDasharray="50"
        initial={{ strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ delay: 1.3, duration: 0.3 }}
      />
    </svg>
  );
}
