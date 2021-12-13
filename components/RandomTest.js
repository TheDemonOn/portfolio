import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function RandomTest() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="randomness test" size="true" />
			<div className="contentSide">
				<SectionContent
					content="Randomness Test was a small project to learn how to use an API and try out Next.js"
					size="true"
				/>
			</div>
			<div className="contentSide">
				<SectionContent content="This is a simple project which compares human randomness to computer randomness and 'true' randomness." />
			</div>
			<div className="contentSide">
				<SectionContent content="This site compares the distribution of streaks of 0's and 1's between human and computer at small data samples, and compares pseudorandom to true random at a larger scale." />
			</div>
			<div className="contentSide">
				<SectionContent content="This project learns from the failures of the past and was a significantly better experience to develop and execute." />
			</div>
			<SectionsTitle content="step 1" id="step1" />
			<div className="contentSide">
				<SectionContent content="Foresight" size="true" />
				<div className="contentSide">
					<SectionContent content="The first step was planning ahead. After bad experiences due to mismanaged tech debt, I made sure to compartmentalize the code whenever possible to make devlopment easier." />
				</div>
				<div className="contentSide">
					<SectionContent content="After properly planning ahead, I got started on one of my main reasons for wanting to try this project: to learn how to integrate the use of an API." />
				</div>
			</div>
			<div className="contentSide">
				<SectionContent content="The API" size="true" />
				<div className="contentSide">
					<SectionContent content="The API that I was going to use was the Random.org API to generate values using their method of measuring atmospheric noise." />
				</div>
				<div className="contentSide">
					<SectionContent content="It took a while to figure out, after exmaining the API documentation, to get the syntax quite right but with some trial and error I was successful." />
				</div>
			</div>
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
				<SectionContent content="Chart.js" size="true" />

				<div className="contentSide">
					<SectionContent content="The next step was to create a system to generate random numbers and to analyze the pseudorandom values for use in the Chart.js library for creating the graphs." />
				</div>
				<div className="contentSide">
					<SectionContent content="After creating the first graphs with random data I realized an issue in the way I was going about demonstrating the diffrence between human and random generation." />
				</div>
				<div className="contentSide">
					<SectionContent content="Originally I was going using ten numbers 0-9 to show how humans are bad at creating a truly random pattern." />
				</div>
				<div className="contentSide">
					<SectionContent content="But the problem was that a larger sample of values would be needed to see anything at all, more than would be quick to input. So I simply reduced the scope to just 0 and 1 to require significantly less data for interesting charts." />
				</div>
			</div>
			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="Data Management" size="true" />
			</div>

			<div className="contentSide">
				<SectionContent content="Since this project is mostly just manipulating data and visualizing it, managing all the data is especially critical." />
			</div>
			<div className="contentSide">
				<SectionContent content="I used the React Hook useContext in order to help with transfering data from different components." />
			</div>
			<div className="contentSide">
				<SectionContent content="Prop drilling, the method of passing each state from child to parent through multiple layers, creates a messy system of sending data to exactly where it needs to be." />
			</div>
			<div className="contentSide">
				<SectionContent content="The useContext hook allows the passing of data to a Context.Provider which can allow the data to be accessed by all the components it is wrapped around very easily." />
			</div>
			<div className="contentSide">
				<SectionContent content="Visuals" size="true" />
			</div>
			<div className="contentSide">
				<SectionContent content="With the different methods of number generation, data management, and graphs worked out, finishing things up was simply preventing any inputs from breaking anything and the project functionally was complete	." />
			</div>
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
