import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, User, Check, Filter, FileText, RefreshCcw } from "lucide-react";

interface Message {
  id: number;
  date: string;
  sender: string;
  recipient: string;
  content: string;
  messageCount: number;
  status?: string;
  isOperator?: boolean;
}

const mockMessages: Message[] = [
  {
    id: 1,
    date: "24.01.2025",
    sender: "Александр Палыч",
    recipient: "Еремина Алена (eremina_a)",
    content: "Добрый день.",
    messageCount: 16,
    status: "Диалог №255235 завершён"
  },
  {
    id: 2,
    date: "27.01.2025",
    sender: "Максим Перцев",
    recipient: "Еремина Алена (eremina_a)",
    content: "Bmw 520d, 2018 год. 89251410603 БорисХоф восток.",
    messageCount: 8
  },
  {
    id: 3,
    date: "27.01.2025",
    sender: "Оксана Казначеева",
    recipient: "Еремина Алена (eremina_a)",
    content: "Черри k769pp799",
    messageCount: 9,
    status: "Диалог №256464 завершён"
  }
];

const TelegramMessages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(mockMessages[0]);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-120px)]">
        {/* Верхняя панель с фильтрами */}
        <div className="col-span-12 bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Дата отправки сообщения: последние 7 дней
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Input
              placeholder="Введите поисковый запрос или добавьте фильтры"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-96"
            />
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <FileText className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Список сообщений */}
        <div className="col-span-12 bg-white rounded-lg shadow">
          <div className="grid grid-cols-12 gap-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className="col-span-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedMessage(message)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{message.sender}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-orange-500">{message.messageCount}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{message.date}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <User className="h-4 w-4" />
                  <span>{message.recipient}</span>
                </div>

                <p className="text-sm text-gray-700 mb-2">{message.content}</p>

                {message.status && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Check className="h-4 w-4" />
                    <span>{message.status}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TelegramMessages;