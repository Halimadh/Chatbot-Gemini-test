import { useState } from "react";
import ChatbotMessage from "../chatbotMessage/ChatbotMessage";
import SendMessage from "../sender/SendMessage";
import type { PropsMessage } from "../../interfaces/message";

function Chatbox() {
  const chatMessages: PropsMessage[] = [
    // { id: "1", message: "Hi there !", sender: "user" },
    // {
    //   id: "2",
    //   message: "hi! How's going?",
    //   sender: "robot",
    // },
    // {
    //   id: "3",
    //   message: "great thank",
    //   sender: "user",
    // },
    // {
    //   id: "4",
    //   message: "You're welcome🤓",
    //   sender: "robot",
    // },
  ];
  const [messageArray, setMessageArray] = useState(chatMessages);

  return (
    <>
      <SendMessage
        messageArray={messageArray}
        setMessageArray={setMessageArray}
      />

      {messageArray.map((chatMessage) => {
        return (
          <ChatbotMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            id={chatMessage.id}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}
export default Chatbox;
