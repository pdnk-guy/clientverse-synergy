import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, Clock, UserSquare2, PhoneOff, PhoneForwarded, ArrowLeft } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface Call {
  id: string;
  clientName: string;
  phoneNumber: string;
  status: "missed" | "answered" | "ongoing" | "waiting";
  topic: string;
  time: string;
}

interface Client {
  name: string;
  phone: string;
  email: string;
  lastVisit: string;
  carModel: string;
  serviceHistory: string[];
}

const mockCalls: Call[] = [
  {
    id: "1",
    clientName: "Иван Петров",
    phoneNumber: "+7 (999) 123-45-67",
    status: "ongoing",
    topic: "Техническое обслуживание",
    time: "14:30"
  },
  {
    id: "2",
    clientName: "Анна Сидорова",
    phoneNumber: "+7 (999) 234-56-78",
    status: "waiting",
    topic: "Запись на сервис",
    time: "14:25"
  },
  {
    id: "3",
    clientName: "Петр Иванов",
    phoneNumber: "+7 (999) 345-67-89",
    status: "missed",
    topic: "Консультация",
    time: "14:20"
  }
];

const mockScripts = [
  {
    title: "Приветствие",
    text: "Здравствуйте! Спасибо за обращение в нашу службу поддержки. Как я могу помочь вам сегодня?"
  },
  {
    title: "Запись на сервис",
    text: "Я помогу вам записаться на сервисное обслуживание. Давайте уточним удобную для вас дату и время."
  },
  {
    title: "Техническая консультация",
    text: "Для того чтобы лучше понять проблему, расскажите, пожалуйста, подробнее о том, что вас беспокоит."
  }
];

const mockClient: Client = {
  name: "Иван Петров",
  phone: "+7 (999) 123-45-67",
  email: "ivan@example.com",
  lastVisit: "15.01.2024",
  carModel: "Toyota Camry 2022",
  serviceHistory: [
    "10.01.2024 - Замена масла",
    "01.12.2023 - Диагностика",
    "15.11.2023 - Замена тормозных колодок"
  ]
};

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

const PhoneCalls = () => {
  const navigate = useNavigate();
  const [selectedCall, setSelectedCall] = useState<Call | null>(mockCalls[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)]">
        {/* Left Column - Call List */}
        <Card className="col-span-3 p-4">
          <h2 className="text-lg font-semibold mb-4">Входящие звонки</h2>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-2">
              {mockCalls.map((call) => (
                <div
                  key={call.id}
                  className={`p-3 rounded-lg cursor-pointer hover:bg-accent ${
                    selectedCall?.id === call.id ? "bg-accent" : ""
                  }`}
                  onClick={() => setSelectedCall(call)}
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

        {/* Middle Column - Scripts */}
        <Card className="col-span-6 p-4">
          <h2 className="text-lg font-semibold mb-4">Скрипты диалога</h2>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-4">
              {mockScripts.map((script, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <h3 className="font-medium mb-2">{script.title}</h3>
                  <p className="text-sm text-muted-foreground">{script.text}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>

        {/* Right Column - Client Info */}
        <Card className="col-span-3 p-4">
          <h2 className="text-lg font-semibold mb-4">Информация о клиенте</h2>
          <ScrollArea className="h-[calc(100vh-12rem)]">
            {selectedCall && (
              <div className="space-y-4">
                <div>
                  <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <DrawerTrigger asChild>
                      <Button variant="ghost" className="w-full flex items-center gap-2 justify-start p-2 hover:bg-accent rounded-lg">
                        <UserSquare2 className="h-8 w-8" />
                        <h3 className="font-medium">{mockClient.name}</h3>
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle>Информация о клиенте</DrawerTitle>
                          <DrawerDescription>Детальная информация</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 space-y-4">
                          <div className="space-y-2 text-sm">
                            <p><span className="font-medium">Телефон:</span> {mockClient.phone}</p>
                            <p><span className="font-medium">Email:</span> {mockClient.email}</p>
                            <p><span className="font-medium">Последний визит:</span> {mockClient.lastVisit}</p>
                            <p><span className="font-medium">Автомобиль:</span> {mockClient.carModel}</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">История обслуживания:</h4>
                            <ul className="space-y-1 text-sm">
                              {mockClient.serviceHistory.map((service, index) => (
                                <li key={index}>{service}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="p-4">
                          <DrawerClose asChild>
                            <Button variant="outline" className="w-full">
                              Закрыть
                            </Button>
                          </DrawerClose>
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                  <div className="space-y-2 text-sm mt-4">
                    <p><span className="font-medium">Телефон:</span> {mockClient.phone}</p>
                    <p><span className="font-medium">Email:</span> {mockClient.email}</p>
                    <p><span className="font-medium">Последний визит:</span> {mockClient.lastVisit}</p>
                    <p><span className="font-medium">Автомобиль:</span> {mockClient.carModel}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">История обслуживания:</h4>
                  <ul className="space-y-1 text-sm">
                    {mockClient.serviceHistory.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </ScrollArea>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PhoneCalls;
