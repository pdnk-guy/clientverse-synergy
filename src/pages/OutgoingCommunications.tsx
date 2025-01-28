import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Phone, MessageSquare, Filter } from "lucide-react";

interface Task {
  id: string;
  type: "retention" | "reminder" | "promotion";
  customerName: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed";
}

const OutgoingCommunications = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      type: "retention",
      customerName: "John Doe",
      description: "Follow up on service satisfaction",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: "2",
      type: "reminder",
      customerName: "Jane Smith",
      description: "Annual maintenance reminder",
      dueDate: "2024-03-22",
      status: "pending",
    },
    {
      id: "3",
      type: "promotion",
      customerName: "Mike Johnson",
      description: "Spring service special offer",
      dueDate: "2024-03-25",
      status: "pending",
    },
  ]);

  const [filters, setFilters] = useState({
    lastVisit: "",
    carType: "",
    taskType: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    console.log("Filters updated:", { ...filters, [key]: value });
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
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Outgoing Communications</h2>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Create New Message
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>
              Filter tasks based on customer segments
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Select
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

          {["retention", "reminders", "promotions"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize">{tab} Tasks</CardTitle>
                  <CardDescription>
                    Manage your {tab} communication tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks
                      .filter((task) => task.type === tab.replace("s", ""))
                      .map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <h3 className="font-medium">{task.customerName}</h3>
                            <p className="text-sm text-gray-500">
                              {task.description}
                            </p>
                            <p className="text-sm text-gray-500">
                              Due: {task.dueDate}
                            </p>
                          </div>
                          <Button
                            variant={
                              task.status === "completed"
                                ? "secondary"
                                : "default"
                            }
                            onClick={() => handleTaskStatusChange(task.id)}
                          >
                            {task.status === "completed"
                              ? "Completed"
                              : "Mark Complete"}
                          </Button>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default OutgoingCommunications;