import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount === 1) {
                    clearInterval(timeoutId);
                    navigate("/"); // Redirect when countdown reaches 0
                    return 0; // Ensure countdown shows 0
                } 
                return prevCount - 1;
            });
        }, 1000);
        
        return () => clearInterval(timeoutId); // Cleanup on unmount
    }, [navigate]);

    return (
        <center>
        <section className="success">
            <div className="container">
                <img src="/sandwich.png" alt="Success" />
               <h1> Thank You ...
                    Redirecting to Home in {countdown} seconds...</h1> 
                <Link to="/">
                    Back to Home <HiOutlineArrowNarrowRight />
                </Link>
            </div>
        </section>
        </center>
    );
};

export default Success;
