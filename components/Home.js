import React, { useEffect } from 'react'
import SectionsTitle from '../components/SectionsTitle'
import SectionContent from './SectionContent'
import Picture from './Picture'

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
				<SectionContent content="This is my portfolio. Have a look around." />
				<SectionContent content="Thanks for being here! I'd love to talk." />
			</div>
			<Picture
				// srcset="/rwg_final_prev50.jpg 720w, /rwg_final_prev80.jpg 1152w, /rwg_final_prev100.jpg 1440w,"
				// sizes="(max-width: 500px) 720px, (max-width: 1000px) 1152px, 1440px"
				src="The_Boyz-1613.jpg"
				sizes="(max-width: 360px) 360px, (max-width: 635px) 635px, (max-width: 841px) 841px, (max-width: 1041px) 1041px, (max-width: 1208px) 1208px, (max-width: 1371px) 1371px, (max-width: 1497px) 1497px, (max-width: 1613px) 1613px"
				srcset="The_Boyz-360.jpg 360w, The_Boyz-635.jpg 635w, The_Boyz-841.jpg 841w, The_Boyz-1041.jpg 1041w, The_Boyz-1208.jpg 1208w, The_Boyz-1371.jpg 1371w,  The_Boyz-1497.jpg 1497w,  The_Boyz-1613.jpg 1613w"
				alt="A picture of myself and our cat!"
			/>
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
