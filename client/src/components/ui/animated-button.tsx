import { motion } from "framer-motion";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  hoverScale?: number;
  tapScale?: number;
}

export function AnimatedButton({ 
  children, 
  className, 
  hoverScale = 1.05, 
  tapScale = 0.95,
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          className
        )}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Button>
    </motion.div>
  );
}