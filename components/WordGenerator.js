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
		<main className="inline tabContentPosition">
			<SectionsTitle content="rhyming word generator" size="true" id="overview" />
			<section>
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
						link="https://wordgenerator.netlify.app/"
					/>
				</div>
			</section>
			<SectionsTitle content="step 1" id="step1" />
			<section>
				<SectionContent content="Learn how to Rhyme" size="true" />
				<div className="contentSide">
					<SectionContent content="Before writing any code the first step was learning how to assemble words." />
				</div>
				<div className="contentSide">
					<SectionContent content="I knew I would need a list of all the smallest units of sounds: graphemes, to mix and match." />
				</div>
			</section>
			<SectionsTitle content="step 2" id="step2" />
			<section>
				<SectionContent content="Word Generation" size="true" />
				<div className="contentSide">
					<SectionContent content="I made a list of graphemes into groups that rhymed with each other, so if I needed to pick a random grapheme that rhymes, I just had to choose another from that rhyming group." />
				</div>
				<Picture
					src="rhymeKey.jpg"
					alt="An image of the code described."
					className="inBetweenImage"
				/>
				<div className="contentSide">
					<SectionContent content="So the generated words would be random graphemes spliced together, with the last grapheme's rhyming group kept track of to rhyme with the last word in the next line." />
				</div>
			</section>
			<SectionsTitle content="step 3" id="step3" />
			<section>
				<SectionContent content="User Interface" size="true" />
				<div className="contentSide">
					<SectionContent content="Next was working on the actual displaying of the lines." />
				</div>
				<div className="contentSide">
					<SectionContent content="Once the UI was mostly set up to customize and generate lines of rhyming sentences, I began refactoring code to have less functions and start to clean up." />
				</div>
				<div className="contentSide">
					<SectionContent content="After refactoring, more UI features were added such as: a way to delete lines, modify lines, undo delete, and a section for youtube links to play in the page." />
				</div>
				<Picture
					srcset="earlyRhymeSite360.jpg 360w, earlyRhymeSite1162.jpg 1162w, earlyRhymeSite1777.jpg 1777w, earlyRhymeSite1920.jpg 1920w"
					sizes="(max-width: 360px) 360px, (max-width: 1162px) 1162px, (max-width: 1777px) 1777px, 1920px"
					src="earlyRhymeSite1920.jpg"
					alt="An early image of the site, before its redesign."
					className="largerImage"
				/>
			</section>
			<SectionsTitle content="step 4" id="step4" />
			<section>
				<SectionContent content="Design & Responsitivity" size="true" />
				<div className="contentSide">
					<SectionContent content="With most features implemented and complete, the only thing remaining was a proper design for the site, as well as responsitivity." />
				</div>
				<Picture
					srcset="rhymeDesign360.jpg 360w, rhymeDesign836.jpg 836w, rhymeDesign1179.jpg 1179w, rhymeDesign1536.jpg 1536w"
					sizes="(max-width: 360px) 360px, (max-width: 836px) 836px, (max-width: 1179px) 1179px, 1536px"
					src="rhymeDesign1536.jpg"
					alt="An image of the site after the redesign."
					className="largerImage"
				/>
			</section>
			<SectionsTitle content="challenges" id="challenges" />
			<section>
				<div className="contentSide">
					<SectionContent content="There were many basic problems I enountered, related to how to send & receive data, as well as inserting and removing elements to the DOM. The technical problems ultimately were not significantly challenging and helped me develop my skills." />
				</div>

				<div className="contentSide">
					<SectionContent content="Far more challenging than the technical problems was the problem of managing a codebase that was larger than 1000 lines, in one unorganized file." />
				</div>
				<div className="contentSide">
					<SectionContent content="This proved to be the most frustrating aspect of the project. Not partitioning the Javascript into some smaller components was certainly the largest failure in hindsight, due to how much harder it was to do anything." />
				</div>
			</section>
			<SectionsTitle content="successes" id="successes" />
			<section>
				<div className="contentSide">
					<SectionContent content="Before I had many of the functions and DOM manipulations of Javascript memorized, I developed a successful workflow using the MDN documentation as a large toolbox." />
				</div>
				<div className="contentSide">
					<SectionContent content="One of larger successes I had was being able to take a design given to me by a graphic designer and being able to realize those plans into a fully functional site." />
				</div>
			</section>
		</main>
	)
}
