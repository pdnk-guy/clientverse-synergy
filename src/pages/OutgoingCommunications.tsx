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
import { Phone, MessageSquare, Calendar, List } from "lucide-react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useToast } from "@/hooks/use-toast";
import ServiceCalculator from "@/components/ServiceCalculator";
import DealershipCalendar from "@/components/DealershipCalendar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

interface Task {
  id: string;
  type: string;
  customerName: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed";
}

interface CallListItem {
  id: string;
  customerName: string;
  carMake: string;
  carModel: string;
  location: string;
  callPurpose: string;
  comment: string;
}

const OutgoingCommunications = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    lastVisit: "",
    carType: "",
    taskType: "",
  });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [callList, setCallList] = useState<CallListItem[]>([]);

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

  const generateCallList = () => {
    // В реальном приложении здесь будет API запрос
    const mockCallList: CallListItem[] = [
      {
        id: "1",
        customerName: "Иванов Иван",
        carMake: "Toyota",
        carModel: "Camry",
        location: "МКАД 23",
        callPurpose: "Напоминание о ТО",
        comment: "",
      },
      {
        id: "2",
        customerName: "Петров Петр",
        carMake: "BMW",
        carModel: "X5",
        location: "Внуково",
        callPurpose: "Предложение доп.услуг",
        comment: "",
      },
      {
        id: "3",
        customerName: "Сидоров Сидор",
        carMake: "Mercedes",
        carModel: "E-class",
        location: "Ярославка",
        callPurpose: "Обратная связь после ТО",
        comment: "",
      },
    ];
    setCallList(mockCallList);
    setSelectedDate(new Date().toISOString().split('T')[0]);
    toast({
      title: "Список Сформирован",
      description: "Лист обзвона успешно сгенерирован",
    });
  };

  const handleCommentChange = (id: string, comment: string) => {
    setCallList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, comment } : item
      )
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Исходящие Коммуникации</h2>
          <div className="space-x-4">
            <Button onClick={() => document.getElementById("task-form")?.scrollIntoView()}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Создать Новую Задачу
            </Button>
            <Button onClick={generateCallList}>
              <List className="mr-2 h-4 w-4" />
              Сформировать Лист Обзвона
            </Button>
          </div>
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

        {selectedDate && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Лист Обзвона на {selectedDate}</CardTitle>
              <CardDescription>
                Список клиентов для обзвона с информацией об автомобилях и целью звонка
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Клиент</TableHead>
                        <TableHead>Автомобиль</TableHead>
                        <TableHead>Локация</TableHead>
                        <TableHead>Цель Звонка</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {callList.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.customerName}</TableCell>
                          <TableCell>{item.carMake} {item.carModel}</TableCell>
                          <TableCell>{item.location}</TableCell>
                          <TableCell>{item.callPurpose}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <div className="space-y-4">
                    {callList.map((item) => (
                      <div key={item.id} className="space-y-2">
                        <p className="font-medium">{item.customerName}</p>
                        <Textarea
                          placeholder="Добавить комментарий"
                          value={item.comment}
                          onChange={(e) => handleCommentChange(item.id, e.target.value)}
                          className="h-24"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card id="task-form">
          <CardHeader>
            <CardTitle>Создать Новую Задачу</CardTitle>
            <CardDescription>Добавить новую коммуникационную задачу</CardDescription>
          </CardHeader>
          <CardContent>
            <TaskForm onSubmit={handleCreateTask} />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCalculator />
          <DealershipCalendar />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OutgoingCommunications;
