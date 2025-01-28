import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const dealerships = [
  { id: "mkad29", name: "МКАД 29" },
  { id: "vnukovo", name: "Внуково" },
  { id: "yaroslavka", name: "Ярославка" },
];

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const DealershipCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDealership, setSelectedDealership] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!date || !selectedDealership || !selectedTime) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите дату, дилерский центр и время",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Запись создана",
      description: `Запись в ${
        dealerships.find((d) => d.id === selectedDealership)?.name
      } на ${date.toLocaleDateString()} ${selectedTime}`,
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Запись в дилерский центр</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Дилерский центр
            </label>
            <Select
              value={selectedDealership}
              onValueChange={setSelectedDealership}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите дилерский центр" />
              </SelectTrigger>
              <SelectContent>
                {dealerships.map((dealership) => (
                  <SelectItem key={dealership.id} value={dealership.id}>
                    {dealership.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Доступное время
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
      <Button onClick={handleBooking} className="w-full mt-6">
        Записаться
      </Button>
    </Card>
  );
};

export default DealershipCalendar;