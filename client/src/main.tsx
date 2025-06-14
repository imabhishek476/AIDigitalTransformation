import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { initGA } from "./lib/analytics";
import { setupGlobalErrorHandling } from "./lib/error-handler";
import { initializeLayoutStability } from "./lib/layout-stability";

// Initialize error handling and analytics
setupGlobalErrorHandling();
initGA();

// Initialize layout stability system
document.addEventListener('DOMContentLoaded', () => {
  initializeLayoutStability();
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light">
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeProvider>
);
