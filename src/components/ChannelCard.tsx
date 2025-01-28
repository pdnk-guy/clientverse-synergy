import { MessageSquare, Phone, Send, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChannelCardProps {
  title: string;
  type: "telegram" | "whatsapp" | "phone" | "website";
  activeChats: number;
  responseTime: string;
}

const ChannelCard = ({ title, type, activeChats, responseTime }: ChannelCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "telegram":
        return Send;
      case "whatsapp":
        return MessageSquare;
      case "phone":
        return Phone;
      case "website":
        return Users;
      default:
        return MessageSquare;
    }
  };

  const Icon = getIcon();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{activeChats}</div>
        <p className="text-xs text-muted-foreground">
          Среднее время ответа: {responseTime}
        </p>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;