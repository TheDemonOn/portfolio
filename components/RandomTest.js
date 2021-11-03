import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function RandomTest() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="random test" size="true" />
			<SectionContent content="Summary goes here." />
		</div>
	)
}
