import { useState, type ChangeEvent } from "react";
import type { PropsMessage } from "../../interfaces/message";
import { getResponse } from "../../utils/gemini";
import "./SendMessage.css";

interface Props {
  messageArray: PropsMessage[];
  // setMessage: React.Dispatch<React.SetStateAction<PropsMessage[]>>;
  setMessageArray: (newValue: PropsMessage[]) => void;
}

function SendMessage({ messageArray, setMessageArray }: Props) {
  const [inputText, setInputText] = useState<string>("");

  function saveInputText(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }
  async function send() {
    const newMessage = [
      ...messageArray,
      {
        id: crypto.randomUUID(),
        message: inputText,
        sender: "user",
      },
    ];
    setMessageArray(newMessage);
    // TODO: Import or define Chatbot before using it
    // Example: import Chatbot from '../../utils/Chatbot';
    // const response = Chatbot.getResponse(inputText)
    const response = await getResponse(inputText);
    setMessageArray([
      ...newMessage,
      {
        id: crypto.randomUUID(),
        message: response,
        sender: "robot",
      },
    ]);
    setInputText("");
  }

  return (
    <>
      <div className="contain-send">
        <input
          type="text"
          placeholder="Send a message to chatbox"
          value={inputText}
          size={30}
          onChange={saveInputText}
          className="input-message"
        />
        <button className="button-send" onClick={send}>
          Send
        </button>
      </div>
    </>
  );
}
export default SendMessage;
