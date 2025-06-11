import { motion } from "framer-motion";
import { Skeleton } from "./skeleton";
import { LoadingSpinner } from "./loading-spinner";
import { cn } from "@/lib/utils";

// Page loading overlay
export function PageLoader({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center gap-4"
      >
        <LoadingSpinner size="lg" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </motion.div>
    </div>
  );
}

// Form submission loading state
export function FormSubmissionLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-3">
        <LoadingSpinner size="md" />
        <p className="text-sm font-medium text-gray-700">Sending your message...</p>
      </div>
    </motion.div>
  );
}

// Section loading skeleton
export function SectionLoader({ className }: { className?: string }) {
  return (
    <div className={cn("py-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Card grid loading state
export function CardGridLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 border rounded-lg space-y-4"
        >
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-10 w-24" />
        </motion.div>
      ))}
    </div>
  );
}

// Button loading state
export function ButtonLoader({ children, isLoading, ...props }: 
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isLoading: boolean }) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={cn(
        "relative overflow-hidden transition-all duration-200",
        props.className
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-current opacity-10" />
      )}
      <span className={cn("flex items-center gap-2", isLoading && "opacity-0")}>
        {children}
      </span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" className="text-current" />
        </div>
      )}
    </button>
  );
}