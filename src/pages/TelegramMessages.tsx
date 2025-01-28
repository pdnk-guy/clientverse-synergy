import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Smile, Paperclip, Mic, Send } from "lucide-react";

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
    name: "Иван Петров",
    topic: "Техническая поддержка",
    lastMessage: "У меня проблема с доступом",
    tags: ["Срочно", "Поддержка"]
  },
  {
    id: 2,
    name: "Анна Сидорова",
    topic: "Оплата услуг",
    lastMessage: "Как я могу оплатить подписку?",
    tags: ["Оплата"]
  }
];

const mockMessages: Message[] = [
  {
    id: 1,
    text: "Здравствуйте! У меня проблема с доступом к аккаунту",
    sender: "user",
    timestamp: "10:30"
  },
  {
    id: 2,
    text: "Здравствуйте! Я помогу вам решить эту проблему. Пожалуйста, опишите подробнее, что происходит.",
    sender: "operator",
    timestamp: "10:31"
  }
];

const TelegramMessages = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(mockClients[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-120px)]">
        {/* Список обращений */}
        <div className="col-span-3 bg-white rounded-lg shadow overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Обращения</h2>
            {mockClients.map((client) => (
              <div
                key={client.id}
                className={`p-3 rounded-lg mb-2 cursor-pointer hover:bg-gray-50 ${
                  selectedClient?.id === client.id ? "bg-blue-50" : ""
                }`}
                onClick={() => setSelectedClient(client)}
              >
                <div className="font-medium">{client.name}</div>
                <div className="text-sm text-gray-600">{client.topic}</div>
                <div className="text-xs text-gray-500 mt-1">{client.lastMessage}</div>
                <div className="flex gap-2 mt-2">
                  {client.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
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
        <div className="col-span-6 bg-white rounded-lg shadow flex flex-col">
          <div className="p-4 border-b">
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
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <div className="text-sm">{message.text}</div>
                  <div className="text-xs mt-1 opacity-70">{message.timestamp}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2 items-center">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mic className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Введите сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button variant="ghost" size="icon">
                <Smile className="h-5 w-5" />
              </Button>
              <Button>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Информация о клиенте */}
        <div className="col-span-3 bg-white rounded-lg shadow">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Информация о клиенте</h2>
            {selectedClient && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Имя</label>
                  <div className="font-medium">{selectedClient.name}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Тема обращения</label>
                  <div className="font-medium">{selectedClient.topic}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Теги</label>
                  <div className="flex gap-2 mt-1">
                    {selectedClient.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
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

export default TelegramMessages;