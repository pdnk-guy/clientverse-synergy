import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const HelpPanel = ({ section }: { section: string }) => {
  const helpContent: Record<string, { title: string; content: string }> = {
    routing: {
      title: "Маршрутизация запросов",
      content: "Настройте правила распределения входящих запросов между операторами. Учитывайте загрузку, специализацию и график работы сотрудников.",
    },
    scripts: {
      title: "Сценарии обработки",
      content: "Создавайте и управляйте автоматическими сценариями обработки запросов, включая шаблоны ответов и расписание исходящих коммуникаций.",
    },
    access: {
      title: "Управление доступом",
      content: "Настройте права доступа для различных групп сотрудников, определите роли и уровни ответственности.",
    },
    integrations: {
      title: "Интеграции",
      content: "Подключите внешние системы: CRM, BI-инструменты, телефонию и системы мониторинга для расширения функциональности.",
    },
  };

  const currentHelp = helpContent[section] || {
    title: "Справка",
    content: "Выберите раздел настроек для просмотра справочной информации.",
  };

  return (
    <ScrollArea className="h-[calc(100vh-10rem)] w-80">
      <Card>
        <CardHeader>
          <CardTitle>{currentHelp.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{currentHelp.content}</p>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default HelpPanel;