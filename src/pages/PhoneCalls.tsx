import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { CallsList } from "@/components/phone/CallsList";
import { ScriptsPanel } from "@/components/phone/ScriptsPanel";
import { ClientInfoCard } from "@/components/phone/ClientInfoCard";
import { PageHeader } from "@/components/phone/PageHeader";

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

const PhoneCalls = () => {
  const [selectedCall, setSelectedCall] = useState<Call | null>(mockCalls[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DashboardLayout>
      <PageHeader />
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)]">
        <CallsList 
          calls={mockCalls}
          selectedCall={selectedCall}
          onCallSelect={setSelectedCall}
        />
        <ScriptsPanel scripts={mockScripts} />
        <ClientInfoCard
          client={mockClient}
          isDrawerOpen={isDrawerOpen}
          onDrawerOpenChange={setIsDrawerOpen}
        />
      </div>
    </DashboardLayout>
  );
};

export default PhoneCalls;
