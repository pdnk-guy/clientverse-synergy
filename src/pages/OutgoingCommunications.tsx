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
    console.log("New task created:", newTask);
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
      title: "Task Updated",
      description: "Task status has been updated successfully",
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    console.log("Filters updated:", { ...filters, [key]: value });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Outgoing Communications</h2>
          <Button onClick={() => document.getElementById("task-form")?.scrollIntoView()}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Create New Task
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Filter tasks based on customer segments</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Select
              value={filters.lastVisit}
              onValueChange={(value) => handleFilterChange("lastVisit", value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Last Visit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="60">Last 60 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.carType}
              onValueChange={(value) => handleFilterChange("carType", value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Car Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.taskType}
              onValueChange={(value) => handleFilterChange("taskType", value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Task Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retention">Retention Calls</SelectItem>
                <SelectItem value="reminder">Reminders</SelectItem>
                <SelectItem value="promotion">Promotional Offers</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Tabs defaultValue="retention" className="w-full">
          <TabsList>
            <TabsTrigger value="retention">
              <Phone className="mr-2 h-4 w-4" />
              Retention Calls
            </TabsTrigger>
            <TabsTrigger value="reminders">
              <Calendar className="mr-2 h-4 w-4" />
              Reminders
            </TabsTrigger>
            <TabsTrigger value="promotions">
              <MessageSquare className="mr-2 h-4 w-4" />
              Promotional Offers
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
            <CardTitle>Create New Task</CardTitle>
            <CardDescription>Add a new communication task</CardDescription>
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