import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function WordGenerator() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="word generator overview" size="true" id="overview" />
			<div className="contentSide">
				<SectionContent
					content="The first project I ever started was a random word generator that could produce rhymes."
					size="true"
				/>
				<div className="contentSide">
					<SectionContent content="This was my first project I attempted after feeling confident enough in my coding skills. I felt that this project wouldn't be too challenging to develop, and should be a good first start at using javascript to create something complex." />
				</div>
			</div>

			<SectionsTitle content="step 1" id="step1" />
			<div className="contentSide">
				<SectionContent content="The first step for creating this project was first learning about how rhymes were actually constructed in English and how they rhymed." />
			</div>
			<div className="contentSide">
				<SectionContent content="After understanding the smallest functional unit of a word, called a 'grapheme'. I set out to use a very rudimentary system of random word construction involving creating groups of graphemes that rhymed." />
			</div>
			<div className="contentSide">
				<SectionContent content="I created two seperate catagories of graphemes: Vowels & Consonants, and filled them with further subcategories for beginning, middle and end. " />
			</div>
			<div className="contentSide">
				<SectionContent content="The Idea is that I would create words by using random choices from the Vowels or Consonants, in their respective position of either beginning, middle, or end." />
			</div>
			<div className="contentSide">
				<SectionContent content="But to create the rhyme I would need the final grapheme (or graphemes) to be similar sounding in order for the word to rhyme." />
			</div>
			<div className="contentSide">
				<SectionContent content="To facilitate this, I created a rhyming guide for the graphemes in the end catagory." />
			</div>
			<div className="contentSide">
				<SectionContent content="To facilitate this, I created a rhyming group for the graphemes in the end catagory. Only the end needed a rhyming guide because only the last grapheme is necessary to coordinate for a rhyme." />
			</div>
			<SectionsTitle content="step 2" id="step2" />
			<div className="contentSide">
				<SectionContent content="With the system for generating words, and ensuring that they would rhyme figured out, the next step would be figuring out how to implement the actual construction of groups of words." />
			</div>
			<div className="contentSide">
				<SectionContent content="I knew that options for different combinations of rhyme structure such as 1122 vs 1212 and choosing from a consonant grapheme vs a vowel grapheme was going to eventually added so I created functions for specific orientations of graphemes such as: VCVC." />
			</div>
			<div className="contentSide">
				<SectionContent content="This ended up being a very naive approach to simply hardcode a function for a specific configuration and I would eventually end up with a more robust system which could accommodate any amount of orientations." />
			</div>
			<div className="contentSide">
				<SectionContent content="But for now having a function for a specific orientation was fine for testing and learning. " />
			</div>
			<div className="contentSide">
				<SectionContent content="The actual method for creating a word was to randomly select graphemes from the appropriate list and combine them together." />
			</div>
			<div className="contentSide">
				<SectionContent content="For example. A four grapheme word would pick from: [beginning, middle, middle, end], while a two grapheme word would be: [beginning, end], and even simpler a single grapheme word would just be: [end]" />
			</div>
			<div className="contentSide">
				<SectionContent content="To create the rhyme at least two lines have to be generated, at minimum one word. Every word is generated with the [beginning, middle, end] formula, but the last word in a line is kept track of." />
			</div>
			<div className="contentSide">
				<SectionContent content="First the rhyming word is generated randomly as normal. Then the index of the chosen end group is sent to the second rhyming word that is meant to rhyme and simply chooses a random grapheme using the index sent to it, and since every grapheme in that group is meant to rhyme with each other, the second rhyming word should rhyme with the first." />
			</div>
			<div className="contentSide">
				<SectionContent content="Eventually I came to understand that in order to create a rhyme with a word that ends in a consonant grapheme, I would need the preceding grapheme's vowel sound in order to be able to have it actually rhyme, since rhymes require a similar vowel sound." />
			</div>
			<div className="contentSide">
				<SectionContent content="A consequence of this is that an all Consonant word will produce words that do not rhyme most of the time, as well as being too difficult to pronounce." />
			</div>
			<SectionsTitle content="step 3" id="step3" />
			<div className="contentSide">
				<SectionContent content="At this point I had almost 2000 lines of code in a single file which controlled all the logic with word generation. Most of these were functions using different combinations of Vowels and Consonants. This wouldn't be resolved until a later refactor, but this project (and the next) taught me about the importance of proper planning and organization of code to have a more efficient workflow." />
			</div>
			<div className="contentSide">
				<SectionContent content="So after making many functions which produced rhyming words, got started on the actual displaying of the lines." />
			</div>
			<div className="contentSide">
				<SectionContent content="Once the UI was mostly set up to customize and generate lines of rhyming sentences, I began refactoring code to have less functions and start to clean up." />
			</div>
			<div className="contentSide">
				<SectionContent content="After refactoring more UI features were added such as a way to delete lines, modify lines, undo delete, and add a section to enter youtube links and have them play in the page." />
			</div>
			<SectionsTitle content="step 4" id="step4" />
			<div className="contentSide">
				<SectionContent content="With most features implemented and complete, the only thing remaining was a proper design for the site, as well as responsitivity." />
			</div>
			<div className="contentSide">
				<SectionContent content="And with that my first project was finally taken to completion." />
			</div>
			<SectionsTitle content="challenges i had" id="challenges" />
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
			<SectionsTitle content="my successes" id="successes" />
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

			<SectionsTitle content="final screenshots" id="screenshots" />
			<SectionContent content="[Pictures]" />
		</div>
	)
}
