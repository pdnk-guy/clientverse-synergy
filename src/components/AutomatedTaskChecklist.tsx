
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PhoneOff, AlertTriangle, Clock } from "lucide-react";

interface Task {
  id: string;
  title: string;
  source: "email" | "crm" | "internal" | "call" | "request";
  priority: "urgent" | "high" | "medium" | "low";
  completed: boolean;
  dueDate: string;
  type?: string;
}

const AutomatedTaskChecklist = () => {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Пропущенный звонок от VIP клиента",
      source: "call",
      priority: "urgent",
      completed: false,
      dueDate: "2024-03-20",
      type: "missed_call"
    },
    {
      id: "2",
      title: "Срочная заявка на ремонт",
      source: "request",
      priority: "urgent",
      completed: false,
      dueDate: "2024-03-20",
      type: "urgent_request"
    },
    {
      id: "3",
      title: "Проверить отчеты по качеству обслуживания",
      source: "internal",
      priority: "high",
      completed: false,
      dueDate: "2024-03-20"
    },
    {
      id: "4",
      title: "Обработать входящие заявки из CRM",
      source: "crm",
      priority: "medium",
      completed: false,
      dueDate: "2024-03-20"
    }
  ];

  // Sort tasks by priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  const getPriorityStyles = (priority: Task['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 border-red-200';
      case 'high':
        return 'bg-orange-50 border-orange-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      case 'low':
        return 'bg-green-50 border-green-200';
    }
  };

  const getTaskIcon = (task: Task) => {
    switch (task.type) {
      case 'missed_call':
        return <PhoneOff className="h-4 w-4 text-red-500" />;
      case 'urgent_request':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Приоритетные задачи</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedTasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center space-x-4 p-3 rounded-lg border ${getPriorityStyles(task.priority)}`}
            >
              <div className="flex-shrink-0">
                {getTaskIcon(task)}
              </div>
              <Checkbox checked={task.completed} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{task.title}</p>
                  {task.priority === 'urgent' && (
                    <Badge variant="destructive" className="ml-2">Срочно</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Источник: {task.source} | Срок: {task.dueDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomatedTaskChecklist;
