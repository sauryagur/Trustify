
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CoverProps {
  children: React.ReactNode;
  className?: string;
}

export const Cover = ({ children, className }: CoverProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={cn(
        "relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800",
        "shadow-[0_0_15px_rgba(215,153,33,0.1)]",
        "hover:shadow-[0_0_30px_rgba(215,153,33,0.2)] transition-shadow duration-300",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#d79921]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
