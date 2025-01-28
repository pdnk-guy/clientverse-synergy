import { CheckCircle, Share2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <div className="p-4 border-l">
      <h3 className="font-semibold mb-4">Быстрые действия</h3>
      <div className="space-y-3">
        <Button className="w-full justify-start" variant="outline">
          <CheckCircle className="mr-2 h-4 w-4" />
          Принять запрос
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Передать в группу
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <XCircle className="mr-2 h-4 w-4" />
          Завершить
        </Button>
      </div>
    </div>
  );
};

export default QuickActions;