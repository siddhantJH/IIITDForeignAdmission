import React from "react";

function FacultyDevelopment() {
    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-[#022742]">Faculty Development</h1>
            </div>

            {/* Objectives Section */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-[#022742] mb-4">Objectives of the Program</h1>
                <ul className="list-disc list-inside space-y-2">
                    {[
                        "To equip faculty members with innovative teaching methodologies and effective pedagogical techniques that improve student engagement and learning outcomes.",
                        "To encourage and support faculty in conducting high-quality research, publishing in reputed journals, and securing research grants.",
                        "To provide opportunities for continuous professional development through workshops, seminars, and collaborative projects, thereby advancing faculty careers.",
                        "To assist faculty in designing and updating curricula that meet the evolving needs of the industry and academia, ensuring that programs remain relevant and rigorous.",
                        "To develop leadership skills among faculty members, enabling them to mentor students and junior colleagues effectively and to take on leadership roles within the institution.",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span className="mr-2 text-xl">🎯</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Benefits Section */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-[#022742] mb-4">Benefits</h1>
                <ul className="list-disc list-inside space-y-2">
                    {[
                        "Gain access to a variety of professional development opportunities, including workshops, seminars, and conferences that enhance your teaching, research, and leadership skills.",
                        "Connect with peers, experts, and industry professionals, fostering relationships that can lead to collaborative projects and research opportunities.",
                        "Receive guidance and resources to boost your research activities, from securing funding to publishing your work in high-impact journals.",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span className="mr-2 text-xl">📈</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Resources Section */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-[#022742] mb-4">Resources</h1>
                <div className="space-y-4">
                    {[
                        { title: "Teaching Resources", description: "Discover resources for teaching" },
                        { title: "Mentoring Resources", description: "Discover resources for mentoring and institution's initiatives" },
                        { title: "Publication Guide", description: "Discover resources regarding guidance in publication of papers" },
                    ].map((resource, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow cursor-pointer transition-transform transform hover:scale-105">
                            <h2 className="font-semibold text-[#022742]">{resource.title}</h2>
                            <p>{resource.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Partner Colleges Section */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-[#022742] mb-4">Partner Colleges</h1>
                <ul className="list-disc list-inside space-y-2">
                    {[
                        "College of Engineering and Technology",
                        "Institute of Management Studies",
                        "National College of Arts and Sciences",
                        "School of Business and Economics",
                        "University of Science and Technology",
                    ].map((college, index) => (
                        <li key={index} className="flex items-center">
                            <span className="mr-2 text-xl">🏫</span>
                            {college}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FacultyDevelopment;
