import React from 'react'

export default function SectionContent({ content, size, decoration, color, link }) {
	let customSize
	let modifier
	let destination

	let linkTo

	let textColor = 'grey'
	if (size) {
		customSize = 'biggerContent'
	}
	if (decoration) {
		modifier = decoration
	}
	if (color) {
		textColor = color
	}
	if (link) {
		destination = 'link'
		linkTo = () => {
			window.open(link, '_blank')
		}
	}
	return (
		<div className="contentDiv ">
			<h2
				className={`${textColor}` + ` ${customSize}` + ` ${modifier}` + ` ${destination}`}
				onClick={linkTo}
			>
				{content}
			</h2>
		</div>
	)
}
