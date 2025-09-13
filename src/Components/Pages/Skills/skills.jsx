import React from "react";
import './skill.css'
import styled from "styled-components";

const Skills = ()=> {
    const IDK = styled.h1`
		text-transform:uppercase;
		margin-bottom: 4rem;
		letter-spacing: 3px;
		text-align:start;
		margin-left: 20rem;
	`

	const NameUsing = styled.p`
		text-transform: uppercase;
		font-size: 25px;
		margin-top: 2rem;
		letter-spacing: 1px;
	`
    return(
        <div id="skills">
            <h1 className='title-about2'>skills</h1>

			<IDK>using now :</IDK>
			<div className='usable'>
				<div className="box-u">
					<img src="Assests/group 12.svg" alt="" />
					<NameUsing>html5</NameUsing>
				</div>
				<div className="box-u">
					<img src="Assests/group 13.svg" alt="" />
					<NameUsing>css</NameUsing>
				</div>
				<div className="box-u">
					<img src="Assests/group 14.svg" alt="" />
					<NameUsing>react</NameUsing>
				</div>
				<div className="box-u">
					<img src="Assests/Group.svg" alt="" />
					<NameUsing>javascript</NameUsing>
				</div>
				<div className="box-u">
					<img src="Assests/bootstrap.svg" alt="" />
					<NameUsing>bootstrap</NameUsing>
				</div>
				<div className="box-u">
					<img src="Assests/git.svg" alt="" />
					<NameUsing>git</NameUsing>
				</div>
			</div>
			
        </div>
    )
}

export default Skills;