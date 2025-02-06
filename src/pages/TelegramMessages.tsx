import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MessageInput } from "@/components/MessageInput";
import { ChatMessages } from "@/components/ChatMessages";
import { TelegramMessagesList } from "@/components/telegram/TelegramMessagesList";
import { TelegramFilterPanel } from "@/components/telegram/TelegramFilterPanel";

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
  },
  {
    id: 4,
    date: "28.01.2025",
    sender: "Иван Сидоров",
    recipient: "Еремина Алена (eremina_a)",
    content: "Нужна консультация по BMW X5",
    messageCount: 5
  },
  {
    id: 5,
    date: "28.01.2025",
    sender: "Мария Петрова",
    recipient: "Еремина Алена (eremina_a)",
    content: "Вопрос по обслуживанию",
    messageCount: 3
  },
  {
    id: 6,
    date: "28.01.2025",
    sender: "Дмитрий Волков",
    recipient: "Еремина Алена (eremina_a)",
    content: "Интересует стоимость ТО",
    messageCount: 7
  },
  {
    id: 7,
    date: "29.01.2025",
    sender: "Анна Соколова",
    recipient: "Еремина Алена (eremina_a)",
    content: "Когда можно записаться?",
    messageCount: 4
  },
  {
    id: 8,
    date: "29.01.2025",
    sender: "Павел Морозов",
    recipient: "Еремина Алена (eremina_a)",
    content: "Нужна диагностика",
    messageCount: 6
  },
  {
    id: 9,
    date: "29.01.2025",
    sender: "Елена Кузнецова",
    recipient: "Еремина Алена (eremina_a)",
    content: "Вопрос по замене масла",
    messageCount: 2
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
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsDetailsOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="mb-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <TelegramFilterPanel 
            searchQuery={searchQuery}
            onSearchChange={(value) => setSearchQuery(value)}
          />
        </div>
        <div className="col-span-12">
          <TelegramMessagesList 
            messages={mockMessages}
            onMessageClick={handleMessageClick}
          />
        </div>

        <Sheet open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <SheetContent side="right" className="w-[900px] sm:w-[1000px]">
            <SheetHeader>
              <SheetTitle>Чат с {selectedMessage?.sender}</SheetTitle>
            </SheetHeader>
            <ChatMessages messages={mockChatMessages} />
            <MessageInput />
          </SheetContent>
        </Sheet>
      </div>
    </DashboardLayout>
  );
};

export default TelegramMessages;