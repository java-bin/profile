import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import Achievement from './Achievement/Achievement';
import Blog from './Blog/Blog';
import Certification from './Certification/Certification';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import { greeting, skills, experience, achievements, blogs, certification, contactInfo } from '../portfolio';

function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{achievements.view && <Achievement />}
			{blogs.view && <Blog />}
			{certification.view && <Certification />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;