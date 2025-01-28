import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MessageSquare, Calendar, User, Check, Filter, FileText, RefreshCcw, Tag } from "lucide-react";
import { MessageInput } from "@/components/MessageInput";
import { ChatMessages } from "@/components/ChatMessages";

interface Message {
  id: number;
  date: string;
  sender: string;
  recipient: string;
  content: string;
  messageCount: number;
  status?: string;
  isOperator?: boolean;
  phone?: string;
  email?: string;
  dialogNumber?: string;
  callTouchId?: string;
  userId?: string;
  source?: string;
  tags?: string[];
}

const mockMessages: Message[] = [
  {
    id: 1,
    date: "24.01.2025",
    sender: "Александр Палыч",
    recipient: "Еремина Алена (eremina_a)",
    content: "Добрый день.",
    messageCount: 16,
    status: "Диалог №255235 завершён",
    phone: "79261438872",
    dialogNumber: "255235",
    callTouchId: "dguegnux5czdmku64yile2u9t8m",
    userId: "459346622",
    source: "Бот",
    tags: ["Запись на ТО", "BMW"]
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

const mockChatMessages = [
  {
    id: 1,
    sender: "Александр Палыч",
    content: "Добрый день, хотел бы записаться на ТО для BMW X5",
    timestamp: "10:30",
    isOperator: false
  },
  {
    id: 2,
    sender: "Оператор",
    content: "Здравствуйте! Конечно, я помогу вам записаться. Подскажите, пожалуйста, год выпуска вашего автомобиля?",
    timestamp: "10:32",
    isOperator: true
  },
  {
    id: 3,
    sender: "Александр Палыч",
    content: "2021",
    timestamp: "10:33",
    isOperator: false
  }
];

const TelegramMessages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsDetailsOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-120px)]">
        {/* Top filter panel */}
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

        {/* Messages list */}
        <div className="col-span-12 bg-white rounded-lg shadow">
          <div className="grid grid-cols-12 gap-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className="col-span-4 p-4 border rounded-lg cursor-pointer hover:bg-[#1EAEDB]/10 bg-[#1EAEDB]/5"
                onClick={() => handleMessageClick(message)}
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

                {message.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {message.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </div>
                    ))}
                  </div>
                )}

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

        {/* Side Panel with Chat */}
        <Sheet open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <SheetContent side="right" className="w-[900px] sm:w-[1000px]">
            <div className="flex h-full">
              {/* Chat Section */}
              <div className="flex-1 flex flex-col border-r">
                <SheetHeader>
                  <SheetTitle>Чат с {selectedMessage?.sender}</SheetTitle>
                </SheetHeader>
                <ChatMessages messages={mockChatMessages} />
                <MessageInput />
              </div>

              {/* Client Info Section */}
              <div className="w-[300px] p-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">Контакт</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{selectedMessage?.sender}</p>
                    <p className="text-sm text-gray-600">{selectedMessage?.phone}</p>
                    <p className="text-sm text-gray-600">{selectedMessage?.email}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">Информация</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Диалог</span>
                      <span className="text-sm">{selectedMessage?.dialogNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Источник</span>
                      <span className="text-sm">{selectedMessage?.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">User ID</span>
                      <span className="text-sm">{selectedMessage?.userId}</span>
                    </div>
                  </div>
                </div>

                {selectedMessage?.tags && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-500">Теги</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMessage.tags.map((tag) => (
                        <div key={tag} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </DashboardLayout>
  );
};

export default TelegramMessages;
