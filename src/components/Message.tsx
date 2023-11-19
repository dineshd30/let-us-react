import { useMessageContext } from "../contexts/MessageContext";

export default function Message() {
  const message = useMessageContext();

  return (
    <h1>
      Hello {message.name}, {message.greeting || "How are you?"}
    </h1>
  );
}
