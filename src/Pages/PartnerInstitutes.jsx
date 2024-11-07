import React, { useEffect, useState } from "react";

function Partners() {
    const [Centers, setCenters] = useState([]);
    const [Institutes, setInstitutes] = useState([]);

    useEffect(() => {
        setCenters([
            { name: 'Center A', description: 'Sample Description for Center A' },
            { name: 'Center B', description: 'Sample Description for Center B' },
            { name: 'Center C', description: 'Sample Description for Center C' },
        ]);

        setInstitutes([
            { name: 'Institute A', description: 'Sample Description for Institute A' },
            { name: 'Institute B', description: 'Sample Description for Institute B' },
            { name: 'Institute C', description: 'Sample Description for Institute C' },
            { name: 'Institute D', description: 'Sample Description for Institute D' },
            { name: 'Institute E', description: 'Sample Description for Institute E' },
        ]);
    }, []);

    return (
        <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gray-50"> {/* Increased top padding from pt-16 to pt-20 */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#022742]">Our Partners</h1>
                <p className="mt-4 text-lg text-gray-600">
                    <ul className="list-disc list-inside">
                        <li>Innovation.</li>
                        <li>Knowledge.</li>
                        <li>Opportunities.</li>
                    </ul>
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-[#022742] mb-4">Our Partner Centers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Centers.length ? (
                        Centers.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-[#022742]">{item.name}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Loading...</p>
                    )}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-semibold text-[#022742] mb-4">Our Partner Institutions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Institutes.length ? (
                        Institutes.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-bold text-[#022742]">{item.name}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Partners;
