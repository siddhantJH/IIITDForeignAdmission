import React, { useEffect, useState } from "react";
import '../styles/incomingsemexc.css'


function IncomingSemExc()
{

    const [Institutes, setInstitutes] = useState([]);

    useEffect(()=> {

        setInstitutes(
            [
                {name: 'Institute A Exchange Program', description: 'Sample Description'},
                {name: 'Institute B Exchange Program', description: 'Sample Description'},
                {name: 'Institute C Exchange Program', description: 'Sample Description'},
            ]

        )
    },[])

    return (
        <div className="container">
        <div className="section">
          <h1 className="title">Incoming Semester Programs</h1>
          <p className="intro">
          Our program offers an enriching experience for international students,
           allowing you to immerse yourself in our vibrant academic community
           and cultural heritage. As an exchange student,
           you will have the opportunity to take part in innovative courses,
           engage with cutting-edge research, and form lasting connections with peers and faculty.
            You can find below, the programs we offer under this category</p>
        </div>
        <div className="section">
          <h1 className="title">Our Partners</h1>
          {Institutes.length ? (
            <>
              {Institutes.map((items, index) => (
                <div key={index} className="partner-card">
                  <h2 className="partner-name">{items.name}</h2>
                  <p className="partner-description">{items.description}</p>
                  <button onClick={()=> {}} className="btn">Learn about this program</button>
                </div>
              ))}
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>)
}

export default IncomingSemExc