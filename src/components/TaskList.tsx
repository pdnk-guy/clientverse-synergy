import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";

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
  const filteredTasks = tasks.filter((task) => task.type === type);

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle className="text-lg">{task.customerName}</CardTitle>
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
              {task.status === "completed" ? "Completed" : "Mark Complete"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;