import React from 'react'

export default function SectionsTitle({ content, size, id }) {
	let customSize
	if (size) {
		customSize = 'biggerTitle'
	}
	return (
		<div id={id} className="titleSpace">
			<h1 className={'yellow' + ` ${customSize}`} aria-hidden="true">
				/*
			</h1>
			<h1 className={'white pad' + ` ${customSize}`}>{content}</h1>
			<h1 className={'yellow' + ` ${customSize}`} aria-hidden="true">
				*/
			</h1>
		</div>
	)
}
