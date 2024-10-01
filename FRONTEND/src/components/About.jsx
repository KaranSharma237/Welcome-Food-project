import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At our restaurant, we are dedicated to crafting memorable dining experiences that celebrate the art of food. Nestled in a warm and inviting atmosphere, we offer a diverse menu that highlights the freshest seasonal ingredients sourced from local farms. Each dish is meticulously prepared by our talented chefs, who blend traditional recipes with innovative culinary techniques to create flavors that delight the palate. Whether you’re here for a cozy brunch, a family dinner, or a special celebration, our welcoming staff is committed to providing exceptional service that makes every visit special. Join us and discover a culinary journey that brings friends and family together around the table.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/download.jpeg" alt="about" />
          </div>
        </div>
      </section>
    )      
}
export default About ;
