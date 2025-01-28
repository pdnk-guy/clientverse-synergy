import { Link } from "react-router-dom";
import { Menu, UserSquare2, PhoneCall, PhoneOutgoing, BarChart, Settings2 } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-background">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/boris-hoff-logo.png" 
                alt="Boris Hoff Logo" 
                className="h-8"
              />
              <h1 className="text-2xl font-bold">Панель оператора</h1>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 text-sm hover:text-primary">
                <Menu className="h-4 w-4" />
                <span>Главный экран</span>
              </Link>

              <Link to="/customer" className="flex items-center gap-2 text-sm hover:text-primary">
                <UserSquare2 className="h-4 w-4" />
                <span>Карточка клиента</span>
              </Link>

              <Link to="/incoming-call" className="flex items-center gap-2 text-sm hover:text-primary">
                <PhoneCall className="h-4 w-4" />
                <span>Входящие коммуникации</span>
              </Link>

              <Link to="/outgoing-communications" className="flex items-center gap-2 text-sm hover:text-primary">
                <PhoneOutgoing className="h-4 w-4" />
                <span>Исходящие коммуникации</span>
              </Link>

              <Link to="/analytics" className="flex items-center gap-2 text-sm hover:text-primary">
                <BarChart className="h-4 w-4" />
                <span>Аналитика и отчеты</span>
              </Link>

              <Link to="/settings" className="flex items-center gap-2 text-sm hover:text-primary">
                <Settings2 className="h-4 w-4" />
                <span>настройка оператора</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;