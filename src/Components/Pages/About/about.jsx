import React from 'react';
import './about.css'
import styled from "styled-components";

const AboutPage = () => {

	const Margin = styled.img`
		margin-bottom: 5rem;
		margin-top: 5rem;
	`

	

	return(
		<div className='About' id="about">
			<h1 className='title-about1'>about me</h1>
			<p className='subtitle'>Hello! My name is Shohjahon, and I’m a passionate learner in IT and Frontend Development. I enjoy creating modern, <br/> responsive websites and exploring new technologies.. When I’m not coding,  I like studying math,<br/> watching action movies, and learning new things about business.</p>
			<button className='about-btn'>explore</button> <br/>
			<Margin src='Assests/separatorBlack 1.png' alt='Logo'></Margin>
			<div className='services'>
				<div className='box'>
					<h1>design</h1>
					<img src="Assests/136378-200 1.png" alt="" />
					<p>I create modern and user-friendly web designs.
						My focus is on clean layouts with smooth interactions.</p>
				</div>
				<div className='box'>
					<h1>Development</h1>
					<img src="Assests/img_533288 1.png" alt="" />
					<p>I can develop your website with clean code and add custom features for the best user experience.</p>
				</div>
				<div className='box'>
					<h1>maintenance</h1>
					<img src="Assests/maintenance--v3 1.png" alt="" />
					<p>I can maintain and update your website regularly, ensuring it stays secure, fast, and always up-to-date.</p>
				</div>
			</div>
			<Margin src='Assests/separatorBlack 1.png' alt='Logo'></Margin> <br />
			{/* ------------------------Skills ------------------- */}

			
		</div>
	)
}

export default AboutPage;