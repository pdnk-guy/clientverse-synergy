import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Mail, Clock, Car, MessageSquare, Gift } from "lucide-react";

const Customer = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const customerHistory = [
    { type: "call", date: "2024-02-20", description: "Запрос на плановое обслуживание" },
    { type: "visit", date: "2024-02-15", description: "Замена масла" },
    { type: "work", date: "2024-02-10", description: "Замена тормозных колодок" },
  ];

  const filteredHistory = selectedFilter === "all" 
    ? customerHistory 
    : customerHistory.filter(item => item.type === selectedFilter);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Личная информация
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Иван Иванов</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+7 123 456 7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>ivan.ivanov@example.com</span>
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              История
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedFilter("all")}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedFilter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                Все
              </button>
              <button
                onClick={() => setSelectedFilter("call")}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedFilter === "call" ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                Звонки
              </button>
              <button
                onClick={() => setSelectedFilter("visit")}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedFilter === "visit" ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                Визиты
              </button>
              <button
                onClick={() => setSelectedFilter("work")}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedFilter === "work" ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                Работы
              </button>
            </div>
            <div className="space-y-4">
              {filteredHistory.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Clock className="h-4 w-4 mt-1" />
                  <div>
                    <div className="font-medium">{item.description}</div>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Information and Reviews */}
        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              Информация об автомобиле
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">VIN</div>
              <div>1HGCM82633A123456</div>
              <div className="text-sm text-muted-foreground mt-4">Гос. номер</div>
              <div>А123БВ777</div>
              <div className="text-sm text-muted-foreground mt-4">Пробег</div>
              <div>73,500 км</div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-semibold">Отзывы клиента</h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <div className="text-sm">Отличный сервис! Очень профессиональная команда.</div>
                  <div className="text-xs text-muted-foreground mt-1">2024-02-15</div>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <div className="text-sm">Быстрое и качественное обслуживание.</div>
                  <div className="text-xs text-muted-foreground mt-1">2024-02-10</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personalized Offers */}
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Персональные предложения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((offer) => (
                <div key={offer} className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium mb-2">Специальное предложение #{offer}</h4>
                  <p className="text-sm text-muted-foreground">
                    Выгодное предложение на обслуживание вашего автомобиля.
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Customer;