import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Smile, Paperclip, Mic, Send, ArrowLeft } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "operator";
  timestamp: string;
}

interface Client {
  id: number;
  name: string;
  topic: string;
  lastMessage: string;
  tags: string[];
}

const mockClients: Client[] = [
  {
    id: 1,
    name: "Мария Иванова",
    topic: "Консультация по продукту",
    lastMessage: "Здравствуйте, хочу узнать подробнее о вашем продукте",
    tags: ["Новый клиент", "Консультация"]
  },
  {
    id: 2,
    name: "Алексей Петров",
    topic: "Техническая поддержка",
    lastMessage: "У меня возникла проблема с установкой",
    tags: ["Поддержка"]
  },
  {
    id: 3,
    name: "Екатерина Смирнова",
    topic: "Вопрос о доставке",
    lastMessage: "Когда будет доставлен мой заказ?",
    tags: ["Доставка", "Срочно"]
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    topic: "Возврат товара",
    lastMessage: "Хочу оформить возврат",
    tags: ["Возврат", "Претензия"]
  },
  {
    id: 5,
    name: "Анна Соколова",
    topic: "Оплата заказа",
    lastMessage: "Не проходит оплата картой",
    tags: ["Оплата", "Проблема"]
  }
];

const mockMessages: Message[] = [
  {
    id: 1,
    text: "Здравствуйте! Хочу узнать подробнее о вашем продукте",
    sender: "user",
    timestamp: "10:30"
  },
  {
    id: 2,
    text: "Здравствуйте! Конечно, я с радостью расскажу вам о нашем продукте. Что именно вас интересует?",
    sender: "operator",
    timestamp: "10:31"
  }
];

const WhatsAppMessages = () => {
  const navigate = useNavigate();
  const [selectedClient, setSelectedClient] = useState<Client | null>(mockClients[0]);
  const [newMessage, setNewMessage] = useState("");

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
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-120px)]">
        {/* Список обращений */}
        <div className="col-span-3 bg-white rounded-lg shadow overflow-y-auto dark:bg-gray-800">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Обращения</h2>
            {mockClients.map((client) => (
              <div
                key={client.id}
                className={`p-3 rounded-lg mb-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                  selectedClient?.id === client.id ? "bg-[#F2FCE2] dark:bg-gray-700" : ""
                }`}
                onClick={() => setSelectedClient(client)}
              >
                <div className="font-medium">{client.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{client.topic}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{client.lastMessage}</div>
                <div className="flex gap-2 mt-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#F2FCE2] text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Чат */}
        <div className="col-span-6 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold">
              {selectedClient ? selectedClient.name : "Выберите чат"}
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "operator" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === "operator"
                      ? "bg-[#F2FCE2] text-gray-800 dark:bg-green-900 dark:text-gray-100"
                      : "bg-gray-100 dark:bg-gray-700"
                  }`}
                >
                  <div className="text-sm">{message.text}</div>
                  <div className="text-xs mt-1 opacity-70">{message.timestamp}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex gap-2 items-center">
              <Button variant="ghost" size="icon" className="dark:hover:bg-gray-700">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="dark:hover:bg-gray-700">
                <Mic className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Введите сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 dark:bg-gray-700 dark:border-gray-600"
              />
              <Button variant="ghost" size="icon" className="dark:hover:bg-gray-700">
                <Smile className="h-5 w-5" />
              </Button>
              <Button className="bg-[#25D366] hover:bg-[#128C7E] dark:bg-[#128C7E] dark:hover:bg-[#075E54]">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Информация о клиенте */}
        <div className="col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Информация о клиенте</h2>
            {selectedClient && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Имя</label>
                  <div className="font-medium">{selectedClient.name}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Тема обращения</label>
                  <div className="font-medium">{selectedClient.topic}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Теги</label>
                  <div className="flex gap-2 mt-1">
                    {selectedClient.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#F2FCE2] text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WhatsAppMessages;
