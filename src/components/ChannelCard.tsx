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

  const getBackgroundColor = () => {
    switch (type) {
      case "telegram":
        return "bg-[#1EAEDB]"; // Голубой
      case "whatsapp":
        return "bg-[#F2FCE2]"; // Зеленый
      case "phone":
        return "bg-[#0EA5E9]"; // Синий
      case "website":
        return "bg-[#FEF7CD]"; // Желтый
      default:
        return "";
    }
  };

  const getTextColor = () => {
    // Для светлых фонов (WhatsApp и Веб-чат) используем темный текст
    return type === "whatsapp" || type === "website" 
      ? "text-gray-800" 
      : "text-white";
  };

  const Icon = getIcon();
  const bgColor = getBackgroundColor();
  const textColor = getTextColor();

  return (
    <Card className={`hover:shadow-lg transition-shadow ${bgColor}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className={`text-sm font-medium ${textColor}`}>{title}</CardTitle>
        <Icon className={`h-4 w-4 ${textColor}`} />
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${textColor}`}>{activeChats}</div>
        <p className={`text-xs ${textColor} opacity-90`}>
          Среднее время ответа: {responseTime}
        </p>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;