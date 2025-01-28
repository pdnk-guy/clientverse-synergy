import { MessageSquare, Phone, Send, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ChannelCardProps {
  title: string;
  type: "telegram" | "whatsapp" | "phone" | "website";
  activeChats: number;
  responseTime: string;
}

const ChannelCard = ({ title, type, activeChats, responseTime }: ChannelCardProps) => {
  const navigate = useNavigate();

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
        return "bg-[#1EAEDB]";
      case "whatsapp":
        return "bg-[#F2FCE2]";
      case "phone":
        return "bg-[#0EA5E9]";
      case "website":
        return "bg-[#FEF7CD]";
      default:
        return "";
    }
  };

  const getTextColor = () => {
    return type === "whatsapp" || type === "website" 
      ? "text-gray-800" 
      : "text-white";
  };

  const handleClick = () => {
    if (type === "telegram") {
      navigate("/telegram-messages");
    } else if (type === "whatsapp") {
      navigate("/whatsapp-messages");
    } else if (type === "phone") {
      navigate("/phone-calls");
    }
  };

  const Icon = getIcon();
  const bgColor = getBackgroundColor();
  const textColor = getTextColor();

  return (
    <Card 
      className={`hover:shadow-lg transition-shadow ${bgColor} cursor-pointer`}
      onClick={handleClick}
    >
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