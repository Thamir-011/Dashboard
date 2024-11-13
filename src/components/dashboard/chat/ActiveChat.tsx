import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ActiveChat = () => {
  const [activeChats, setactiveChats] = useState([
    {
      name: "Ahmed Aljabri",
      lastMessage: "Hi, How are you today?",
    },
    {
      name: "Ahmed Aljabri",
      lastMessage: "Hi, How are you today?",
    },
    {
      name: "Ahmed Aljabri",
      lastMessage: "Hi, How are you today?",
    },
    {
      name: "Ahmed Aljabri",
      lastMessage: "Hi, How are you today?",
    },
    {
      name: "Ahmed Aljabri",
      lastMessage: "Hi, How are you today?",
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="p-2">
          <Input
            placeholder="Search..."
            className="p-2 bg-surface-primary focus-visible:ring-0 transition-none"
          />
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto p-2">
          {activeChats.map((activeChat) => (
            <div className="flex gap-2 p-3 rounded-sm cursor-pointer hover:backdrop-brightness-50">
              <Avatar className="select-none">
                <AvatarImage src="" />
                <AvatarFallback>TA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{activeChat.name}</p>
                <p className="opacity-80 dark:opacity-50 text-[0.75rem]">
                  {activeChat.lastMessage.length > 30
                    ? `${activeChat.lastMessage.slice(0, 30)}...`
                    : activeChat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveChat;
