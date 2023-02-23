import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="text-5xl font-light text-red-600 text-center mt-6 mb-10">
      <motion.h1 initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}>
        LISTA DE TAREAS
      </motion.h1>
    </header>
  );
}
