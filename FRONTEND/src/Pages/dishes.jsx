import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
    return (
        <section className='menu' id="menu">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eius corporis dolore consequatur, blanditiis quae quidem vero, optio suscipit adipisci laudantium sapiente et quasi. Nihil, dolor. Voluptate nam sapiente recusandae.</p>
            </div>
            <div className="dishes_container">
                {data[0].dishes.map(element => (
                    <div className="card" key={element.id}>
                        <img src={element.image} alt={element.title} className="dish-image" />
                        <h3>{element.title}</h3>
                        <button className="category-button">{element.category}</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;