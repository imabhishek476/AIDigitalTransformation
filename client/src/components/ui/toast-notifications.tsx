import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const toastVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
};

export function EnhancedToastProvider() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              "relative flex w-full items-center space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg",
              "bg-white border-border",
              toast.variant === "destructive" && "border-red-200 bg-red-50",
              toast.variant === "default" && "border-green-200 bg-green-50"
            )}
          >
            <div className="flex-shrink-0">
              {toast.variant === "destructive" ? (
                <AlertCircle className="h-5 w-5 text-red-600" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
            </div>
            
            <div className="flex-1">
              {toast.title && (
                <div className="text-sm font-semibold text-gray-900">
                  {toast.title}
                </div>
              )}
              {toast.description && (
                <div className="mt-1 text-sm text-gray-600">
                  {toast.description}
                </div>
              )}
            </div>

            <button
              onClick={() => dismiss(toast.id)}
              className="absolute top-2 right-2 p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>

            {/* Progress bar for auto-dismiss */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-blue-500"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}