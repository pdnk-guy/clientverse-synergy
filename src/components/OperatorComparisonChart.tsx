import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ваше время", value: 2.5 },
  { name: "Оператор 1", value: 3.2 },
  { name: "Оператор 2", value: 2.8 },
  { name: "Оператор 3", value: 4.1 },
  { name: "Оператор 4", value: 3.5 },
];

const OperatorComparisonChart = () => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold mb-2">Среднее время ответа (мин)</h3>
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
              <Bar dataKey="value" fill="#1EAEDB" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default OperatorComparisonChart;