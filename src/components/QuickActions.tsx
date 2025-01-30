import { CheckCircle, Share2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickActions = () => {
  return (
    <>
      <Button className="w-full justify-start" variant="outline">
        <CheckCircle className="mr-2 h-4 w-4" />
        Принять запрос
      </Button>
      <Button className="w-full justify-start" variant="outline">
        <Share2 className="mr-2 h-4 w-4" />
        Переключить
      </Button>
      <Button className="w-full justify-start" variant="outline">
        <XCircle className="mr-2 h-4 w-4" />
        Завершить
      </Button>
    </>
  );
};

export default QuickActions;