import DashboardLayout from "@/components/DashboardLayout";
import ChannelCard from "@/components/ChannelCard";
import RequestFilters from "@/components/RequestFilters";
import RequestList from "@/components/RequestList";
import QuickActions from "@/components/QuickActions";
import TaskList from "@/components/TaskList";
import WorkloadIndicator from "@/components/WorkloadIndicator";

const Index = () => {
  const channels = [
    {
      title: "Телеграм Бот",
      type: "telegram" as const,
      activeChats: 24,
      responseTime: "2м 30с"
    },
    {
      title: "WhatsApp",
      type: "whatsapp" as const,
      activeChats: 15,
      responseTime: "3м 45с"
    },
    {
      title: "Телефонная поддержка",
      type: "phone" as const,
      activeChats: 8,
      responseTime: "1м 15с"
    },
    {
      title: "Веб-чат",
      type: "website" as const,
      activeChats: 32,
      responseTime: "4м 00с"
    }
  ];

  const todaysTasks = [
    {
      id: "1",
      type: "today",
      customerName: "Иванов Алексей",
      description: "Перезвонить по вопросу записи на ТО",
      dueDate: new Date().toISOString(),
      status: "pending" as const
    },
    {
      id: "2",
      type: "today",
      customerName: "Петрова Мария",
      description: "Уточнить детали по заказу запчастей",
      dueDate: new Date().toISOString(),
      status: "pending" as const
    },
    {
      id: "3",
      type: "today",
      customerName: "Сидоров Павел",
      description: "Согласовать время доставки",
      dueDate: new Date().toISOString(),
      status: "completed" as const
    }
  ];

  const handleTaskStatusChange = (taskId: string) => {
    console.log("Task status changed:", taskId);
    // Here you would typically update the task status in your state management system
  };

  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {channels.map((channel) => (
          <ChannelCard
            key={channel.title}
            title={channel.title}
            type={channel.type}
            activeChats={channel.activeChats}
            responseTime={channel.responseTime}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="flex gap-4">
            <div className="w-64">
              <RequestFilters />
            </div>
            <div className="flex-1">
              <RequestList />
            </div>
            <div className="w-64">
              <QuickActions />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg overflow-hidden">
            <WorkloadIndicator />
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Задачи на сегодня</h2>
            <TaskList
              tasks={todaysTasks}
              onStatusChange={handleTaskStatusChange}
              type="today"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;