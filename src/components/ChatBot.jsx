import React, { useState, useEffect, useRef } from 'react';
import callFlaskAPI from '../Service/chatbotService.js';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatWindowRef = useRef(null);

    // Set the initial greeting message when the component mounts
    useEffect(() => {
        const initialGreeting = {
            sender: 'bot',
            text: 'Hello, my name is Indu. How can I help you?',
            isMarkdown: false,
        };
        setMessages([initialGreeting]);
    }, []);

    const handleSendMessage = async () => {
        if (input.trim()) {
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'user', text: input }
            ]);

            setInput('');

            try {
                const response = await callFlaskAPI(input);

                // Add the bot's response to the chat
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: response, isMarkdown: true }
                ]);
            } catch (error) {
                console.error('Error:', error);
                setMessages(prevMessages => [
                    ...prevMessages,
                    { sender: 'bot', text: 'Not getting the correct result!', isMarkdown: false }
                ]);
            }
        }
    };

    // Auto-scroll to the bottom when a new message is added
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="flex flex-col w-full max-w-lg mx-auto border border-gray-300 rounded-lg shadow-lg bg-white">
            <div
                ref={chatWindowRef}
                className="flex-grow p-4 overflow-y-auto space-y-4"
                style={{ maxHeight: '700px' }} // Set a max height for the chat window
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-[75%] ${
                                message.sender === 'user'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-900'
                            }`}
                        >
                            {message.isMarkdown ? (
                                <ReactMarkdown>{message.text}</ReactMarkdown>
                            ) : (
                                <span>{message.text}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center border-t border-gray-300 p-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
