import { useState } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(1);

  const chats = [
    { id: 1, name: 'Alex Chen', lastMessage: 'See you at 2 PM!', time: '10:30 AM', unread: 0, online: true },
    { id: 2, name: 'Marcus Chen', lastMessage: 'Your laundry is ready', time: 'Yesterday', unread: 2, online: false },
    { id: 3, name: 'David Okoro', lastMessage: 'Available this weekend?', time: '2 days ago', unread: 1, online: true }
  ];

  const messages = [
    { id: 1, sender: 'other', text: 'Hi! Thanks for booking my tutoring session.', time: '10:15 AM' },
    { id: 2, sender: 'me', text: 'Thanks! Looking forward to it. Can we meet at the library?', time: '10:20 AM' },
    { id: 3, sender: 'other', text: 'Sure! Second floor, quiet zone. See you at 2 PM!', time: '10:30 AM' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark h-screen flex flex-col">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <h2 className="text-xl font-bold">Serve-Eaze</h2>
          </Link>
          <Link to="/services" className="text-sm font-medium text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden max-w-[1440px] mx-auto w-full">
        {/* Chat List */}
        <aside className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold mb-3">Messages</h2>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`w-full p-4 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                  selectedChat === chat.id ? 'bg-primary/5' : ''
                }`}
              >
                <div className="relative">
                  <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {chat.name.charAt(0)}
                  </div>
                  {chat.online && <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold">{chat.name}</p>
                    <span className="text-xs text-slate-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="size-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {chat.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-white dark:bg-slate-900">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                A
              </div>
              <div>
                <p className="font-bold">Alex Chen</p>
                <p className="text-xs text-green-600">Online</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">call</span>
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">videocam</span>
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 dark:bg-slate-950">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-white dark:bg-slate-900'} rounded-xl px-4 py-3`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-slate-500'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex gap-3">
              <button className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
