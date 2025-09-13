import React from 'react';
import './home.css'
export default function Home () {
	return(
		<div className='Home' id="home">
			<p className='home-p'>Hi, I am</p>
			<h1 className='home-h1'>Shohjahon Rayimov</h1>
			<h3 className='home-h3'>Frontend-Developer</h3>



			<div className="social-media">
				<a href="mailto:shohjahonobshiy2023@gmail.com"><img src="/Assests/3.png" alt="" /></a>
				<a href="#"><img src="/Assests/Vector.png" alt="" /></a>
				<a href="https://github.com/MeronTeam"><img src="/Assests/Vector1.png" alt="" /></a>
			</div>
			<img src="/Assests/image 17.png" alt="" className='myPic'/>
			<p className='aboutPic'>this is not my photo, but I dearly hope to get one just like this </p>
		</div>
	)
}