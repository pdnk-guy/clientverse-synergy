import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState("7d");
  const [employeeFilter, setEmployeeFilter] = useState("all");
  const [requestTypeFilter, setRequestTypeFilter] = useState("all");

  // Sample data - replace with real data in production
  const performanceData = [
    { name: 'Пн', value: 85 },
    { name: 'Вт', value: 92 },
    { name: 'Ср', value: 78 },
    { name: 'Чт', value: 95 },
    { name: 'Пт', value: 88 },
  ];

  const employeePerformance = [
    { name: 'Иван', score: 95, color: '#1EAEDB' },
    { name: 'Мария', score: 88, color: '#9b87f5' },
    { name: 'Михаил', score: 75, color: '#FEC6A1' },
    { name: 'Елена', score: 92, color: '#1EAEDB' },
  ];

  // Top 3 employees data
  const topEmployees = [
    {
      name: "Иванов Сергей",
      metrics: [
        { name: "Среднее время обработки", value: "1м 45с" },
        { name: "Конверсия", value: "42%" },
        { name: "Продажи", value: "28 авто" }
      ]
    },
    {
      name: "Петрова Анна",
      metrics: [
        { name: "Запись на сервис", value: "145 записей" },
        { name: "Среднее время обработки", value: "2м 10с" },
        { name: "Конверсия", value: "38%" }
      ]
    },
    {
      name: "Сидоров Максим",
      metrics: [
        { name: "Продажи", value: "25 авто" },
        { name: "Конверсия", value: "35%" },
        { name: "Запись на сервис", value: "132 записей" }
      ]
    }
  ];

  // Updated colors for rankings
  const rankingColors = {
    first: "bg-amber-100 border-amber-300",    // Gold
    second: "bg-gray-100 border-gray-300",     // Silver
    third: "bg-orange-100 border-orange-300",  // Bronze
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Период времени" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Последние 7 дней</SelectItem>
              <SelectItem value="30d">Последние 30 дней</SelectItem>
              <SelectItem value="90d">Последние 90 дней</SelectItem>
            </SelectContent>
          </Select>

          <Select value={employeeFilter} onValueChange={setEmployeeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Сотрудник" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все сотрудники</SelectItem>
              <SelectItem value="john">Иван</SelectItem>
              <SelectItem value="sarah">Мария</SelectItem>
            </SelectContent>
          </Select>

          <Select value={requestTypeFilter} onValueChange={setRequestTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Тип запроса" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все запросы</SelectItem>
              <SelectItem value="calls">Звонки</SelectItem>
              <SelectItem value="messages">Сообщения</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Top 3 Employees Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Топ 3 лучших сотрудника
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topEmployees.map((employee, index) => (
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

        {/* Key Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Среднее время обработки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#1EAEDB]">2м 30с</div>
              <p className="text-sm text-muted-foreground">-12% с прошлой недели</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Загрузка сотрудников</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#9b87f5]">78%</div>
              <p className="text-sm text-muted-foreground">+5% с прошлой недели</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Коэффициент конверсии</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#ea384c]">32%</div>
              <p className="text-sm text-muted-foreground">+2% с прошлой недели</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Эффективность сотрудников</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={employeePerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#9b87f5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Forecast Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Прогноз эффективности</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#1EAEDB" 
                    fill="#F2FCE2" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
