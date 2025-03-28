
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { TopEmployees } from "@/components/analytics/TopEmployees";
import { PerformanceCharts } from "@/components/analytics/PerformanceCharts";
import { KeyMetrics } from "@/components/analytics/KeyMetrics";
import { AnalyticsFilters } from "@/components/analytics/AnalyticsFilters";
import WorkloadIndicator from "@/components/WorkloadIndicator";
import OperatorComparisonChart from "@/components/OperatorComparisonChart";
import CommunicationsSourceChart from "@/components/CommunicationsSourceChart";

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState("7d");
  const [employeeFilter, setEmployeeFilter] = useState("all");
  const [requestTypeFilter, setRequestTypeFilter] = useState("all");

  const performanceData = [
    { name: 'Пн', value: 85 },
    { name: 'Вт', value: 92 },
    { name: 'Ср', value: 78 },
    { name: 'Чт', value: 95 },
    { name: 'Пт', value: 88 },
  ];

  const employeePerformance = [
    { name: 'Иван', score: 95, color: '#1EAEDB', quality: 65 },
    { name: 'Мария', score: 88, color: '#9b87f5', quality: 92 },
    { name: 'Михаил', score: 75, color: '#FEC6A1', quality: 85 },
    { name: 'Елена', score: 92, color: '#1EAEDB', quality: 78 },
  ];

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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AnalyticsFilters
          timeFilter={timeFilter}
          employeeFilter={employeeFilter}
          requestTypeFilter={requestTypeFilter}
          setTimeFilter={setTimeFilter}
          setEmployeeFilter={setEmployeeFilter}
          setRequestTypeFilter={setRequestTypeFilter}
        />
        
        <TopEmployees employees={topEmployees} />
        
        <KeyMetrics />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="border rounded-lg overflow-hidden">
            <WorkloadIndicator />
          </div>
          <div className="border rounded-lg overflow-hidden">
            <OperatorComparisonChart />
          </div>
          <div className="border rounded-lg overflow-hidden">
            <CommunicationsSourceChart />
          </div>
        </div>

        <PerformanceCharts
          performanceData={performanceData}
          employeePerformance={employeePerformance}
        />
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
