import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Portfolio() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="This site: CodeAntonio!" size="true" id="overview" />
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
				<SectionContent content="Code Antonio is a single-page application (SPA)." />
			</div>
			<SectionsTitle content="step 1" id="step1" />
			<div className="contentSide">
				<SectionContent content="Design" size="true" />
				<div className="contentSide">
					<SectionContent content="The design was the most important element to this site, so no code was set until its appearance was mostly finalized." />
				</div>
				<div className="contentSide">
					<SectionContent content="After coming up with the gimmick of having similar aspects to an IDE I loved the idea of it." />
				</div>
				<div className="contentSide">
					<SectionContent content="I especially liked the gimmick of the site because it meant I had a new challenge of building a tab system." />
				</div>
			</div>
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
				<SectionContent content="Build" size="true" />
				<div className="contentSide">
					<SectionContent content="I simply started by creating skeletons of what would eventually be the tabs, then creating the sideNav in order to scroll to a specific area and swap what tab was being displayed." />
				</div>
				<div className="contentSide">
					<SectionContent content="My plan for how the tabs would work is that I would use state to control:" />
				</div>
				<div className="contentSide">
					<SectionContent content="1. what tab was currently being displayed," />
				</div>
				<div className="contentSide">
					<SectionContent content="2. the order of the tabs in the header as well as what tabs were available there," />
				</div>
				<div className="contentSide">
					<SectionContent content="Then I would implement useEffects to perform operations when that state changes." />
				</div>
				<div className="contentSide">
					<SectionContent content="So when something happens like a tab being deleted, or swapping tabs, all that happens is that the state changes to reflect that, then the useEffects trigger to display the new information." />
				</div>
			</div>

			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="Tabs" size="true" />
				<div className="contentSide">
					<SectionContent content="The tabs themselves were the most complex and challenging aspect to work on." />
				</div>
				<div className="contentSide">
					<SectionContent content="It took some iteration to find out a way to have the tabs be as reactive and as responsive as I intended." />
				</div>
				<div className="contentSide">
					<SectionContent content="Initially I thought I would simply be able to have an array with the tab Components display in the JSX, but I had issues with state not properly being updated when it was displayed like that." />
				</div>
				<div className="contentSide">
					<SectionContent content="The method I eventually ended up using was to have each tab exist inside the displaying JSX." />
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
