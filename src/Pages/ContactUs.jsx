import React, { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., send an email or display a success message)
        console.log("Form submitted:", formData);
    };

    return (
        <div className="bg-[#F0F4F8] min-h-screen flex flex-col justify-center items-center py-10">
            {/* Contact Form Container */}
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-4xl w-full">
                <h1 className="text-center text-3xl font-semibold text-[#1A2130] mb-8">Contact Us</h1>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Name */}
                        <div className="w-full sm:w-1/2">
                            <label className="block text-lg font-medium text-[#3A4C59]">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 p-3 border border-[#D1D9E6] rounded-md w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#219C90] focus:border-transparent"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="w-full sm:w-1/2">
                            <label className="block text-lg font-medium text-[#3A4C59]">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 p-3 border border-[#D1D9E6] rounded-md w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#219C90] focus:border-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-lg font-medium text-[#3A4C59]">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-2 p-3 border border-[#D1D9E6] rounded-md w-full text-lg focus:outline-none focus:ring-2 focus:ring-[#219C90] focus:border-transparent"
                            placeholder="Enter the subject of your inquiry"
                            required
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-lg font-medium text-[#3A4C59]">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-2 p-3 border border-[#D1D9E6] rounded-md w-full text-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#219C90] focus:border-transparent"
                            placeholder="Enter your message here"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-6 py-3 px-8 bg-[#219C90] text-white text-lg font-semibold rounded-md shadow-lg hover:bg-[#1a8067] transition-colors"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
