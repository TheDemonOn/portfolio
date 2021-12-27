import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Autojack() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="autojack" size="true" id="overview" />
			{/* Perhaps use the Idea of the Chapter Title when the idea is implemented to just have Autojack, then the overview section is it's own thing */}
			<div className="contentSide">
				<SectionContent
					content="Autojack was my first project using the React framework."
					size="true"
				/>
			</div>
			<div className="contentSide">
				<SectionContent content="Autojack was an attempt to create a functional blackjack game that could be played manually or automatically." />
			</div>
			<div className="contentSide">
				<SectionContent content="The original goal was to implement a feature to simulate many thousands of games with different betting strategies to show how effective counting cards was in Blackjack, and to visualize this with a library of some kind." />
			</div>
			<div className="contentSide">
				<SectionContent
					content="View Autojack"
					decoration="underline"
					color="yellow"
					link="https://www.codeantonio.com/"
				/>
			</div>
			<SectionsTitle content="step 1" id="step1" />
			<div className="contentSide">
				<SectionContent content="The Technology used" size="true" />

				<div className="contentSide">
					<SectionContent content="The project was created to be a single-page application (SPA) using React." />
				</div>
				<div className="contentSide">
					<SectionContent content="React Hooks and functional components were used since it seemed to reduce clutter over its c	lass component counterpart." />
				</div>
			</div>
			<div className="contentSide">
				<SectionContent content="Starting from Zero" size="true" />
				<div className="contentSide">
					<SectionContent content="The beginning stages were simple enough, create a deck, functions to manage drawing cards such as, hitting, standing, etc." />
				</div>
				<div className="contentSide">
					<SectionContent content="Creating the systems to handle dealer interactions, displaying money, and creating table options were fairly straightforward." />
				</div>
			</div>
			{/* step 2 */}
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
				<SectionContent content="Managing Tech Debt" size="true" />
				<div className="contentSide">
					<SectionContent content="At this point the projects had many functions, different table options, many useEffects triggering, and different systems managing things. Almost 2000 lines of code in one Javascript file." />
				</div>
				<div className="contentSide">
					<SectionContent content="The lack of organization in the code made devlopment more challenging." />
				</div>
				<div className="contentSide">
					<SectionContent content="As a result the scope of the project was reduced in some features to ensure it would eventually be completed." />
				</div>
			</div>
			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="Design and Appearances" size="true" />
				<div className="contentSide">
					<SectionContent content="With the assistance of a graphic designer, a proper design was established with custom cards, as well as a variety of themes." />
				</div>
			</div>
			{/* An Exercise in Madness */}
			<div className="contentSide">
				<SectionContent content="Animation" size="true" />
				<div className="contentSide">
					<SectionContent content="Animation was added using the React library Framer Motion." />
				</div>
				<div className="contentSide">
					<SectionContent content="Making sure the animations started at the correct time was a challenge." />
				</div>
			</div>
			<div className="contentSide">
				<SectionContent content="An Exercise in Madness" size="true" />
				<div className="contentSide">
					<SectionContent content="There were a few issues related to caching and animations playing before an element was loaded, and these were resolved in a somewhat convoluted manner, involving loading in elements invisibly and starting animations when they did." />
				</div>
				<div className="contentSide">
					<SectionContent content="The split function was ultimately disabled because of the severity of the animation issues involving it." />
				</div>
			</div>
			<SectionsTitle content="challenges" id="challenges" />
			<div className="contentSide">
				<SectionContent content="A big challenge I faced with Autojack was simply becoming more familiar with React! In the future If I am ever going to learn or use a new tool or technology, I will do something small so that the complexity can be reduced." />
			</div>
			<div className="contentSide">
				<SectionContent content="With Autojack I certainly bit off more than I could chew, having very large plans without cutting less useful features." />
			</div>
			<div className="contentSide">
				<SectionContent content="This definitely helped build my understanding of figuring out what is essential for the project, and getting those sorted before expanding features." />
			</div>
			<div className="contentSide">
				<SectionContent content="Similar to the previous project, one of the largest issues was not correctly managing a very large and sprawling codebase." />
			</div>
			<div className="contentSide">
				<SectionContent content="The largest thing I took away from Autojack and the Random Rhyming Word Generator, was to manage and compartmentalize code for easier interaction with as a developer." />
			</div>
			<SectionsTitle content="successes" id="successes" />
			<div className="contentSide">
				<SectionContent content="." />
			</div>
			<SectionsTitle content="screenshots" id="screenshots" />
			<div className="contentSide">
				<SectionContent content="." />
			</div>
		</div>
	)
}
