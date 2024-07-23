// src/components/Chat.jsx
import React, { useState } from "react";
import io from 'socket.io-client';
import MessageBox from "./messgebox";

const socket = io.connect("http://localhost:9000");

function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-100">
      {!showChat ? (
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center">Join A Chat</h3>
          <div>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => setUsername(event.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => setRoom(event.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={joinRoom}
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Join A Room
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl h-[90%] left-5  p-4 absolute rounded-lg shadow-xl">
          <MessageBox socket={socket} username={username} room={room} />
        </div>
      )}
    </div>
  );
}

export default Chat;
