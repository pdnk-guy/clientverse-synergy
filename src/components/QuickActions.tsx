import { CheckCircle, Share2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <>
      <Button className="w-full justify-start text-sm" variant="outline">
        <CheckCircle className="mr-2 h-4 w-4" />
        Принять запрос
      </Button>
      <Button className="w-full justify-start text-sm whitespace-normal h-auto py-2" variant="outline">
        <Share2 className="mr-2 h-4 w-4 shrink-0" />
        Передать в группу
      </Button>
      <Button className="w-full justify-start text-sm" variant="outline">
        <XCircle className="mr-2 h-4 w-4" />
        Завершить
      </Button>
    </>
  );
};

export default QuickActions;