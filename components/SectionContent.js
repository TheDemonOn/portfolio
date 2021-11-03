import React from 'react'

export default function SectionContent({ content, size }) {
	let customSize
	if (size) {
		customSize = 'biggerContent'
	}
	return (
		<>
			<h2 className={'grey ' + ` ${customSize}`}>{content}</h2>
		</>
	)
}
