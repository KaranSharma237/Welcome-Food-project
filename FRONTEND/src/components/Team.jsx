import React from 'react';
import { data } from '../restApi.json';

const Team = () => {
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="heading-section">
                  <center> <h1 className="heading">OUR TEAM</h1></center> 
                    <p>
                    Our chef is a culinary maestro, blending creativity with passion to craft unforgettable dishes. With years of experience and a commitment to using fresh, local ingredients, they bring a unique flair to every plate. Their innovative approach not only showcases seasonal flavors but also pays homage to traditional techniques, making each dining experience a delightful journey. Known for their warmth and dedication, our chef truly believes that food is meant to be shared and celebrated.
                    </p>
                </div>
                <div className="team_container">
                    {data[0].team.map(element => (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
