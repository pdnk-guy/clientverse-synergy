import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClientInfoDrawer } from "./ClientInfoDrawer";

interface Client {
  name: string;
  phone: string;
  email: string;
  lastVisit: string;
  carModel: string;
  serviceHistory: string[];
}

interface ClientInfoCardProps {
  client: Client;
  isDrawerOpen: boolean;
  onDrawerOpenChange: (open: boolean) => void;
}

export const ClientInfoCard = ({ client, isDrawerOpen, onDrawerOpenChange }: ClientInfoCardProps) => {
  return (
    <Card className="col-span-3 p-4">
      <h2 className="text-lg font-semibold mb-4">Информация о клиенте</h2>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          <ClientInfoDrawer
            client={client}
            isOpen={isDrawerOpen}
            onOpenChange={onDrawerOpenChange}
          />
          <div className="space-y-2 text-sm mt-4">
            <p><span className="font-medium">Телефон:</span> {client.phone}</p>
            <p><span className="font-medium">Email:</span> {client.email}</p>
            <p><span className="font-medium">Последний визит:</span> {client.lastVisit}</p>
            <p><span className="font-medium">Автомобиль:</span> {client.carModel}</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">История обслуживания:</h4>
            <ul className="space-y-1 text-sm">
              {client.serviceHistory.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};