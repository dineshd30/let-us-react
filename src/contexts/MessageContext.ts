import { createContext, useContext } from "react";

export type Message = {
  name: string;
  greeting?: string;
}

export const MessageContext = createContext<Message | undefined>(undefined)

export function useMessageContext() {
  const message = useContext(MessageContext);

  if (!message) {
    throw new Error("useMessageContext needs Message context to be passed");
  }

  return message
}