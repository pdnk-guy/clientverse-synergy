import { MessageSquare } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOperator?: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.isOperator ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex gap-2 max-w-[70%] ${
              message.isOperator
                ? "bg-blue-100 dark:bg-blue-900"
                : "bg-gray-100 dark:bg-gray-800"
            } rounded-lg p-3`}
          >
            {!message.isOperator && (
              <MessageSquare className="h-5 w-5 text-gray-500" />
            )}
            <div>
              <p className="text-sm font-medium">{message.sender}</p>
              <p className="text-sm">{message.content}</p>
              <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};