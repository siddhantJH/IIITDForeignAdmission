const SummerExchangeProgram = () => {
    return (
        <div className="bg-[#022742] text-white p-8 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6 transition duration-300 transform hover:scale-105">Summer Exchange Programme</h1>
            <p className="text-lg text-center mb-4">Our Summer Exchange Programme provides students with the opportunity to study abroad and immerse themselves in a new culture.</p>
            <h2 className="text-2xl font-semibold mt-4 underline">Key Features:</h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
                <li className="transition duration-300 transform hover:translate-x-2">Cultural immersion</li>
                <li className="transition duration-300 transform hover:translate-x-2">Academic credits</li>
                <li className="transition duration-300 transform hover:translate-x-2">Language learning opportunities</li>
            </ul>
        </div>
    );
};

export default SummerExchangeProgram