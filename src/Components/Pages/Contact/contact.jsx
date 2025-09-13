import React from "react";
import './contact.css'

const ContactPage = () => {
    return(
        <div id="contact">
            <h1 className="c-title">contact</h1>
            <p className="c-paragraph">We’d be happy to answer your questions or discuss new opportunities. Feel free to reach out <br/> to us via email, phone, or by filling out the form below</p> <br />
            <div className="sparator">
                <img src="Assests/separatorBlack 1.png" alt="1"/>
            </div>
            <div className="input-group">
                <input type="text" placeholder="ENTER YOUR NAME*"/>
                <input type="email" placeholder="ENTER YOUR EMAIL*"/>
                <input type="text" placeholder="PHONE NUMBER"/>
                <textarea placeholder="YOUR MESSAGE*"></textarea>
                <button className="about-btn">submit</button>
            </div>
        </div>
    )
}

export default ContactPage;