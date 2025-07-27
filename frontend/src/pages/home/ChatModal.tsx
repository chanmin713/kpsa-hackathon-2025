import { useState, useRef, useEffect } from "react";

interface ChatModalProps {
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: "me" | "other";
}

export default function ChatModal({ onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "안녕하세요! 무엇을 도와드릴까요?", sender: "other" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "me",
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "답장 감사합니다! 확인해드릴게요.",
          sender: "other",
        },
      ]);
    }, 1000);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg flex flex-col"
        style={{ width: 400, maxHeight: 600 }}
      >
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">채팅</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </header>

        {/* 말풍선 영역 */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-3"
          style={{ minHeight: 0 }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[70%] whitespace-pre-wrap ${
                  msg.sender === "me"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* 입력창 영역 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="p-4 border-t flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="메시지를 입력하세요..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ minWidth: 0 }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            전송
          </button>
        </form>
      </div>
    </div>
  );
}
