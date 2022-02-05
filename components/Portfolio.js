import React, { useEffect } from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Portfolio({ y, distanceFromTopFunc }) {
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
			<SectionsTitle content="this site: codeantonio" size="true" id="overview" />
			<section>
				<div className="contentSide">
					<SectionContent
						content="This website was made using React with the Next.js framework. "
						size="true"
					/>
				</div>
				<div className="contentSide">
					<SectionContent content="The site has a proper tab system, built to be similar to the Visual Studio Code tab system." />
				</div>
				<div className="contentSide">
					<SectionContent content="Accessibility has been implemented for a better user experience." />
				</div>
				<div className="contentSide">
					<SectionContent content="This site is a single-page application (SPA)." />
				</div>
				<div className="contentSide">
					<SectionContent content="I used this site to experiment with creating an experince similar in feel to using an IDE." />
				</div>
			</section>
			<SectionsTitle content="step 1" id="step1" />
			<section>
				<SectionContent content="Design" size="true" />
				<div className="contentSide">
					<SectionContent content="The design was the most important element to this site, so no code was set until its appearance was mostly finalized." />
				</div>
				<div className="contentSide">
					<SectionContent content="After coming up with the gimmick of having similar aspects to an IDE I loved the idea of it because it meant I had the new challenge of building a tab system." />
				</div>
			</section>
			<SectionsTitle content="step 2" id="step2" />
			<section>
				<SectionContent content="Build" size="true" />
				<div className="contentSide">
					<SectionContent content="It began with the creation of the skeleton for the tabs, then creating the sideNav in order to scroll to a specific area." />
				</div>
				<div className="contentSide">
					<SectionContent content="The plan for how the tabs would work is that state would control:" />
				</div>
				<div className="contentSide">
					<SectionContent content="1. which tab was currently being displayed" />
				</div>
				<div className="contentSide">
					<SectionContent content="2. the order of the tabs in the header as well as what tabs were available there" />
				</div>
				<div className="contentSide">
					<SectionContent content="Then several useEffects would mutate the DOM to reflect a change in state." />
				</div>
			</section>
			<SectionsTitle content="step 3" id="step3" />
			<section>
				<SectionContent content="Tabs" size="true" />
				<div className="contentSide">
					<SectionContent content="The method for creating the system was to have each tab exist inside the displaying JSX." />
				</div>
				<div className="contentSide">
					<SectionContent content="State was used to control whether it was displaying, the text and Icon to use, and its position in the tab order." />
				</div>
			</section>
			<SectionsTitle content="step 4" id="step4" />
			<section>
				<SectionContent content="Accessibility" size="true" />
				<div className="contentSide">
					<SectionContent content="I used this project to develop my accessibility skills which were severely lacking prior to my full introduction to screen readers." />
				</div>
				<div className="contentSide">
					<SectionContent content="In particular I was not at all familiar with using ARIA to help the screen reader experience." />
				</div>
				<div className="contentSide">
					<SectionContent content="In particular I was not at all familiar with using ARIA to help the screen reader experience." />
				</div>
				<div className="contentSide">
					<SectionContent content="To the best of my ability I have made the experience of using this site with a screen reader as easy as possible." />
				</div>
			</section>
			<SectionsTitle content="challenges" id="challenges" />
			<section>
				<div className="contentSide">
					<SectionContent content="The tab system was a challenge that went through some iteration to find a design that worked for this site." />
				</div>
			</section>
			<SectionsTitle content="successes" id="successes" />
			<section>
				<div className="contentSide">
					<SectionContent content="My success was having made my first portfolio site ever, flaws and all. I plan to completely redo the entire site because of all the new ideas I had while working on this one!" />
				</div>
				<div className="contentSide">
					<SectionContent content="Accessibility is another area I have improved very significantly, with new things like ARIA labels and hidden skip navigation buttons!" />
				</div>
			</section>
		</main>
	)
}
