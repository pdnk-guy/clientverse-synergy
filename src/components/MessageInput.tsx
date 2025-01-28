import { useState } from "react";
import { Paperclip, Mic, Image, Send, Smile } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="border-t p-4 space-y-4">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
        className="min-h-[100px]"
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mic className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Image className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Smile className="h-5 w-5" />
          </Button>
        </div>
        <Button onClick={handleSend} disabled={!message.trim()}>
          <Send className="h-5 w-5 mr-2" />
          Отправить
        </Button>
      </div>
    </div>
  );
};