import React, { useState, useEffect } from 'react'
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

	const [responsiveText, setResponsiveText] = useState(
		'Navigate using the nav bar on the left for projects!'
	)

	useEffect(() => {
		if (responsiveText === 'Navigate using the nav bar on the left for projects!') {
			if (window.innerWidth < 627) {
				setResponsiveText('Navigate using the icon at the top left!')
			}
		} else {
			if (window.innerWidth >= 627) {
				setResponsiveText('Navigate using the nav bar on the left for projects!')
			}
		}
	}, [])

	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="welcome to code antonio" size="true" id="welcome"></SectionsTitle>
			<div className="contentSide">
				<SectionContent content="I'm Antonio, welcome to my portfolio!" />
				<SectionContent content="I am an aspiring front-end developer." closer={true} />
			</div>
			<Picture
				src="The_Boyz-1613.jpg"
				sizes="(max-width: 360px) 360px, (max-width: 635px) 635px, (max-width: 841px) 841px, (max-width: 1041px) 1041px, (max-width: 1208px) 1208px, (max-width: 1371px) 1371px, (max-width: 1497px) 1497px, 1613px"
				srcset="The_Boyz-360.jpg 360w, The_Boyz-635.jpg 635w, The_Boyz-841.jpg 841w, The_Boyz-1041.jpg 1041w, The_Boyz-1208.jpg 1208w, The_Boyz-1371.jpg 1371w,  The_Boyz-1497.jpg 1497w,  The_Boyz-1613.jpg 1613w"
				alt="A picture of myself and our cat!"
				className="boxImage"
			/>
			<SectionsTitle content="about me" id="aboutme" />
			<div className="contentSide">
				<SectionContent content="I found my love for programming when I decided to take a closer look at code and found that solving problems was extremely fun." />
			</div>
			<div className="contentSide">
				<SectionContent content="I primarily focus on heavy use of Javascript using React and more recently Next.js" />
			</div>
			<div className="contentSide">
				<SectionContent content="I have experience taking web designs and turning them into reality." />
			</div>

			<div className="contentSide">
				<SectionContent content="I love cooking and playing DnD!" />
			</div>
			<div className="contentSide">
				<SectionContent content="I was born and raised in the Bay Area of California. I currently reside in Indiana to live with my girlfriend." />
			</div>
			<SectionsTitle content="projects" id="projects" />

			<div className="contentSide">
				<SectionContent content={responsiveText} />
			</div>
			<SectionsTitle content="contact" id="contact" />
			<div className="contentSide">
				<SectionContent content="Email: zamora88875@gmail.com" />
				<SectionContent content="Phone: (937) 782-9060" closer={true} />
			</div>
		</div>
	)
}
