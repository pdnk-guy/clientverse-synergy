import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Phone, Clock, PhoneOff, PhoneForwarded } from "lucide-react";

interface Call {
  id: string;
  clientName: string;
  phoneNumber: string;
  status: "missed" | "answered" | "ongoing" | "waiting";
  topic: string;
  time: string;
}

interface CallsListProps {
  calls: Call[];
  selectedCall: Call | null;
  onCallSelect: (call: Call) => void;
}

export const CallsList = ({ calls, selectedCall, onCallSelect }: CallsListProps) => {
  const getStatusColor = (status: Call["status"]) => {
    switch (status) {
      case "missed":
        return "bg-red-500";
      case "answered":
        return "bg-green-500";
      case "ongoing":
        return "bg-blue-500";
      case "waiting":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: Call["status"]) => {
    switch (status) {
      case "missed":
        return <PhoneOff className="h-4 w-4" />;
      case "answered":
        return <Phone className="h-4 w-4" />;
      case "ongoing":
        return <PhoneForwarded className="h-4 w-4" />;
      case "waiting":
        return <Clock className="h-4 w-4" />;
      default:
        return <Phone className="h-4 w-4" />;
    }
  };

  return (
    <Card className="col-span-3 p-4">
      <h2 className="text-lg font-semibold mb-4">Входящие звонки</h2>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-2">
          {calls.map((call) => (
            <div
              key={call.id}
              className={`p-3 rounded-lg cursor-pointer hover:bg-accent ${
                selectedCall?.id === call.id ? "bg-accent" : ""
              }`}
              onClick={() => onCallSelect(call)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{call.clientName}</span>
                <Badge variant="secondary" className={`${getStatusColor(call.status)} text-white`}>
                  {getStatusIcon(call.status)}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">{call.topic}</div>
              <div className="text-sm text-muted-foreground">{call.time}</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};