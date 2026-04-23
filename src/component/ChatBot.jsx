import React, { useState } from "react";

function ChatBot() {

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  // 🤖 Fake AI logic (demo)
  const getReply = (text) => {
    if (text.toLowerCase().includes("hello")) return "Hi 👋";
    if (text.toLowerCase().includes("price")) return "Check pricing section 💰";
    if (text.toLowerCase().includes("contact")) return "Go to contact page 📩";
    return "I am AI 🤖 (demo reply)";
  };

  const sendMsg = () => {
    if (!msg) return;

    const userMsg = { sender: "user", text: msg };
    const botMsg = { sender: "bot", text: getReply(msg) };

    setChat([...chat, userMsg, botMsg]);
    setMsg("");
  };

  return (
    <>
      {/* 🎨 CSS */}
      <style>{`

        .chat-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: teal;
          color: white;
          padding: 12px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
        }

        .chatbox {
          position: fixed;
          bottom: 70px;
          right: 20px;
          width: 300px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          overflow: hidden;
        }

        .chat-header {
          background: teal;
          color: white;
          padding: 10px;
          text-align: center;
        }

        .chat-body {
          height: 220px;
          overflow-y: auto;
          padding: 10px;
        }

        .chat-body p {
          margin: 5px 0;
        }

        .chat-input {
          display: flex;
          border-top: 1px solid #ccc;
        }

        .chat-input input {
          flex: 1;
          padding: 8px;
          border: none;
          outline: none;
        }

        .chat-input button {
          padding: 8px;
          background: teal;
          color: white;
          border: none;
          cursor: pointer;
        }

      `}</style>

      {/* 💬 Toggle Button */}
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chatbox */}
      {open && (
        <div className="chatbox">

          <div className="chat-header">AI Chatbot 🤖</div>

          <div className="chat-body">
            {chat.map((c, i) => (
              <p key={i}>
                <b>{c.sender}:</b> {c.text}
              </p>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type message..."
            />
            <button onClick={sendMsg}>Send</button>
          </div>

        </div>
      )}

    </>
  );
}

export default ChatBot;