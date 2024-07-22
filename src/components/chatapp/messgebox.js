// src/components/MessageBox.jsx
import React, { useEffect, useState } from 'react';

const MessageBox = ({ socket, username, room }) => {
  const [currMessage, setCurrMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (currMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currMessage,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData);
      setMessages([...messages, messageData]);
      setCurrMessage(''); // Clear the message input after sending
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [socket]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 p-2 rounded-md ${msg.author === username ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}
          >
            <div className="text-sm font-semibold">{msg.author}</div>
            <div>{msg.message}</div>
            <div className="text-xs text-gray-600">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-3 border-t border-gray-200 bg-gray-100">
        <input
          type="text"
          value={currMessage}
          placeholder="Type a message..."
          onChange={(event) => setCurrMessage(event.target.value)}
          className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        <button
          onClick={sendMessage}
          className="ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.94 2.94a1.5 1.5 0 011.62-.45l13.79 5.52a1.5 1.5 0 010 2.88l-13.8 5.52A1.5 1.5 0 012 15.56V4.44a1.5 1.5 0 01.94-1.5zm12.2 6.56L4.5 5.1v9.8l10.64-4.4a.5.5 0 000-.92z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
