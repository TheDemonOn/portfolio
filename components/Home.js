import React, { useEffect } from 'react'
import SectionsTitle from '../components/SectionsTitle'
import SectionContent from './SectionContent'

export default function Home({ y, distanceFromTopFunc }) {
	useEffect(() => {
		window.addEventListener('scroll', distanceFromTopFunc)
		return () => {
			window.removeEventListener('scroll', distanceFromTopFunc)
		}
	}, [])

	useEffect(() => {
		window.scroll({
			top: y,
			left: 0,
			behavior: 'instant',
		})
	}, [])
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="welcome to code antonio" size="true" id="welcome"></SectionsTitle>
			<div className="contentSide">
				<SectionContent content="This is my portfolio. Have a look around." size="true" />
				<SectionContent content="If you like my work, I'd love to talk." size="true" />
			</div>
			<SectionsTitle content="about me" id="aboutme" />
			<div className="contentSide">
				<SectionContent content="I found my love for programming when I decided to take a closer look at software and found that solving problems was extremely fun." />
			</div>
			<div className="contentSide">
				<SectionContent content="I primarily focus on heavy use of Javascript using React and more recently Next.js" />
			</div>
			<div className="contentSide">
				<SectionContent content="I have experience taking web designs and turning them into reality." />
			</div>
			<div className="contentSide">
				<SectionContent content="I love video games and DnD!" />
			</div>
			<SectionsTitle content="projects" id="projects" />
			<SectionContent content="Lorem ipsum." />
			<SectionsTitle content="contact" id="contact" />
			<SectionContent content="My email is: zamora88875@gmail.com" />
		</div>
	)
}
