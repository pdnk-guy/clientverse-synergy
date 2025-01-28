import { Button } from "@/components/ui/button";
import { Settings2, Users, MessageSquare, Database, ChartBar, Phone } from "lucide-react";

const SettingsMenu = ({ activeSection, onSectionChange }: { 
  activeSection: string;
  onSectionChange: (section: string) => void;
}) => {
  const menuItems = [
    { id: "routing", label: "Маршрутизация", icon: MessageSquare },
    { id: "scripts", label: "Сценарии", icon: Settings2 },
    { id: "access", label: "Управление доступом", icon: Users },
    { id: "integrations", label: "Интеграции", icon: Database },
    { id: "analytics", label: "Аналитика", icon: ChartBar },
    { id: "telephony", label: "Телефония", icon: Phone },
  ];

  return (
    <div className="space-y-2 w-64">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onSectionChange(item.id)}
          >
            <Icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default SettingsMenu;