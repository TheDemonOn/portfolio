import React from 'react'
import SectionsTitle from './SectionsTitle'
import SectionContent from './SectionContent'

export default function Autojack() {
	return (
		<div className="inline tabContentPosition">
			<SectionsTitle content="autojack" size="true" />
			<SectionContent content="Summary goes here." />
		</div>
	)
}
