
import { Button } from "@/components/ui/button";
import { Focus, Timer } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useFocus } from "@/contexts/FocusContext";
import { cn } from "@/lib/utils";

const FocusControls = () => {
  const {
    focusMode,
    focusType,
    setFocusMode,
    setFocusType,
    startFocusTimer,
    focusTimer,
  } = useFocus();
  const [selectedDuration, setSelectedDuration] = useState("30");

  const handleFocusStart = () => {
    setFocusMode(true);
    startFocusTimer(Number(selectedDuration));
  };

  const handleFocusEnd = () => {
    setFocusMode(false);
    setFocusType(null);
  };

  const formatTimer = (seconds: number | null) => {
    if (!seconds) return "";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2">
      {focusMode ? (
        <Button
          onClick={handleFocusEnd}
          variant="default"
          className="bg-primary text-primary-foreground"
        >
          <Focus className="h-4 w-4 mr-2" />
          Выйти из фокуса {focusTimer && `(${formatTimer(focusTimer)})`}
        </Button>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Focus className="h-4 w-4 mr-2" />
              Режим фокуса
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Настройки фокусировки</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Тип фокусировки</label>
                <Select
                  value={focusType || ""}
                  onValueChange={(value) => setFocusType(value as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип фокусировки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">Работа с клиентом</SelectItem>
                    <SelectItem value="request">Заполнение заявки</SelectItem>
                    <SelectItem value="analytics">Анализ данных</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Длительность (минут)</label>
                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите длительность" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 минут</SelectItem>
                    <SelectItem value="30">30 минут</SelectItem>
                    <SelectItem value="45">45 минут</SelectItem>
                    <SelectItem value="60">1 час</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleFocusStart}
                disabled={!focusType}
                className="w-full"
              >
                Начать фокусировку
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default FocusControls;
