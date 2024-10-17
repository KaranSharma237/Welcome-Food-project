import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://welcome-food-project-backend.onrender.com/api/v1/reservation", // Update the URL if necessary
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            navigate("/success");
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="reservation" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For further questions, please call</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="email_tag"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <input
                                    type="tel" // Use tel for phone input
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    className="phone_tag"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit">
                                RESERVE NOW{" "}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;

