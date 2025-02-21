
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const KeyPerformanceIndicators = () => {
  const kpis = [
    {
      title: "Процент записей",
      value: 78,
      trend: "up",
      target: 80,
      description: "Целевой показатель: 80%"
    },
    {
      title: "Негативные отзывы",
      value: 12,
      trend: "down",
      target: 10,
      description: "Выше нормы на 2%"
    },
    {
      title: "Отклонения от нормы",
      value: 15,
      trend: "up",
      target: 5,
      description: "Требует внимания"
    }
  ];

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
      {kpis.map((kpi) => (
        <Card key={kpi.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {kpi.title}
            </CardTitle>
            {kpi.trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}%</div>
            <Progress 
              value={(kpi.value / kpi.target) * 100} 
              className="mt-2"
            />
            <p className="text-xs text-muted-foreground mt-2">
              {kpi.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KeyPerformanceIndicators;
