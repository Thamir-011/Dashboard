"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import ActiveChat from "./ActiveChat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CurrentChatActions from "./CurrentChatActions";
import { FaceIcon, PaperPlaneIcon, UploadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import moment from "moment";
import clsx from "clsx";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Ahmed Aljabri",
      content: "Hi, How are you?",
      sentAt: new Date(),
    },
    {
      sender: "me",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sentAt: new Date(),
    },
    {
      sender: "Ahmed Aljabri",
      content: "Lorem ipsum dolor sit amet, consectetur.",
      sentAt: new Date(),
    },
    {
      sender: "Ahmed Aljabri",
      content: "Lorem ipsum dolor.",
      sentAt: new Date(),
    },
  ]);

  return (
    <div className="flex-1 flex h-full childs-light-border">
      <div className="flex flex-1 flex-col childs-light-border ">
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>TA</AvatarFallback>
            </Avatar>
            <p className="font-semibold">Ahmed Aljabri</p>
          </div>
          <div>
            <CurrentChatActions />
          </div>
        </div>
        <div className="flex-1 p-2 overflow-y-auto max-w-full">
          {messages.map((message, i) => (
            <div
              key={i}
              className={clsx("flex flex-col p-2 my-2 gap-1 ", {
                "self-end": message.sender === "me",
                "self-start": message.sender != "me",
              })}
            >
              <div
                className={clsx(
                  "flex flex-col p-3 my-2 text-wrap break-words w-fit max-w-[15rem] md:max-w-[30rem] lg:max-w-[35rem]",
                  {
                    "rounded-[20px] rounded-br-none self-end bg-blue-400":
                      message.sender === "me",
                    "rounded-[20px] rounded-tl-none bg-surface-primary":
                      message.sender != "me",
                  }
                )}
              >
                {message.content}
              </div>
              <p
                className={clsx("px-2", {
                  "self-end": message.sender === "me",
                })}
              >
                {moment(message.sentAt).format("LT")}
              </p>
            </div>
          ))}
        </div>
        <div className="flex p-2 gap-2 items-center">
          <div className="flex flex-1 bg-surface-primary rounded-sm p-2">
            <Input
              placeholder="Type your message here..."
              className="flex-1 border-none focus-visible:ring-0"
            />
            <div className="flex gap-3 items-center child:cursor-pointer child-hover:brightness-50">
              <UploadIcon width={20} height={20} />
              <FaceIcon width={20} height={20} />
            </div>
          </div>
          <Button className="h-full">
            <PaperPlaneIcon width={22} height={22} />
          </Button>
        </div>
      </div>
      <div className="flex-[0.3] hidden lg:block">
        <ActiveChat />
      </div>
    </div>
  );
};

export default Chat;
