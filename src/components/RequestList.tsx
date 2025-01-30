import { MessageSquare, Phone, Send, Globe } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const requests = [
  {
    id: 1,
    source: "telegram",
    status: "new",
    description: "Нужна помощь с доступом к аккаунту",
  },
  {
    id: 2,
    source: "whatsapp",
    status: "in-progress",
    description: "Вопрос о продлении подписки",
  },
  {
    id: 3,
    source: "phone",
    status: "new",
    description: "Требуется техническая поддержка",
  },
];

const getSourceIcon = (source: string) => {
  switch (source) {
    case "telegram":
      return <Send className="h-4 w-4" />;
    case "whatsapp":
      return <MessageSquare className="h-4 w-4" />;
    case "phone":
      return <Phone className="h-4 w-4" />;
    default:
      return <Globe className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
  switch (status) {
    case "new":
      return <span className={`${baseClasses} bg-green-100 text-green-800`}>Новый</span>;
    case "in-progress":
      return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>В обработке</span>;
    default:
      return <span className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</span>;
  }
};

const RequestList = () => {
  return (
    <div className="p-4 w-[105%]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Источник</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Описание</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getSourceIcon(request.source)}
                  <span className="capitalize">{request.source}</span>
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(request.status)}</TableCell>
              <TableCell>{request.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RequestList;