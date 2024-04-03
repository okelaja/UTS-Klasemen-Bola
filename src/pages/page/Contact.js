import React from "react";
import Hero from "../../component/Hero/Hero";
import "./Contact.css"

const Contact = () => {
    return (
        <div class="">
            <Hero />
             <h2>Contact Me</h2>
             <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required className="contact-container textarea "></textarea>

            <button type="submit" className="contact-container button ">Send</button>
            </form>
        </div>
    )
} 

export default Contact;