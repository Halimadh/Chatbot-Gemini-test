import type { PropsMessage } from "../../interfaces/message";
import "./ChatbotMessage.css";

function ChatbotMessage({ message, sender }: PropsMessage) {
  return (
    <div
      className={
        sender === "robot" ? "chat-message-robot " : "chat-message-user"
      }
    >
      {sender === "robot" && (
        <div>
          {" "}
          <img src="src/assets/discordgreen.png" width={30} alt="" />
        </div>
      )}
      <div className="message">{message}</div>

      {sender === "user" && (
        <img src="src/assets/iprofil-user.jpg" width={30} alt="" />
      )}
    </div>
  );
}
export default ChatbotMessage;
