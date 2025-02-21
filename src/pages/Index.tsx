
import DashboardLayout from "@/components/DashboardLayout";
import ChannelCard from "@/components/ChannelCard";
import RequestFilters from "@/components/RequestFilters";
import RequestList from "@/components/RequestList";
import QuickActions from "@/components/QuickActions";
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
        <div className="col-span-7">
          <div className="space-y-6">
            <div className="border rounded-lg">
              <RequestList />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <QuickActions />
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="space-y-6">
            <AutomatedTaskChecklist />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
