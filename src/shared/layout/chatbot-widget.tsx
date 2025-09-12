"use client";

import { useState } from "react";
import { MessageCircle, X, User, Mail, Phone } from "lucide-react";
import { ChatBot as ChatBotType } from "@/types";
import { Button } from "@/components/ui/button";
import MiniIcon from "./mini-icon";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ChatbotWidget = ({ blok }: { blok: ChatBotType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const supportRep = {
    name: blok?.name,
    title: blok?.role,
    email: blok?.email?.[0]?.label,
    emailValue: blok?.email?.[0]?.value,
    phone: blok?.phone?.[0]?.label,
    phoneValue: blok?.phone?.[0]?.value,
    image: blok?.image?.filename,
    headerTitle: blok?.title,
    headerSubtitle: blok?.sub_title,
    feedback: blok?.feedback,
    maximizeChat: blok?.maximize_chat_box,
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const maximizeChat = () => {
    setIsMinimized(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div
          className={cn(
            "mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300",
            {
              "w-80 h-14": isMinimized,
              "w-80 sm:w-96 h-auto": !isMinimized,
            },
          )}
        >
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-semibold text-sm">
                  {supportRep.headerTitle}
                </h3>
                <p className="text-xs text-blue-100">
                  {supportRep.headerSubtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {!isMinimized && (
                <Button
                  onClick={minimizeChat}
                  variant="ghost"
                  aria-label="Minimize support window"
                >
                  <MiniIcon />
                </Button>
              )}
              <Button
                onClick={toggleChat}
                variant="ghost"
                aria-label="Close support window"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {isMinimized && (
            <div
              className="p-3 cursor-pointer hover:bg-gray-50 flex items-center"
              onClick={maximizeChat}
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600 truncate">
                {supportRep.maximizeChat}
              </p>
            </div>
          )}

          {!isMinimized && (
            <div className="p-6 bg-white rounded-b-lg">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-blue-100">
                  <Image
                    src={supportRep?.image ?? ""}
                    alt={supportRep.name ?? ""}
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {supportRep.name}
                </h2>
                <p className="text-sm text-gray-600">{supportRep.title}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{supportRep.email}</p>
                    <a
                      href={`mailto:${supportRep.emailValue}`}
                      className="text-blue-600 hover:underline"
                    >
                      {supportRep.emailValue}
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{supportRep.phone}</p>
                    <a
                      href={`tel:${supportRep.phoneValue?.replace(/\D/g, "")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {supportRep.phoneValue}
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-6">
                {supportRep.feedback}
              </p>
            </div>
          )}
        </div>
      )}

      <Button
        onClick={toggleChat}
        variant="default"
        className={`w-14 h-14 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? "rotate-0" : "hover:scale-110"
        }`}
        aria-label={isOpen ? "Close support" : "Open support"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
        )}
      </Button>
    </div>
  );
};

export default ChatbotWidget;
