import React from 'react';
import { data } from '../restApi.json'; // Make sure this path is correct


const CombinedMenu = () => {
  const menuItems = {
    Chinese: [
      { name: 'Kung Pao Chicken', description: 'Spicy stir-fried chicken with peanuts and vegetables.' },
      { name: 'Sweet and Sour mutton', description: 'mutton in a tangy sauce with pineapple and bell peppers.' },
      { name: 'Vegetable Fried Rice', description: 'Stir-fried rice with mixed vegetables and soy sauce.' },
    ],
    Italian: [
      { name: 'Spaghetti Carbonara', description: 'Pasta with creamy sauce, eggs, cheese, and pancetta.' },
      { name: 'Margherita Pizza', description: 'Classic pizza topped with tomatoes, mozzarella, and basil.' },
      { name: 'Lasagna', description: 'Layers of pasta with meat, cheese, and tomato sauce. price-250rs.' },
    ],
    Indian: [
      { name: 'Shahi Paneer', description: 'Shahi Paneer in a creamy Gravy.' },
      { name: 'Paneer Tikka', description: 'Grilled paneer marinated in spices and yogurt.' },
      { name: 'Biryani', description: 'Fragrant rice dish cooked with spices and marinated meat.' },
    ],
  };

  return (
    <div className="combined-menu">
      <h1>Our Menu</h1>
      {Object.keys(menuItems).map((cuisine) => (
        <div key={cuisine} className="cuisine-section">
          <h2>{cuisine}</h2>
          <ul>
            {menuItems[cuisine].map((dish) => (
              <li key={dish.name} className="dish-item">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <section className='popular-dishes'>
        <h1 className="heading">POPULAR DISHES</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eius corporis dolore consequatur, blanditiis quae quidem vero, optio suscipit adipisci laudantium sapiente et quasi. Nihil, dolor. Voluptate nam sapiente recusandae.</p>
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
    </div>
  );
};

export default CombinedMenu;
