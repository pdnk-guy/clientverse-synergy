import { Filter, FileText, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TelegramFilterPanelProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const TelegramFilterPanel = ({ searchQuery, onSearchChange }: TelegramFilterPanelProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Дата отправки сообщения: последние 7 дней
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Input
          placeholder="Введите поисковый запрос или добавьте фильтры"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-96"
        />
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <FileText className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};