import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { ClientInfoDrawer } from "@/components/phone/ClientInfoDrawer";

export interface Task {
  id: string;
  type: string;
  customerName: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed";
}

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string) => void;
  type: string;
}

const TaskList = ({ tasks, onStatusChange, type }: TaskListProps) => {
  const [selectedClient, setSelectedClient] = useState<{
    name: string;
    phone: string;
    email: string;
    lastVisit: string;
    carModel: string;
    serviceHistory: string[];
  } | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClientClick = (customerName: string) => {
    // Mock client data - in a real app, this would come from an API
    const mockClientData = {
      name: customerName,
      phone: "+7 (999) 123-45-67",
      email: `${customerName.toLowerCase().replace(" ", ".")}@example.com`,
      lastVisit: "2024-02-20",
      carModel: "BMW X5",
      serviceHistory: [
        "Плановое ТО - 2024-02-15",
        "Замена масла - 2024-01-20",
        "Диагностика - 2023-12-10"
      ]
    };
    setSelectedClient(mockClientData);
    setIsDrawerOpen(true);
  };

  const filteredTasks = tasks.filter((task) => task.type === type);

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle 
              className="text-lg cursor-pointer hover:text-blue-600"
              onClick={() => handleClientClick(task.customerName)}
            >
              {task.customerName}
            </CardTitle>
            <CardDescription>
              Due: {format(new Date(task.dueDate), "PPP")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{task.description}</p>
            <Button
              variant={task.status === "completed" ? "secondary" : "default"}
              onClick={() => onStatusChange(task.id)}
            >
              {task.status === "completed" ? "Выполнено" : "Отметить как выполненное"}
            </Button>
          </CardContent>
        </Card>
      ))}
      {selectedClient && (
        <ClientInfoDrawer
          client={selectedClient}
          isOpen={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        />
      )}
    </div>
  );
};

export default TaskList;