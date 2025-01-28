import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export interface TaskFormProps {
  onSubmit: (task: {
    type: string;
    customerName: string;
    description: string;
    dueDate: string;
  }) => void;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const { toast } = useToast();
  const [taskData, setTaskData] = useState({
    type: "",
    customerName: "",
    description: "",
    dueDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskData.type || !taskData.customerName || !taskData.description || !taskData.dueDate) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }
    onSubmit(taskData);
    setTaskData({ type: "", customerName: "", description: "", dueDate: "" });
    toast({
      title: "Успех",
      description: "Задача успешно создана",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        value={taskData.type}
        onValueChange={(value) => setTaskData({ ...taskData, type: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Выберите тип задачи" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="retention">Звонок по удержанию</SelectItem>
          <SelectItem value="reminder">Напоминание</SelectItem>
          <SelectItem value="promotion">Промо-предложение</SelectItem>
        </SelectContent>
      </Select>

      <Input
        placeholder="Имя клиента"
        value={taskData.customerName}
        onChange={(e) => setTaskData({ ...taskData, customerName: e.target.value })}
      />

      <Textarea
        placeholder="Описание задачи"
        value={taskData.description}
        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
      />

      <Input
        type="date"
        value={taskData.dueDate}
        onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })}
      />

      <Button type="submit">Создать задачу</Button>
    </form>
  );
};

export default TaskForm;