import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { time: "9:00", value: 30 },
  { time: "10:00", value: 45 },
  { time: "11:00", value: 65 },
  { time: "12:00", value: 80 },
  { time: "13:00", value: 70 },
  { time: "14:00", value: 55 },
];

const WorkloadIndicator = () => {
  return (
    <div className="p-4 border-b">
      <h3 className="font-semibold mb-2">Загруженность оператора</h3>
      <div className="h-[100px]">
        <ChartContainer
          config={{
            primary: {
              theme: {
                light: "#9b87f5",
                dark: "#9b87f5",
              },
            },
          }}
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" />
            <YAxis hide />
            <ChartTooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#9b87f5"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default WorkloadIndicator;