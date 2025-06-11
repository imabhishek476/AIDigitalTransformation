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
  hoverScale = 1.02, 
  hoverY = -4,
  delay = 0,
  ...props 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: hoverScale, y: hoverY }}
      transition={{ 
        duration: 0.3,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card
        className={cn(
          "transition-all duration-300 cursor-pointer group",
          "hover:shadow-lg hover:shadow-blue-500/10",
          "border-border/50 hover:border-primary/20",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  );
}