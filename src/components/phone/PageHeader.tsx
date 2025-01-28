import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PageHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Назад
      </Button>
    </div>
  );
};