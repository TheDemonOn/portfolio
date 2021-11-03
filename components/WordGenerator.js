import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function WordGenerator() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="rhyming word generator" size="true" />
			<SectionContent content="Summary goes here." />
		</div>
	)
}
