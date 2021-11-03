import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Portfolio() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="This site!" size="true" />
			<SectionContent content="Summary goes here." />
		</div>
	)
}
