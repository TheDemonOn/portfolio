import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function WordGenerator() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="word generator overview" size="true" id="overview" />
			<SectionContent content="Summary goes here." />
			<SectionsTitle content="step1" id="step1" />
			<SectionContent content="Lorem ipsum." />
			<SectionsTitle content="step2" id="step2" />
			<SectionContent content="Lorem ipsum." />
			<SectionsTitle content="step3" id="step3" />
			<SectionContent content="Lorem ipsum." />
			<SectionsTitle content="challenges i had" id="challenges" />
			<SectionContent content="Lorem ipsum." />
			<SectionsTitle content="my successes" id="successes" />
			<SectionContent content="Lorem ipsum." />
			<SectionsTitle content="final screenshots" id="screenshots" />
			<SectionContent content="Lorem ipsum." />
		</div>
	)
}
