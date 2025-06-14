import { motion } from "framer-motion";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverScale?: number;
  hoverY?: number;
  delay?: number;
}

export function AnimatedCard({ 
  children, 
  className, 
  hoverScale = 1, 
  hoverY = 0,
  delay = 0,
  ...props 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card
        className={cn(
          "transition-colors duration-300",
          "border-border/50",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
}