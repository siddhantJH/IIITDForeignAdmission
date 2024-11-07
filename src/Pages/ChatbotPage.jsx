import React from "react";
import Chatbot from "../components/ChatBot"; // Ensure correct path
import { FaRobot } from "react-icons/fa";

const ChatbotPage = () => {
    return (
        <div className="min-h-screen bg-[#F4F7FA] flex flex-col items-center py-12">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">
                {/* Chatbot Header */}
                <div className="flex flex-col items-center mb-8">
                    <FaRobot className="text-6xl text-[#219C90] mb-4 animate-pulse" />
                    <h1 className="text-4xl font-semibold text-[#022742] mb-2">Talk to Our Assistant</h1>
                    <p className="text-lg text-[#4B5563] mt-2 text-center">
                        Ask anything about our college, campus life, admission process, and much more.
                    </p>
                </div>

                {/* Chatbot Component */}
                <div className="w-full h-[600px] bg-[#F9FAFB] p-8 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                    <div className="flex-1 p-4 rounded-lg bg-white border border-[#E5E7EB] overflow-y-auto shadow-sm">
                        <Chatbot />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-[#4B5563] text-sm">
                            Having trouble? Reach out to our support team or check out the <a href="https://www.iiitd.ac.in/" className="text-[#219C90] hover:underline">official website</a>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-8 text-center text-[#A1A7B3]">
                <p>For further assistance, don't hesitate to explore our <a href="https://www.iiitd.ac.in/" className="text-[#219C90] hover:underline">official website</a>.</p>
            </div>
        </div>
    );
};

export default ChatbotPage;
