import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Autojack() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="autojack overview" size="true" id="overview" />
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
			<SectionsTitle content="step 1" id="step1" />
			<div className="contentSide">
				<SectionContent content="The Technology used" size="true" />

				<div className="contentSide">
					<SectionContent content="The project was created to be a single-page application (SPA) using React." />
				</div>
				<div className="contentSide">
					<SectionContent content="I used React Hooks and functional components since it seemed to reduce clutter over its Class component counterpart." />
				</div>
			</div>
			<div className="contentSide">
				<SectionContent content="Planning, or lack thereof" size="true" />

				<div className="contentSide">
					<SectionContent content="Much of the development of Autojack was very shallow and incremental in that I added features without accounting for how those features would interact with systems far down the line." />
				</div>
				<div className="contentSide">
					<SectionContent content="With enough foresight and proper planning about the steps to bring the project to completion, much of the headache of refactoring entire sections of code could have been avoided." />
				</div>
			</div>
			<div className="contentSide">
				<SectionContent content="Starting from Zero" size="true" />
				<div className="contentSide">
					<SectionContent content="The beginning stages were simple enough, create a deck, functions to manage drawing cards such as, hitting, standing, etc." />
				</div>
				<div className="contentSide">
					<SectionContent content="Since I was relatively new to React, I needed to figure out how to switch displayed components and manage my state." />
				</div>
				<div className="contentSide">
					<SectionContent content="In hindsight I was woefully underprepared to take on the scope of what I was planning." />
				</div>
				<div className="contentSide">
					<SectionContent content="My knowledge and use of React Hooks was very limited. For Example, not even knowing what the useEffect hook was until later." />
				</div>
				<div className="contentSide">
					<SectionContent content="But for the most part, creating the systems to handle dealer interactions, displaying money, and creating table options were fairly straightforward." />
				</div>
				<div className="contentSide">
					<SectionContent content="The largest issue I faced was my lack of understaning in how React was interacting with things related to state. Trying figure out how to prevent using old stale state was a large challenge." />
				</div>
			</div>
			{/* step 2 */}
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
				<SectionContent content="Managing Management and Tech Debt" size="true" />
				<div className="contentSide">
					<SectionContent content="At this point the projects had many functions, different table options, many useEffects triggering, and different systems managing things." />
				</div>
				<div className="contentSide">
					<SectionContent content="There was almost 2000 lines of code in one Javascript file that contained everything from calulating logic, to elements being displayed to interact with." />
				</div>
				<div className="contentSide">
					<SectionContent content="Everything was basically balancing on a giant swinging tower, where one week everything worked perfectly, while another week cards disappeared from the game, and shuffling the deck broke everything, sometimes." />
				</div>
				<div className="contentSide">
					<SectionContent content="The only truly honest way to fix everything would be to simply start over and do it right. That is probably my biggest takeaway, the value and importance of proper planning" />
				</div>
			</div>
			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="Design and Appearances" size="true" />
				<div className="contentSide">
					<SectionContent content="With the assistance of a graphic designer, a proper design was established with custom cards, as well as a variety of themes to view the site in." />
				</div>
				<div className="contentSide">
					<SectionContent content="However there were many aspects related to visualizing the cards and some extremely convoluted measures to solve my problems." />
				</div>
			</div>
			{/* An Exercise in Madness */}
			<div className="contentSide">
				<SectionContent content="The Complexity of Visuals" size="true" />
				<div className="contentSide">
					<SectionContent content="Certainly the most complicated and convoluted aspect of Autojack was, even more than the logic, getting visuals to properly execute in the correct order, using animations on the cards, and even more improper state management." />
				</div>
				<div className="contentSide">
					<SectionContent content="To make cards animate into the dealer position, as well as your hand, I created a complicated solution to cards not loading in before an animation plays, and to prevent incorrect cards from displaying due to caching." />
				</div>
			</div>
			<div className="contentSide">
				<SectionContent content="An Exercise in Madness" size="true" />
				<div className="contentSide">
					<SectionContent content="Since there was four different themes, I built a master component with all the directories of all the cards depending on the theme, suit, and value." />
				</div>
				<div className="contentSide">
					<SectionContent content="The implementation of displaying cards was having a generic card with position, width, height, and functions already set, except for the src and alt." />
				</div>
				<div className="contentSide">
					<SectionContent content="The src and alt attributes were dynamic, according whatever path it was meant to be by reading the current theme, the card's suit, then value to find the correct image to display the correct card." />
				</div>
				<div className="contentSide">
					<SectionContent content="There were a few issues with this implementation, including the cards getting cached incorrectly, and the cards not loading in-time for an animation." />
				</div>
				<div className="contentSide">
					<SectionContent content="To correct the caching Issue, I attached information about the current date and time to each card src that gets used to create a unique card every single time." />
				</div>
				<div className="contentSide">
					<SectionContent content="For the Issue of cards not loading in I created a system where a prerequisite for an animation starting was to have the src and alt be loaded into a display:none card. " />
				</div>
				<div className="contentSide">
					<SectionContent content="Then have an onLoad trigger for the invisible card to start the animation. When the onLoad triggers the card has been downloaded into memory. Therefore it will be displayed guarenteed for the animation. " />
				</div>
				<div className="contentSide">
					<SectionContent content="One of my biggest successes was always being able to come up with a solution to a problem, even if it was very bad and took more time than necessary because of poor architectural decisions." />
				</div>
			</div>

			<div className="contentSide">
				<SectionContent content="." />
			</div>
			<SectionsTitle content="challenges" id="challenges" />
			<div className="contentSide">
				<SectionContent content="." />
			</div>
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
