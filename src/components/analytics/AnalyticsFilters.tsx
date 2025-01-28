import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AnalyticsFiltersProps {
  timeFilter: string;
  employeeFilter: string;
  requestTypeFilter: string;
  setTimeFilter: (value: string) => void;
  setEmployeeFilter: (value: string) => void;
  setRequestTypeFilter: (value: string) => void;
}

export const AnalyticsFilters = ({
  timeFilter,
  employeeFilter,
  requestTypeFilter,
  setTimeFilter,
  setEmployeeFilter,
  setRequestTypeFilter
}: AnalyticsFiltersProps) => {
  return (
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
  );
};