import { motion } from "framer-motion";

export default function CheckIcon({ visible }) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        opacity: { duration: 0 },
      },
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 border-2 rounded-full shrink-0"
    >
      <motion.polyline
        points="4 12 9 17 20 6"
        animate={visible ? "visible" : "hidden"}
        variants={pathVariants}
      />
    </svg>
  );
}
