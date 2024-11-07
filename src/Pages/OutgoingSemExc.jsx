import React, { useState } from "react";

function OutgoingSemExc() {
    const [hover, setHover] = useState(false);

    const institutes = [
        {
            name: "NTU",
            image: "https://via.placeholder.com/150",
            details: {
                duration: "3 months",
                eligibility: "Open to all",
                credits: "15 credits",
                fee: "$5,000",
            },
        },
        {
            name: "SDU",
            image: "https://via.placeholder.com/150",
            details: {
                duration: "3 months",
                eligibility: "Open to all",
                credits: "15 credits",
                fee: "$5,000",
            },
        },
        {
            name: "SIT",
            image: "https://via.placeholder.com/150",
            details: {
                duration: "3 months",
                eligibility: "Open to all",
                credits: "15 credits",
                fee: "$5,000",
            },
        },
    ];

    return (
        <div style={styles.container}>
            <div style={styles.textWithBackground}>
                <h1 style={styles.header}>Study Abroad This Summer!</h1>
                <p style={styles.description}>
                    Are you ready for an adventure of a lifetime? Join our study abroad program and explore new cultures, meet amazing people, and gain invaluable experience.
                </p>
            </div>
            {institutes.map((institute, index) => (
                <div key={index} style={styles.instituteSection}>
                    <h2 style={styles.subHeader}>{institute.name}</h2>
                    <div style={styles.instituteContainer}>
                        <img src={institute.image} alt={institute.name} style={styles.partnerImage} />
                        <div style={styles.details}>
                            <ul style={styles.detailsList}>
                                <li style={styles.listItem}><strong>Duration:</strong> {institute.details.duration}</li>
                                <li style={styles.listItem}><strong>Eligibility:</strong> {institute.details.eligibility}</li>
                                <li style={styles.listItem}><strong>Credits Earned:</strong> {institute.details.credits}</li>
                                <li style={styles.listItem}><strong>Tuition Fee:</strong> {institute.details.fee}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            <button
                style={{ ...styles.button, ...(hover && styles.buttonHover) }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => alert("Discover various programs!")}
            >
                Discover Programs
            </button>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWithBackground: {
        position: 'relative',
        padding: '40px',
        color: '#fff',
        backgroundImage: 'url("https://pbs.twimg.com/media/FM_3xQAVEAIy1A0.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center -100px',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        marginBottom: '20px',
        width: '80%',
        maxWidth: '800px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeIn 2s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginTop: '100px',
        fontSize: '2.5rem',
        padding: '0.5em 1em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px'
    },
    description: {
        fontSize: '1.25rem',
        marginTop: '10px',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px'
    },
    instituteSection: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
        width: '80%',
        maxWidth: '800px',
        textAlign: 'left',
    },
    instituteContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    partnerImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '20px',
    },
    subHeader: {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#2980b9',
        textAlign: 'center',
    },
    detailsList: {
        listStyleType: 'none',
        padding: 0,
        color: '#2c3e50',
    },
    listItem: {
        fontSize: '1rem',
        marginBottom: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#2980b9',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#1f639a',
    },
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
    },
};

export default OutgoingSemExc;