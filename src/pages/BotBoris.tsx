import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const BotBoris = () => {
  const statsData = [
    { label: "Всего звонков проанализировал", value: 23901, color: "#c2e6c8" },
    { label: "Из них: Нет КД", value: 8083, color: "#ffd7cc" },
    { label: "Из них: Непрофильные звонки", value: 536, color: "#e6e9f0" },
    { label: "Из них: Негативных эмоций", value: 736, color: "#cce0ff" },
  ];

  const pieData1 = [
    { name: "Запись на сервис", value: 47.7, color: "#e6e6fa" },
    { name: "Перезвонить", value: 15.8, color: "#ffe4b5" },
    { name: "Нет КД", value: 34.6, color: "#ffb6c1" },
    { name: "Нет ответа МТК", value: 1.9, color: "#dc143c" },
  ];

  const pieData2 = [
    { name: "Узнать стоимость", value: 30.8, color: "#ffa07a" },
    { name: "Не устраивает дата", value: 30.4, color: "#98fb98" },
    { name: "Нет нужной запчасти", value: 24.7, color: "#87ceeb" },
    { name: "Другое", value: 8.0, color: "#dda0dd" },
    { name: "Нет ответа МТК", value: 6.1, color: "#dc143c" },
  ];

  const additionalStats = [
    {
      label: "Средняя длительность разговора",
      value: "4:31",
      color: "#F2FCE2",
      subtext: "минут",
    },
    {
      label: "Среднее время ожидания",
      value: "0:42",
      color: "#FEF7CD",
      subtext: "секунд",
    },
    {
      label: "Пропущенные звонки",
      value: "12%",
      color: "#FEC6A1",
      subtext: "от общего количества",
    },
    {
      label: "Успешные коммуникации",
      value: "89%",
      color: "#E5DEFF",
      subtext: "положительный результат",
    },
  ];

  const performanceData = [
    { month: "Янв", value: 85 },
    { month: "Фев", value: 88 },
    { month: "Мар", value: 92 },
    { month: "Апр", value: 87 },
    { month: "Май", value: 91 },
    { month: "Июн", value: 94 },
  ];

  const locationData = [
    {
      location: "Внуково",
      data: [
        { name: "Запись на сервис", value: 45.2, color: "#e6e6fa" },
        { name: "Перезвонить", value: 13.8, color: "#ffe4b5" },
        { name: "Нет КД", value: 38.5, color: "#ffb6c1" },
        { name: "Нет ответа МТК", value: 2.5, color: "#dc143c" },
      ]
    },
    {
      location: "Юг Архангельский",
      data: [
        { name: "Запись на сервис", value: 42.0, color: "#e6e6fa" },
        { name: "Перезвонить", value: 15.0, color: "#ffe4b5" },
        { name: "Нет КД", value: 40.0, color: "#ffb6c1" },
        { name: "Нет ответа МТК", value: 3.0, color: "#dc143c" },
      ]
    },
    {
      location: "Юг Квитка",
      data: [
        { name: "Запись на сервис", value: 45.3, color: "#e6e6fa" },
        { name: "Перезвонить", value: 16.1, color: "#ffe4b5" },
        { name: "Нет КД", value: 36.7, color: "#ffb6c1" },
        { name: "Нет ответа МТК", value: 1.9, color: "#dc143c" },
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <Card
              key={stat.label}
              className="p-6"
              style={{ backgroundColor: stat.color }}
            >
              <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Сравнение КД по локациям</h3>
          <div className="grid grid-cols-3 gap-6">
            {locationData.map((location) => (
              <div key={location.location} className="space-y-4">
                <h4 className="text-base font-medium">{location.location}</h4>
                <p className="text-sm text-gray-600">Доля КД агрегированный</p>
                <PieChart width={300} height={300}>
                  <Pie
                    data={location.data}
                    cx={150}
                    cy={150}
                    innerRadius={0}
                    outerRadius={100}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {location.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">
              Доля КД дрегированный - Входящие звонки
            </h3>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData1}
                cx={200}
                cy={150}
                innerRadius={0}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                {pieData1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Причины отказа %</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData2}
                cx={200}
                cy={150}
                innerRadius={0}
                outerRadius={100}
                paddingAngle={0}
                dataKey="value"
              >
                {pieData2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {additionalStats.map((stat) => (
            <Card
              key={stat.label}
              className="p-6"
              style={{ backgroundColor: stat.color }}
            >
              <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Эффективность работы бота</h3>
          <BarChart width={1000} height={300} data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8B5CF6" />
          </BarChart>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BotBoris;
