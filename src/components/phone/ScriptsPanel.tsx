import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Script {
  title: string;
  text: string;
}

interface ScriptsPanelProps {
  scripts: Script[];
}

export const ScriptsPanel = ({ scripts }: ScriptsPanelProps) => {
  return (
    <Card className="col-span-6 p-4">
      <h2 className="text-lg font-semibold mb-4">Скрипты диалога</h2>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {scripts.map((script, index) => (
            <div key={index} className="p-4 rounded-lg border">
              <h3 className="font-medium mb-2">{script.title}</h3>
              <p className="text-sm text-muted-foreground">{script.text}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};