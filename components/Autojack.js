import React, { useEffect } from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'
import Picture from './Picture'

export default function Autojack({ y, distanceFromTopFunc }) {
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
		<main className="inline tabContentPosition">
			<SectionsTitle content="autojack" size="true" id="overview" />
			<section>
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
					<SectionContent
						content="View Autojack"
						decoration="underline"
						color="yellow"
						link="https://autojack.netlify.app/"
					/>
				</div>
			</section>
			<SectionsTitle content="step 1" id="step1" />
			<section>
				<SectionContent content="The Technology used" size="true" />
				<div className="contentSide">
					<SectionContent content="The project was created to be a single-page application (SPA) using React." />
				</div>
				<div className="contentSide">
					<SectionContent content="React Hooks and functional components were used since it seemed to reduce clutter over its class component counterpart." />
				</div>
				<SectionContent content="Starting from Zero" size="true" />
				<div className="contentSide">
					<SectionContent content="The beginning stages were simple enough, create a deck, functions to manage drawing cards such as, hitting, standing, etc." />
				</div>
				<div className="contentSide">
					<SectionContent content="Creating the systems to handle dealer interactions, displaying money, and creating table options were fairly straightforward." />
				</div>
				<Picture
					srcset="autojackBadCode583.jpg 583w, autojackBadCode796.jpg 796w, autojackBadCode987.jpg 987w,"
					sizes="(max-width: 583px) 583px, (max-width: 796px) 796px, 987px"
					src="autojackBadCode987.jpg"
					alt="Example of code cringe, I have learned from the mistakes of the past."
					className="largerImage"
				/>
				<div className="contentSide">
					<SectionContent content="Even if I barely understood how I was managing state at all." />
				</div>
			</section>
			<SectionsTitle content="step 2" id="step2" />
			<section>
				<SectionContent content="Managing Tech Debt" size="true" />
				<div className="contentSide">
					<SectionContent content="At this point the project had many functions, different table options, many useEffects triggering, and different systems managing things. Almost 2000 lines of code in one Javascript file. And this number would only grow over the remaining development." />
				</div>
				<Picture
					srcset="autojackLargeLineCount360.jpg 360w, autojackLargeLineCount527.jpg 527w, autojackLargeLineCount609.jpg 609w,"
					sizes="(max-width: 360px) 360px, (max-width: 527px) 527px, 609px"
					src="autojackLargeLineCount609.jpg"
					alt="An image of the line count in one file being 5537 lines long."
					className="inBetweenImage"
				/>
				<div className="contentSide">
					<SectionContent content="The lack of organization in the code made devlopment much more challenging." />
				</div>
				<div className="contentSide">
					<SectionContent content="As a result the scope of the project was reduced in some features to ensure it would eventually be completed." />
				</div>
			</section>
			<SectionsTitle content="step 3" id="step3" />
			<section>
				<SectionContent content="Design and Appearances" size="true" />
				<div className="contentSide">
					<SectionContent content="With the assistance of a graphic designer, a proper design was established with custom cards, as well as a variety of themes." />
				</div>
				<div className="cardFlex">
					<Picture src="t1ace_club.png" alt="Ace of Clubs." className="cardImage" />
					<Picture src="t2ace_diamond.png" alt="Ace of Diamonds." className="cardImage" />
					{/* </div>
				<div className="flex"> */}
					<Picture src="t3ace_heart.png" alt="Ace of Hearts." className="cardImage" />
					<Picture src="T4ace_spade.png" alt="Ace of Spades." className="cardImage" />
				</div>
				<SectionContent content="Animation" size="true" />
				<div className="contentSide">
					<SectionContent content="Animation was added using the React library Framer Motion." />
				</div>
				<SectionContent content="An Exercise in Madness" size="true" />
				<div className="contentSide">
					<SectionContent content="There were a few issues related to caching and animations playing before an element was loaded, and these were resolved in a somewhat convoluted manner, involving loading in elements invisibly and starting animations when they did." />
				</div>
				<div className="contentSide">
					<SectionContent content="The split function was ultimately disabled because of the severity of the animation issues involving it." />
				</div>
			</section>
			<SectionsTitle content="challenges" id="challenges" />
			<section>
				<div className="contentSide">
					<SectionContent content="A big challenge I faced with Autojack was simply becoming more familiar with React! In the future If I am ever going to learn or use a new tool or technology, I will do something small so that the complexity can be reduced." />
				</div>
				<div className="contentSide">
					<SectionContent content="Autojack definitely helped build my understanding of figuring out what is essential for the project, and getting those sorted before expanding features." />
				</div>
				<div className="contentSide">
					<SectionContent content="Similar to the previous project, one of the largest issues was not correctly managing a very large and sprawling codebase." />
				</div>
			</section>
			<SectionsTitle content="successes" id="successes" />
			<section>
				<div className="contentSide">
					<SectionContent content="The largest thing I took away from Autojack and the Random Rhyming Word Generator was to manage and compartmentalize code for easier interaction with as a developer." />
				</div>
			</section>
		</main>
	)
}
