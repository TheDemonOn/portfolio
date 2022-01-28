import React from 'react'

export default function SectionContent({ content, size, decoration, color, link, closer }) {
	let customSize
	let modifier
	let destination
	let close

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
	if (closer) {
		close = 'closer'
	}
	return (
		<div className="contentDiv ">
			<h2
				className={
					`${textColor}` + ` ${customSize}` + ` ${modifier}` + ` ${destination}` + ` ${close}`
				}
				onClick={linkTo}
			>
				{content}
			</h2>
		</div>
	)
}
