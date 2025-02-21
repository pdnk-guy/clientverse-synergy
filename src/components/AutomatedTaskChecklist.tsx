
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
  id: string;
  title: string;
  source: "email" | "crm" | "internal";
  priority: "high" | "medium" | "low";
  completed: boolean;
  dueDate: string;
}

const AutomatedTaskChecklist = () => {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Проверить отчеты по качеству обслуживания",
      source: "internal",
      priority: "high",
      completed: false,
      dueDate: "2024-03-20"
    },
    {
      id: "2",
      title: "Обработать входящие заявки из CRM",
      source: "crm",
      priority: "medium",
      completed: false,
      dueDate: "2024-03-20"
    },
    {
      id: "3",
      title: "Ответить на важные письма",
      source: "email",
      priority: "high",
      completed: true,
      dueDate: "2024-03-20"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Автоматический чек-лист задач</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center space-x-4 p-2 rounded-lg ${
                task.priority === "high" ? "bg-red-50" :
                task.priority === "medium" ? "bg-yellow-50" : "bg-green-50"
              }`}
            >
              <Checkbox checked={task.completed} />
              <div className="flex-1">
                <p className="font-medium">{task.title}</p>
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
