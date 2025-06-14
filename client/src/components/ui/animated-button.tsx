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
  hoverScale = 1, 
  tapScale = 1,
  ...props 
}: AnimatedButtonProps) {
  return (
    <Button
      className={cn(
        "transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}