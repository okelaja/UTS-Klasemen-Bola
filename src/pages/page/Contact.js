import React from "react";
import Hero from "../../component/Hero/Hero";
import "./Contact.css"

const Contact = () => {
    return (
        <div class="">
            <Hero />
            <h2 className="h22">Contact Me</h2>
            <div class="contact-container">
                <div class="cards">
                
                <form>
                <label htmlFor="name">Name:</label> <br/>
                <input type="text" id="name" name="name" required /> <br/>

                <label htmlFor="email">Email:</label> <br/>
                <input type="email" id="email" name="email" required /> <br/>

                <label htmlFor="message">Message:</label> <br/>
                <textarea id="message" name="message" rows="5" required className="textarea "></textarea>

                <button type="submit" className="contact-container button ">Send</button>
                </form>
            </div>
            </div>
        </div>
    )
} 

export default Contact;