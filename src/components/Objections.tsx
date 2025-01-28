import { Button } from "@/components/ui/button";
import { Shield, ThumbsDown, ThumbsUp } from "lucide-react";

const objectionResponses = [
  {
    objection: "Слишком дорого",
    response: "Мы предлагаем лучшее соотношение цены и качества на рынке",
    icon: <ThumbsDown className="mr-2 h-4 w-4" />
  },
  {
    objection: "Нужно подумать",
    response: "Понимаю ваши сомнения. Давайте рассмотрим все преимущества",
    icon: <Shield className="mr-2 h-4 w-4" />
  },
  {
    objection: "У конкурентов дешевле",
    response: "Наше качество и гарантии оправдывают стоимость",
    icon: <ThumbsUp className="mr-2 h-4 w-4" />
  }
];

const Objections = () => {
  return (
    <div className="p-4 border-l mt-4">
      <h3 className="font-semibold mb-4">Работа с возражениями</h3>
      <div className="space-y-3">
        {objectionResponses.map((item, index) => (
          <Button
            key={index}
            className="w-full justify-start"
            variant="outline"
          >
            {item.icon}
            {item.objection}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Objections;