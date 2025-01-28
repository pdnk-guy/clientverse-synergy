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
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    onSubmit(taskData);
    setTaskData({ type: "", customerName: "", description: "", dueDate: "" });
    toast({
      title: "Success",
      description: "Task created successfully",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        value={taskData.type}
        onValueChange={(value) => setTaskData({ ...taskData, type: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select task type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="retention">Retention Call</SelectItem>
          <SelectItem value="reminder">Reminder</SelectItem>
          <SelectItem value="promotion">Promotional Offer</SelectItem>
        </SelectContent>
      </Select>

      <Input
        placeholder="Customer Name"
        value={taskData.customerName}
        onChange={(e) => setTaskData({ ...taskData, customerName: e.target.value })}
      />

      <Textarea
        placeholder="Task Description"
        value={taskData.description}
        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
      />

      <Input
        type="date"
        value={taskData.dueDate}
        onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })}
      />

      <Button type="submit">Create Task</Button>
    </form>
  );
};

export default TaskForm;