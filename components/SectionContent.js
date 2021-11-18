import React from 'react'

export default function SectionContent({ content, size }) {
	let customSize
	if (size) {
		customSize = 'biggerContent'
	}
	return (
		<div className="contentDiv ">
			<h2 className={'grey ' + ` ${customSize}`}>{content}</h2>
		</div>
	)
}
