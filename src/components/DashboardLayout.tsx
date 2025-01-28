import { Link } from "react-router-dom";
import { Menu, UserSquare2, PhoneCall, PhoneOutgoing, BarChart, Settings2 } from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <div className="p-4">
              <h1 className="text-2xl font-bold">Панель оператора</h1>
            </div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center gap-2 text-sm">
                    <Menu className="h-4 w-4" />
                    <span>Главный экран</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/customer" className="flex items-center gap-2 text-sm">
                    <UserSquare2 className="h-4 w-4" />
                    <span>Карточка клиента</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/incoming-call" className="flex items-center gap-2 text-sm">
                    <PhoneCall className="h-4 w-4" />
                    <span>Входящие коммуникации</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/outgoing-communications" className="flex items-center gap-2 text-sm">
                    <PhoneOutgoing className="h-4 w-4" />
                    <span>Исходящие коммуникации</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/analytics" className="flex items-center gap-2 text-sm">
                    <BarChart className="h-4 w-4" />
                    <span>Аналитика и отчеты</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/settings" className="flex items-center gap-2 text-sm">
                    <Settings2 className="h-4 w-4" />
                    <span>настройка оператора</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1">
          <header className="border-b bg-background p-4 flex items-center justify-between">
            <SidebarTrigger />
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;