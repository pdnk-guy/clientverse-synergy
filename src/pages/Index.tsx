import DashboardLayout from "@/components/DashboardLayout";
import ChannelCard from "@/components/ChannelCard";
import RequestFilters from "@/components/RequestFilters";
import RequestList from "@/components/RequestList";
import QuickActions from "@/components/QuickActions";
import WorkloadIndicator from "@/components/WorkloadIndicator";

const Index = () => {
  const channels = [
    {
      title: "Telegram Bot",
      type: "telegram" as const,
      activeChats: 24,
      responseTime: "2m 30s"
    },
    {
      title: "WhatsApp",
      type: "whatsapp" as const,
      activeChats: 15,
      responseTime: "3m 45s"
    },
    {
      title: "Phone Support",
      type: "phone" as const,
      activeChats: 8,
      responseTime: "1m 15s"
    },
    {
      title: "Website Chat",
      type: "website" as const,
      activeChats: 32,
      responseTime: "4m 00s"
    }
  ];

  return (
    <DashboardLayout>
      <WorkloadIndicator />
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
    </DashboardLayout>
  );
};

export default Index;