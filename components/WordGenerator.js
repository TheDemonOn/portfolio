import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'
import Picture from './Picture'
import Image from 'next/image'

export default function WordGenerator() {
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
				<SectionContent content="This was my first project I attempted after feeling confident enough in my coding skills. I felt that this project wouldn't be too challenging to develop, and should be a good first start at using javascript to create something complex." />
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
			<div className="contentSide">
				<SectionContent content="Learn how to Rhyme" size="true" />
				<div className="contentSide">
					<SectionContent content="Learn how rhymes are made, and how to divide sounds to their smallest units: a grapheme." />
				</div>
				<div className="contentSide">
					<SectionContent content="Create two catagories of graphemes: Vowels & Consonants and a rhyme guide to coordinate two separately generated words." />
				</div>
			</div>
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
				<SectionContent content="Setup Generation" size="true" />
				<div className="contentSide">
					<SectionContent content="Create random words using graphemes from a list and combining them together." />
				</div>
				<div className="contentSide">
					<SectionContent content="To create the rhyme at least two lines have to be generated, at minimum one word. Every word is generated with the [beginning, middle, end] formula, but the last word in a line is kept track of for rhyming." />
				</div>
			</div>
			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
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
			</div>
			<SectionsTitle content="step 4" id="step4" />
			<div className="contentSide">
				<SectionContent content="Design & Responsitivity" size="true" />
				<div className="contentSide">
					<SectionContent content="With most features implemented and complete, the only thing remaining was a proper design for the site, as well as responsitivity." />
				</div>
				<div className="contentSide">
					<SectionContent content="And with that my first project was finally taken to completion." />
				</div>
			</div>
			<SectionsTitle content="challenges" id="challenges" />
			<div className="contentSide">
				<SectionContent content="There were many basic problems I enountered, related to how to send & receive data, as well as inserting and removing elements to the DOM. The technical problems ultimately were not significantly challenging and helped me develop my skills." />
			</div>
			<div className="contentSide">
				<SectionContent content="In particular, using the MDN Docs for HTML, CSS, and Javascript. I also significantly improved my ability to search for information using Google in order to create my own custom solutions for specific problems I encountered." />
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
			<div className="contentSide">
				<SectionContent content="I would first analyze a problem, then look through the Javascript documentation and pick out functions which could prove useful, developing a set of tools at my disposal." />
			</div>
			<div className="contentSide">
				<SectionContent content="Then I would narrow down the tools to the best, or a combination to solve a problem." />
			</div>
			<div className="contentSide">
				<SectionContent content="One of larger successes I had was being able to take a design given to me by a graphic designer and being able to realize those plans into a fully functional site." />
			</div>
			{/* Abtou 1250 is touching the edge */}
			{/* About 350 for tghe content on the left */}
			<SectionsTitle content="final screenshots" id="screenshots" />
			<SectionContent content="[Pictures]" />
			<Picture
				srcset="/rwg_sketch50.jpg 848w, /rwg_sketch80.jpg 1357w, /rwg_sketch100.jpg 1696w,"
				sizes="(max-width: 1200px) 848px, (max-width: 1700px) 1347px, 1696px"
				src="/rwg_sketch100.jpg"
				alt="Initial sketch of site."
			/>
			<Picture
				srcset="/rwg_notes50.jpg 838w, /rwg_notes80.jpg 1340w, /rwg_notes100.jpg 1675w,"
				sizes="(max-width: 500px) 838px, (max-width: 1000px) 1340px, 1675px"
				src="/rwg_notes100.jpg"
				alt="Another sketch with more detail."
			/>
			<Picture
				srcset="/rwg_final_prev50.jpg 720w, /rwg_final_prev80.jpg 1152w, /rwg_final_prev100.jpg 1440w,"
				sizes="(max-width: 500px) 720px, (max-width: 1000px) 1152px, 1440px"
				src="/rwg_final_prev100.jpg"
				alt="A finalized design of the site."
			/>
		</div>
	)
}
