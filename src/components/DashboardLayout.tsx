
import { Link } from "react-router-dom";
import { Menu, UserSquare2, PhoneCall, PhoneOutgoing, BarChart, Settings2, Moon, Sun, Bot, User, LogOut, Focus } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();
  const [focusMode, setFocusMode] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    // Add actual logout logic here when needed
  };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
  };

  return (
    <div className={cn(
      "min-h-screen dark:bg-gray-900 transition-colors duration-200",
      focusMode && "bg-gray-50 dark:bg-gray-950"
    )}>
      <header className={cn(
        "border-b bg-background dark:border-gray-800 transition-all duration-200",
        focusMode && "bg-white/80 backdrop-blur-sm dark:bg-gray-900/80"
      )}>
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold dark:text-white">Панель оператора</h1>
            </div>
            <div className="flex items-center gap-6">
              <Button
                onClick={toggleFocusMode}
                variant={focusMode ? "default" : "outline"}
                className={cn(
                  "transition-all duration-200",
                  focusMode && "bg-primary text-primary-foreground"
                )}
              >
                <Focus className="h-4 w-4 mr-2" />
                {focusMode ? "Выйти из фокуса" : "Режим фокуса"}
              </Button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <Link to="/" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <Menu className="h-4 w-4" />
                <span>Главный экран</span>
              </Link>

              <Link to="/customer" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <UserSquare2 className="h-4 w-4" />
                <span>Карточка клиента</span>
              </Link>

              <Link to="/incoming-call" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <PhoneCall className="h-4 w-4" />
                <span>Входящие коммуникации</span>
              </Link>

              <Link to="/outgoing-communications" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <PhoneOutgoing className="h-4 w-4" />
                <span>Исходящие коммуникации</span>
              </Link>

              <Link to="/analytics" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <BarChart className="h-4 w-4" />
                <span>Аналитика и отчеты</span>
              </Link>

              <Link to="/settings" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <Settings2 className="h-4 w-4" />
                <span>настройка оператора</span>
              </Link>

              <Link to="/bot-boris" className={cn(
                "flex items-center gap-2 text-sm hover:text-primary dark:text-gray-300",
                focusMode && "opacity-50 hover:opacity-100"
              )}>
                <Bot className="h-4 w-4" />
                <span>Бот Борис</span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md">
                  <User className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium">Гайдаржи Александр</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Product owner</p>
                  </div>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Выйти</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>
      <main className={cn(
        "container mx-auto p-6 dark:text-gray-200 transition-all duration-200",
        focusMode && "max-w-3xl"
      )}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
