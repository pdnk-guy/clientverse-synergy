import { Button } from "@/components/ui/button";
import { UserSquare2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Client {
  name: string;
  phone: string;
  email: string;
  lastVisit: string;
  carModel: string;
  serviceHistory: string[];
}

interface ClientInfoDrawerProps {
  client: Client;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ClientInfoDrawer = ({ client, isOpen, onOpenChange }: ClientInfoDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="w-full flex items-center gap-2 justify-start p-2 hover:bg-accent rounded-lg">
          <UserSquare2 className="h-8 w-8" />
          <h3 className="font-medium">{client.name}</h3>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Информация о клиенте</DrawerTitle>
            <DrawerDescription>Детальная информация</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div className="space-y-2 text-sm">
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
          <div className="p-4">
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Закрыть
              </Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};