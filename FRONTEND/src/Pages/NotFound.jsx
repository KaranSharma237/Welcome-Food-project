import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
    return (
        <section className="not-found">
            <div className="container">
                <img src="/notFound.svg" alt="Page Not Found" className="not-found-image" />
                <h1>LOOKS LIKE YOU'RE LOST.</h1>
                <p>We can't seem to find the page you're looking for.</p>
                <Link to="/" aria-label="Back to Home" className="back-home-link">
                    Back to Home{" "}
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;

