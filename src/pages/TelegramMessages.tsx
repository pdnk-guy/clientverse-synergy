import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { MessageSquare, Calendar, User, Check, Filter, FileText, RefreshCcw, ExternalLink } from "lucide-react";

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
    source: "Бот"
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
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsDetailsOpen(true);
  };

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

        {/* Side Panel */}
        <Sheet open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <SheetContent side="right" className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Информация о диалоге</SheetTitle>
            </SheetHeader>
            
            {selectedMessage && (
              <div className="mt-6 space-y-6">
                {/* Contact Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-500">Контакт</h3>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{selectedMessage.sender}</p>
                    <p className="text-sm text-gray-600">{selectedMessage.phone}</p>
                    <p className="text-sm text-gray-600">{selectedMessage.email}</p>
                  </div>
                </div>

                {/* Segmentation Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">Сегментация</h3>
                  <div className="flex gap-2">
                    {Array(7).fill(null).map((_, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded border border-gray-200"
                      />
                    ))}
                  </div>
                </div>

                {/* Additional Fields Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">Дополнительные поля</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Категории для комментария</span>
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        Добавить новое поле
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CallTouch Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">CallTouch</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Заявка #{selectedMessage.callTouchId}
                    </p>
                  </div>
                </div>

                {/* Information Section */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">Информация</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Диалог</span>
                      <span className="text-sm">{selectedMessage.dialogNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Источник</span>
                      <span className="text-sm">{selectedMessage.source}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">User ID</span>
                      <span className="text-sm">{selectedMessage.userId}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button variant="outline" className="w-full">
                    В приложение оператора
                  </Button>
                  <Button variant="outline" className="w-full">
                    Обновить
                  </Button>
                  <Button variant="outline" className="w-full text-red-500 hover:text-red-600">
                    Удалить чат
                  </Button>
                  <Button variant="outline" className="w-full">
                    Забанить
                  </Button>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </DashboardLayout>
  );
};

export default TelegramMessages;
