import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopEmployeeMetric {
  name: string;
  value: string;
}

interface TopEmployee {
  name: string;
  metrics: TopEmployeeMetric[];
}

interface TopEmployeesProps {
  employees: TopEmployee[];
}

const rankingColors = {
  first: "bg-amber-100 border-amber-300",    // Gold
  second: "bg-gray-100 border-gray-300",     // Silver
  third: "bg-orange-100 border-orange-300",  // Bronze
};

export const TopEmployees = ({ employees }: TopEmployeesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Топ 3 лучших сотрудника
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {employees.map((employee, index) => (
            <Card 
              key={index} 
              className={cn(
                "border-2",
                index === 0 && rankingColors.first,
                index === 1 && rankingColors.second,
                index === 2 && rankingColors.third
              )}
            >
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className={cn(
                    "text-2xl font-bold",
                    index === 0 && "text-amber-500",
                    index === 1 && "text-gray-500",
                    index === 2 && "text-orange-700"
                  )}>
                    #{index + 1}
                  </span>
                  {employee.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {employee.metrics.map((metric, mIndex) => (
                      <TableRow key={mIndex}>
                        <TableCell className="text-sm text-muted-foreground">
                          {metric.name}
                        </TableCell>
                        <TableCell className="text-sm font-medium">
                          {metric.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};