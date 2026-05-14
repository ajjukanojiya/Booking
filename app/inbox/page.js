"use client";
import { useState } from "react";
import Link from "next/link";

export default function Inbox() {
  // State for toggling chats
  const [openChat, setOpenChat] = useState(null);

  // State for messages
  const [chats, setChats] = useState({
    1: [{ sender: "Mahika", text: "Hello 👋" }],
    2: [{ sender: "Qiaswi", text: "Hi 👋" }]
  });

  // State for inputs
  const [inputs, setInputs] = useState({ 1: "", 2: "" });

  const toggleChat = (id) => {
    setOpenChat(openChat === id ? null : id);
  };

  const handleInputChange = (id, value) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const sendMessage = (id) => {
    if (!inputs[id].trim()) return;
    setChats(prev => ({
      ...prev,
      [id]: [...prev[id], { sender: "You", text: inputs[id] }]
    }));
    setInputs(prev => ({ ...prev, [id]: "" }));
  };

  return (
    <>
      <div className="inner-container">
        <div className="login-bg">
          {/* Note: In your HTML, this title was here, possibly a copy-paste error from login, but keeping it to match the HTML structure */}
          <div className="title1">Inbox Messages</div>

          <div className="chat-section">
            {/* Item 1 */}
            <div className="ride-item" onClick={() => toggleChat(1)}>
              <div className="ride-info">
                <h4>Mahika</h4>
                <p>Faridabad → Noida</p>
                <span className="time">4 hours ago</span>
              </div>
              <div className="right-section">
                <div className="avatar"><i className="fas fa-user"></i></div>
                <span className="arrow">
                  <i className={`fas fa-chevron-${openChat === 1 ? 'up' : 'down'}`}></i>
                </span>
              </div>
            </div>

            {/* Chat 1 */}
            <div className="chat-box" style={{ display: openChat === 1 ? 'flex' : 'none' }}>
              <div className="chat-header">Mahika</div>
              <div className="chat-messages">
                {chats[1].map((msg, index) => (
                  <p key={index}><b>{msg.sender}:</b> {msg.text}</p>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={inputs[1]}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  placeholder="Type message..."
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(1)}
                />
                <button onClick={() => sendMessage(1)}>Send</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="ride-item" onClick={() => toggleChat(2)}>
              <div className="ride-info">
                <h4>Qiaswi</h4>
                <p>Faridabad → Noida</p>
                <span className="time">4 days ago</span>
              </div>
              <div className="right-section">
                <div className="avatar"><i className="fas fa-user"></i></div>
                <span className="arrow">
                  <i className={`fas fa-chevron-${openChat === 2 ? 'up' : 'down'}`}></i>
                </span>
              </div>
            </div>

            {/* Chat 2 */}
            <div className="chat-box" style={{ display: openChat === 2 ? 'flex' : 'none' }}>
              <div className="chat-header">Qiaswi</div>
              <div className="chat-messages">
                {chats[2].map((msg, index) => (
                  <p key={index}><b>{msg.sender}:</b> {msg.text}</p>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={inputs[2]}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  placeholder="Type message..."
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(2)}
                />
                <button onClick={() => sendMessage(2)}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
