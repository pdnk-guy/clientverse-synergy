import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const data = [
  {
    name: "Пн",
    calls: 45,
    chats: 30,
    telegram: 25,
    whatsapp: 20,
  },
  {
    name: "Вт",
    calls: 50,
    chats: 35,
    telegram: 28,
    whatsapp: 22,
  },
  {
    name: "Ср",
    calls: 48,
    chats: 38,
    telegram: 30,
    whatsapp: 25,
  },
  {
    name: "Чт",
    calls: 52,
    chats: 40,
    telegram: 32,
    whatsapp: 28,
  },
  {
    name: "Пт",
    calls: 55,
    chats: 42,
    telegram: 35,
    whatsapp: 30,
  },
];

const CommunicationsSourceChart = () => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold mb-2">Количество обращений по источникам</h3>
      <div className="h-[200px]">
        <ChartContainer
          config={{
            primary: {
              theme: {
                light: "#1EAEDB",
                dark: "#1EAEDB",
              },
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip />
              <Legend />
              <Bar dataKey="calls" name="Звонки" fill="#1EAEDB" />
              <Bar dataKey="chats" name="Чаты" fill="#9b87f5" />
              <Bar dataKey="telegram" name="Telegram" fill="#2AABEE" />
              <Bar dataKey="whatsapp" name="WhatsApp" fill="#25D366" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default CommunicationsSourceChart;