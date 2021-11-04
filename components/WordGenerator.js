import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function WordGenerator() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="word generator overview" size="true" id="overview" />
			<SectionContent content="Summary goes here." />
			<SectionsTitle content="step1" id="step1" />
			<SectionsTitle content="step2" id="step2" />
			<SectionsTitle content="step3" id="step3" />
			<SectionsTitle content="challenges i had" id="challenges" />
			<SectionsTitle content="my successes" id="successes" />
			<SectionsTitle content="final screenshots" id="screenshots" />
		</div>
	)
}
