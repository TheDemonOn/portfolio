import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Portfolio() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="This site: codeantonio" size="true" id="overview" />
			<div className="contentSide">
				<SectionContent
					content="This website was made using React with the Next.js framework. "
					size="true"
				/>
			</div>
			<div className="contentSide">
				<SectionContent content="I used this site to experiment with creating an experince similar in feel to using an IDE." />
			</div>
			<div className="contentSide">
				<SectionContent content="The site has a proper tab system, built to be similar to the Visual Studio Code tab system." />
			</div>
			<div className="contentSide">
				<SectionContent content="This site is a single-page application (SPA)." />
			</div>
			<SectionsTitle content="step 1" id="step1" />
			<div className="contentSide">
				<SectionContent content="Design" size="true" />
				<div className="contentSide">
					<SectionContent content="The design was the most important element to this site, so no code was set until its appearance was mostly finalized." />
				</div>
				<div className="contentSide">
					<SectionContent content="After coming up with the gimmick of having similar aspects to an IDE I loved the idea of it, because it meant I had the new challenge of building a tab system." />
				</div>
			</div>
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
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
			</div>

			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="Tabs" size="true" />
				<div className="contentSide">
					<SectionContent content="Initially the plan was simply to have an array with the tab Components display in the JSX, but there were issues with state not properly being updated when the tabs were displayed in that way." />
				</div>
				<div className="contentSide">
					<SectionContent content="The method that eventually ended up being used was to have each tab exist inside the displaying JSX." />
				</div>
				<div className="contentSide">
					<SectionContent content="State was used to control whether it was displaying, the text and Icon to use, and its position in the tab order." />
				</div>
			</div>

			<SectionsTitle content="step 4" id="step4" />
			<div className="contentSide">
				<SectionContent content="Inputting Information" size="true" />
				<div className="contentSide">
					<SectionContent content="The last step was to simply add the content, and find the design sketches for the projects, and to examine the commit history of the projects to remember the steps of development more clearly." />
				</div>
			</div>

			<SectionsTitle content="challenges" id="challenges" />
			<div className="contentSide">
				<SectionContent content="The tab system was a challenge that went through some iteration to find a design that worked for this site." />
			</div>

			<SectionsTitle content="successes" id="successes" />
			<div className="contentSide">
				<SectionContent content="." />
			</div>
			{/* 
			<div className="contentSide">
				<SectionContent content="." />
			</div>
			<div className="contentSide">
				<SectionContent content="." />
			</div> */}
			{/*  */}
			{/* <div className="contentSide">
				<SectionContent content="." />
			</div>
			<div className="contentSide">
				<SectionContent content="" size="true" />
			</div> */}
			{/*  */}
		</div>
	)
}
