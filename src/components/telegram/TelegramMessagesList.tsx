import { MessageSquare, Calendar, User, Check, Tag } from "lucide-react";

interface Message {
  id: number;
  date: string;
  sender: string;
  recipient: string;
  content: string;
  messageCount: number;
  status?: string;
  tags?: string[];
}

interface TelegramMessagesListProps {
  messages: Message[];
  onMessageClick: (message: Message) => void;
}

export const TelegramMessagesList = ({ messages, onMessageClick }: TelegramMessagesListProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className="col-span-4 p-4 border rounded-lg cursor-pointer hover:bg-[#1EAEDB]/10 bg-[#1EAEDB]/5"
          onClick={() => onMessageClick(message)}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-500" />
              <span className="font-medium">{message.sender}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">{message.messageCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Calendar className="h-4 w-4" />
            <span>{message.date}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <User className="h-4 w-4" />
            <span>{message.recipient}</span>
          </div>

          {message.tags && (
            <div className="flex flex-wrap gap-2 mt-2">
              {message.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs">
                  <Tag className="h-3 w-3" />
                  {tag}
                </div>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-700 mb-2">{message.content}</p>

          {message.status && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Check className="h-4 w-4" />
              <span>{message.status}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};