import React from 'react'

export default function SectionContent({ content, size, decoration, color, link, closer }) {
	let customSize
	let modifier
	let destination
	let close
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
	if (closer) {
		close = 'closer'
	}

	if (link) {
		// if there is a link
		return (
			<div className="contentDiv ">
				<a
					className={
						'aLink' +
						` ${textColor}` +
						` ${customSize}` +
						` ${modifier}` +
						` ${destination}` +
						` ${close}`
					}
					href={link}
					target="_blank"
				>
					{content}
				</a>
			</div>
		)
	} else {
		// if there is no link
		return (
			<div className="contentDiv ">
				<h2 className={`${textColor}` + ` ${customSize}` + ` ${modifier}` + ` ${close}`}>
					{content}
				</h2>
			</div>
		)
	}
}
