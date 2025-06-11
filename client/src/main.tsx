import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ErrorBoundary } from "./components/ui/error-boundary";
import { initGA } from "./lib/analytics";

// Initialize Google Analytics
initGA();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light">
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeProvider>
);
