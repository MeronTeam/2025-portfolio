import React from "react";
import './portfolio.css'
const Portfolio = () => {
    return(
        <div className="Portfolio" id="portfolio">
            <div className="titleBox">
                <h1 className="title">Portfolio</h1>
            </div>
            <div className="projects">
                <ul>
                    <li>All</li>
                    <li>coded</li>
                    <li>designed</li>
                </ul>
                <div className="p-images">
                    <a href="https://shopify-nine-alpha.vercel.app/"><img src="Assests/1.jpg" alt="1" /></a>
                    <a href="https://rivo-website-project.vercel.app/"><img src="Assests/2.jpg" alt="2" /></a>
                    <a href="https://flex-website-clone.vercel.app/"><img src="Assests/3.jpg" alt="3" /></a>
                    <a href="https://omnifood-website-clone.vercel.app/"><img src="Assests/4.jpg" alt="4" /></a>
                    <a href="https://my-first-portfolio-amber.vercel.app/"><img src="Assests/5.jpg" alt="5" /></a>
                    <a href="https://to-do-list-pearl.vercel.app/"><img src="Assests/6.jpg" alt="6" /></a>
                </div>
                <p>And many more to come!</p>
            </div>
        </div>
    )
}

export default Portfolio;