import React from 'react';
import { data } from '../restApi.json';

const WhoAreWe = () => {
    return (
        <section className='who-are-we' id="who_are_we">
            <div className="container">
                <div className="text-banner">
                    {data[0].who_we_are.slice(0, 2).map(element => (
                        <div className="card" key={element.id}>
                            <h1 className='heading'>{element.number}</h1>
                            <p>{element.title}</p>
                        </div>
                    ))}
                </div>
                <div className="image-banner">
                    <img src="/center.svg" alt="center" className='gradient-bg' />
                    <img src="/whoweare.png" alt="who" />
                </div>
                <div className="text-banner">
                    {data[0].who_we_are.slice(2).map(element => (
                        <div className="card" key={element.id}>
                            <h1 className='heading'>{element.number}</h1>
                            <p>{element.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoAreWe;
