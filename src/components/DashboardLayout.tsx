import { Link } from "react-router-dom";
import { Menu, UserSquare2, PhoneCall, PhoneOutgoing, BarChart, Settings2 } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-background">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Панель оператора</h1>
        </div>
        <nav className="flex items-center gap-6 px-4 pb-2">
          <Link to="/" className="flex items-center gap-2 text-sm hover:text-primary">
            <Menu className="h-4 w-4" />
            <span>Главный экран</span>
          </Link>
          <Link to="/customer" className="flex items-center gap-2 text-sm hover:text-primary">
            <UserSquare2 className="h-4 w-4" />
            <span>Customer Card</span>
          </Link>
          <Link to="/incoming-call" className="flex items-center gap-2 text-sm hover:text-primary">
            <PhoneCall className="h-4 w-4" />
            <span>Incoming Call</span>
          </Link>
          <Link to="/outgoing-communications" className="flex items-center gap-2 text-sm hover:text-primary">
            <PhoneOutgoing className="h-4 w-4" />
            <span>Outgoing Communications</span>
          </Link>
          <Link to="/analytics" className="flex items-center gap-2 text-sm hover:text-primary">
            <BarChart className="h-4 w-4" />
            <span>Analytics & Reports</span>
          </Link>
          <Link to="/settings" className="flex items-center gap-2 text-sm hover:text-primary">
            <Settings2 className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;