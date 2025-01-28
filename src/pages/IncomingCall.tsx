import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

const IncomingCall = () => {
  const templateAnswers = [
    "Спасибо за ваш звонок. Как я могу вам помочь?",
    "Я понимаю вашу проблему. Позвольте мне помочь вам с этим.",
    "Не могли бы вы предоставить больше деталей о вашей проблеме?",
    "Позвольте мне проверить эту информацию для вас прямо сейчас.",
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card className="col-span-1 md:col-span-6 p-6">
          <h2 className="text-2xl font-semibold mb-4">Детали Запроса</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Источник:</span>
              <span>Телефонный звонок</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Время:</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
            <div>
              <span className="font-medium">Запрос:</span>
              <p className="mt-2 text-gray-600">
                Запрос клиента о доступности услуг и ценах
              </p>
            </div>
          </div>
        </Card>

        <Card className="col-span-1 md:col-span-6 p-6">
          <h2 className="text-2xl font-semibold mb-4">Информация о Клиенте</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Имя</label>
              <Input placeholder="Введите имя клиента" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Телефон</label>
              <Input placeholder="Введите номер телефона" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input placeholder="Введите email адрес" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Заметки</label>
              <Input placeholder="Добавьте дополнительные заметки" />
            </div>
          </div>
        </Card>

        <Card className="col-span-1 md:col-span-12 p-6">
          <h2 className="text-2xl font-semibold mb-4">Быстрые Ответы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templateAnswers.map((answer, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto py-3 px-4 text-left"
                onClick={() => console.log("Выбран шаблон:", answer)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default IncomingCall;