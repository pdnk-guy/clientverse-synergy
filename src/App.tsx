
import { ThemeProvider } from "@/hooks/use-theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Toaster } from "@/components/ui/toaster";
import { FocusProvider } from "@/contexts/FocusContext";

function App() {
  return (
    <ThemeProvider>
      <FocusProvider>
        <RouterProvider router={router} />
        <Toaster />
      </FocusProvider>
    </ThemeProvider>
  );
}

export default App;
