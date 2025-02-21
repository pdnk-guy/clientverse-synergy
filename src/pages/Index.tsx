
import DashboardLayout from "@/components/DashboardLayout";
import ChannelCard from "@/components/ChannelCard";
import RequestFilters from "@/components/RequestFilters";
import RequestList from "@/components/RequestList";
import QuickActions from "@/components/QuickActions";
import TaskList from "@/components/TaskList";
import WorkloadIndicator from "@/components/WorkloadIndicator";
import OperatorComparisonChart from "@/components/OperatorComparisonChart";
import CommunicationsSourceChart from "@/components/CommunicationsSourceChart";
import KeyPerformanceIndicators from "@/components/KeyPerformanceIndicators";
import AutomatedTaskChecklist from "@/components/AutomatedTaskChecklist";

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
  };

  return (
    <DashboardLayout>
      <KeyPerformanceIndicators />
      
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

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <div className="border rounded-lg overflow-hidden">
            <WorkloadIndicator />
            <OperatorComparisonChart />
            <CommunicationsSourceChart />
          </div>
        </div>

        <div className="col-span-4">
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">Задачи на сегодня</h2>
              <TaskList
                tasks={todaysTasks}
                onStatusChange={handleTaskStatusChange}
                type="today"
              />
            </div>
            <AutomatedTaskChecklist />
          </div>
        </div>

        <div className="col-span-5">
          <div className="space-y-6">
            <div className="border rounded-lg">
              <RequestList />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
