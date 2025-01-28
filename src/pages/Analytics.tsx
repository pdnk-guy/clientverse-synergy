import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

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