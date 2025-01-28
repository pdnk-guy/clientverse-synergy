import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Customer from "./pages/Customer";
import IncomingCall from "./pages/IncomingCall";
import OutgoingCommunications from "./pages/OutgoingCommunications";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import TelegramMessages from "./pages/TelegramMessages";
import WhatsAppMessages from "./pages/WhatsAppMessages";
import PhoneCalls from "./pages/PhoneCalls";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/incoming-call" element={<IncomingCall />} />
          <Route path="/outgoing-communications" element={<OutgoingCommunications />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/telegram-messages" element={<TelegramMessages />} />
          <Route path="/whatsapp-messages" element={<WhatsAppMessages />} />
          <Route path="/phone-calls" element={<PhoneCalls />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </QueryClientProvider>
);

export default App;