import React, { useEffect } from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'
import Picture from './Picture'
import Image from 'next/image'

export default function WordGenerator({ y, distanceFromTopFunc }) {
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
			<SectionsTitle content="rhyming word generator" size="true" id="overview" />
			<div className="contentSide">
				<SectionContent
					content="The first project I ever started was a random word generator that could produce rhymes."
					size="true"
				/>
			</div>
			<div className="contentSide">
				<SectionContent content="This was my first project I started to help develop my coding. I felt that this project wouldn't be too challenging to develop, and should be a good first start at using javascript to create something complex." />
			</div>
			<div className="contentSide">
				<SectionContent
					content="View the generator"
					decoration="underline"
					color="yellow"
					link="https://www.codeantonio.com/"
				/>
			</div>

			<SectionsTitle content="step 1" id="step1" />
			<SectionContent content="Learn how to Rhyme" size="true" />
			<div className="contentSide">
				<SectionContent content="Before writing any code the first step was learning how to assemble words." />
			</div>
			<div className="contentSide">
				<SectionContent content="I knew I would need a list of all the smallest units of sounds: graphemes, to mix and match." />
			</div>
			<SectionsTitle content="step 2" id="step2" />
			{/* <div className="contentSide"> */}
			<SectionContent content="Word Generation" size="true" />
			<div className="contentSide">
				<SectionContent content="I made a list of graphemes into groups that rhymed with each other, so if I needed to pick a random grapheme that rhymes, I just had to choose another from that rhyming group." />
			</div>
			<div className="contentSide">
				<SectionContent content="So the generated words would be random graphemes spliced together, with the last grapheme's rhyming group kept track of to rhyme with the last word in the next line." />
			</div>
			{/* </div> */}
			<SectionsTitle content="step 3" id="step3" />
			{/* <div className="contentSide"> */}
			<SectionContent content="User Interface" size="true" />
			<div className="contentSide">
				<SectionContent content="Next was working on the actual displaying of the lines." />
			</div>
			<div className="contentSide">
				<SectionContent content="Once the UI was mostly set up to customize and generate lines of rhyming sentences, I began refactoring code to have less functions and start to clean up." />
			</div>
			<div className="contentSide">
				<SectionContent content="After refactoring, more UI features were added such as a way to delete lines, modify lines, undo delete, and add a section to enter youtube links and have them play in the page." />
			</div>
			{/* </div> */}
			<SectionsTitle content="step 4" id="step4" />
			{/* <div className="contentSide"> */}
			<SectionContent content="Design & Responsitivity" size="true" />
			<div className="contentSide">
				<SectionContent content="With most features implemented and complete, the only thing remaining was a proper design for the site, as well as responsitivity." />
			</div>
			{/* <div className="contentSide">
				<SectionContent content="And with that my first project was finally taken to completion." />
			</div> */}
			{/* </div> */}
			<SectionsTitle content="challenges" id="challenges" />
			<div className="contentSide">
				<SectionContent content="There were many basic problems I enountered, related to how to send & receive data, as well as inserting and removing elements to the DOM. The technical problems ultimately were not significantly challenging and helped me develop my skills." />
			</div>

			<div className="contentSide">
				<SectionContent content="Far more challenging than the technical problems was the problem of managing a codebase that was larger than 1000 lines, in one unorganized file." />
			</div>
			<div className="contentSide">
				<SectionContent content="This proved to be the most frustrating aspect of the project. Not partitioning the Javascript into some smaller components was certainly the largest failure in hindsight, due to how much harder it was to do anything." />
			</div>
			<SectionsTitle content="successes" id="successes" />
			<div className="contentSide">
				<SectionContent content="Before I had many of the functions and DOM manipulations of Javascript memorized, I developed a successful workflow using the MDN documentation as a large toolbox." />
			</div>
			{/* <div className="contentSide">
				<SectionContent content="I would first analyze a problem, then look through the Javascript documentation and pick out functions which could prove useful, developing a set of tools at my disposal." />
			</div> */}
			{/* <div className="contentSide">
				<SectionContent content="Then I would narrow down the tools to the best, or a combination to solve a problem." />
			</div> */}
			<div className="contentSide">
				<SectionContent content="One of larger successes I had was being able to take a design given to me by a graphic designer and being able to realize those plans into a fully functional site." />
			</div>
			{/* Abtou 1250 is touching the edge */}
			{/* About 350 for tghe content on the left */}
			<SectionsTitle content="final screenshots" id="screenshots" />
			{/* <SectionContent content="[Pictures]" /> */}
			{/* <Picture
				srcset="/rwg_sketch50.jpg 848w, /rwg_sketch80.jpg 1357w, /rwg_sketch100.jpg 1696w,"
				sizes="(max-width: 1200px) 848px, (max-width: 1700px) 1347px, 1696px"
				src="/rwg_sketch100.jpg"
				alt="Initial sketch of site."
				className="boxImage"
			/> */}
			<Picture
				srcset="rwg_notes360.jpg 360w, rwg_notes969.jpg 969w, rwg_notes1397.jpg 1397w, rwg_notes1760.jpg 1760w"
				sizes="(max-width: 360px) 360px, (max-width: 969px) 969px, (max-width: 1397px) 1397px, 1760px"
				src="rwg_notes1760.jpg"
				alt="Another sketch with more detail."
				className="largerImage"
			/>
			{/* <Picture
				srcset="/rwg_final_prev50.jpg 720w, /rwg_final_prev80.jpg 1152w, /rwg_final_prev100.jpg 1440w,"
				sizes="(max-width: 500px) 720px, (max-width: 1000px) 1152px, 1440px"
				src="/rwg_final_prev100.jpg"
				alt="A finalized design of the site."
				className="boxImage"
			/> */}
		</div>
	)
}
