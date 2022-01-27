import React, { useEffect } from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function RandomTest({ y, distanceFromTopFunc }) {
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
			<SectionsTitle content="random test" size="true" id="overview" />
			<div className="contentSide">
				<SectionContent
					content="Randomness Test was a small project to learn how to use an API and try out Next.js"
					size="true"
				/>
			</div>
			<div className="contentSide">
				<SectionContent content="This site compares the distribution of streaks of 0's and 1's between human and computer at small data samples, and compares pseudorandom to true random at a larger scale." />
			</div>
			<div className="contentSide">
				<SectionContent content="This project learns from the failures of the past and was a significantly better experience to develop and execute." />
			</div>
			<div className="contentSide">
				<SectionContent
					content="View the project"
					decoration="underline"
					color="yellow"
					link="https://www.codeantonio.com/"
				/>
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
					<SectionContent content="After creating the first graphs with random data I realized an issue in the original way I had intended to demonstrate the difference between human and true randomness using 0-9." />
				</div>
				<div className="contentSide">
					<SectionContent content="But this was resolved by simply reducing the scope to just 0-1, to require significantly less data for interesting charts." />
				</div>
			</div>

			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="Data Management" size="true" />
				<div className="contentSide">
					<SectionContent content="The React Hook useContext was used in order to help with transfering data from different components, rather than continuing to use prop drilling." />
				</div>
				<div className="contentSide">
					<SectionContent content="The useContext hook allows the passing of data to a Context.Provider which can allow the data to be accessed by all the components it is wrapped around very easily." />
				</div>
			</div>
			<SectionsTitle content="step 4" id="step4" />
			<div className="contentSide">
				<SectionContent content="Visuals" size="true" />
				<div className="contentSide">
					<SectionContent content="With the different methods of number generation, data management, and graphs worked out, finishing things up was simply preventing any inputs from breaking anything and the project functionally was complete." />
				</div>
			</div>

			<SectionsTitle content="challenges" id="challenges" />
			<div className="contentSide">
				<SectionContent content="A small challenge was figuring out the syntax for how to properly interface with the API. It wasn't clear initially how it was meant to be sent to get a response, but with some trial and error I figured the correct syntax out." />
			</div>

			<SectionsTitle content="successes" id="successes" />
			<div className="contentSide">
				<SectionContent content="The project was a successful attempt to use an API to aquire and process data." />
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
