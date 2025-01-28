import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: string;
  name: string;
  price: number;
}

const services: Service[] = [
  { id: "1", name: "Замена масла", price: 2500 },
  { id: "2", name: "Диагностика", price: 3000 },
  { id: "3", name: "Замена фильтров", price: 1500 },
  { id: "4", name: "Замена тормозных колодок", price: 4000 },
];

const ServiceCalculator = () => {
  const { toast } = useToast();
  const [carBrand, setCarBrand] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!carBrand || !carModel || !carNumber || !selectedService) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    const service = services.find((s) => s.id === selectedService);
    if (service) {
      setTotalPrice(service.price);
      toast({
        title: "Расчет выполнен",
        description: `Стоимость услуги: ${service.price} ₽`,
      });
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Калькулятор работ</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Марка автомобиля</label>
          <Input
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            placeholder="Введите марку автомобиля"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Модель автомобиля</label>
          <Input
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            placeholder="Введите модель автомобиля"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Гос. номер или VIN
          </label>
          <Input
            value={carNumber}
            onChange={(e) => setCarNumber(e.target.value)}
            placeholder="Введите гос. номер или VIN"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Услуга</label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите услугу" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name} - {service.price} ₽
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={calculatePrice} className="w-full">
          Рассчитать стоимость
        </Button>
        {totalPrice !== null && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">
              Итоговая стоимость: {totalPrice} ₽
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ServiceCalculator;