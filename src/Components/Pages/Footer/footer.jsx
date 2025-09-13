import React from "react";
import './footer.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope,  } from "react-icons/fa";
import { GoCheckbox, GoChevronUp } from "react-icons/go";
const FooterPage = () => {
    return(
        <div className="Footer">
            <a href="#home" className="toTop">
                <GoChevronUp color="white" size={20}/>
                <h3>back to top</h3>
            </a>

            <div className="icon-group">
                <a href="#home"><FaFacebook color="white" size={30} className="icon"/></a>
                <a href="#home"><FaLinkedin color="white" size={30} className="icon"/></a>
                <a href="#home"><FaInstagram color="white" size={30} className="icon"/></a>
                <a href="#home"><FaEnvelope color="white" size={30} className="icon"/></a>
            </div>

            <p>
                <strong>
                    @2025 Shohjahon Rayimov
                </strong>
                <span>
                    All Rights Reserved.
                </span>
            </p>
        </div>
    )
}

export default FooterPage