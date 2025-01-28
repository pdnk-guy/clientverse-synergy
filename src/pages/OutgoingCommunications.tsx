import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: string;
  type: string;
  customerName: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed";
}

const OutgoingCommunications = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    lastVisit: "",
    carType: "",
    taskType: "",
  });

  const handleCreateTask = (taskData: Omit<Task, "id" | "status">) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      status: "pending",
    };
    setTasks((prev) => [...prev, newTask]);
    console.log("Создана новая задача:", newTask);
  };

  const handleTaskStatusChange = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
    toast({
      title: "Задача Обновлена",
      description: "Статус задачи был успешно обновлен",
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    console.log("Фильтры обновлены:", { ...filters, [key]: value });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Исходящие Коммуникации</h2>
          <Button onClick={() => document.getElementById("task-form")?.scrollIntoView()}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Создать Новую Задачу
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Фильтры</CardTitle>
            <CardDescription>Фильтровать задачи по сегментам клиентов</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Select
              value={filters.lastVisit}
              onValueChange={(value) => handleFilterChange("lastVisit", value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Последний Визит" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Последние 30 дней</SelectItem>
                <SelectItem value="60">Последние 60 дней</SelectItem>
                <SelectItem value="90">Последние 90 дней</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.carType}
              onValueChange={(value) => handleFilterChange("carType", value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Тип Автомобиля" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Седан</SelectItem>
                <SelectItem value="suv">Внедорожник</SelectItem>
                <SelectItem value="truck">Грузовик</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.taskType}
              onValueChange={(value) => handleFilterChange("taskType", value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Тип Задачи" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retention">Звонки по удержанию</SelectItem>
                <SelectItem value="reminder">Напоминания</SelectItem>
                <SelectItem value="promotion">Промо-предложения</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Tabs defaultValue="retention" className="w-full">
          <TabsList>
            <TabsTrigger value="retention">
              <Phone className="mr-2 h-4 w-4" />
              Звонки по удержанию
            </TabsTrigger>
            <TabsTrigger value="reminders">
              <Calendar className="mr-2 h-4 w-4" />
              Напоминания
            </TabsTrigger>
            <TabsTrigger value="promotions">
              <MessageSquare className="mr-2 h-4 w-4" />
              Промо-предложения
            </TabsTrigger>
          </TabsList>

          <TabsContent value="retention">
            <TaskList
              tasks={tasks}
              onStatusChange={handleTaskStatusChange}
              type="retention"
            />
          </TabsContent>
          <TabsContent value="reminders">
            <TaskList
              tasks={tasks}
              onStatusChange={handleTaskStatusChange}
              type="reminder"
            />
          </TabsContent>
          <TabsContent value="promotions">
            <TaskList
              tasks={tasks}
              onStatusChange={handleTaskStatusChange}
              type="promotion"
            />
          </TabsContent>
        </Tabs>

        <Card id="task-form">
          <CardHeader>
            <CardTitle>Создать Новую Задачу</CardTitle>
            <CardDescription>Добавить новую коммуникационную задачу</CardDescription>
          </CardHeader>
          <CardContent>
            <TaskForm onSubmit={handleCreateTask} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OutgoingCommunications;
