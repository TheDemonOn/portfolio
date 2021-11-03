import React from 'react'
import SectionsTitle from '../components/SectionsTitle'
import SectionContent from './SectionContent'

export default function Home() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="welcome to code antonio" size="true"></SectionsTitle>
			<SectionContent content="This is my portfolio. Have a look around." size="true" />
			<SectionContent content="If you like my work, I'd love to talk." size="true" />
			<SectionsTitle content="about me" />
			<SectionContent content="I found my love for programming when I decided to take a closer look at software and found that solving problems was extremely fun." />
			<SectionContent content="I primarily focus on heavy use of Javascript using React and more recently Next.js" />
			<SectionContent content="I have experience taking web designs and turning them into reality." />
			<SectionsTitle content="projects" />
			<SectionsTitle content="contact" />
			<SectionContent content="My email is: zamora88875@gmail.com" />
		</div>
	)
}
