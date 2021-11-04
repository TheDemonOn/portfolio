import React from 'react'

export default function SectionsTitle({ content, size, id }) {
	let customSize
	if (size) {
		customSize = 'biggerTitle'
	}
	return (
		<div id={id}>
			<h1 className={'yellow inline' + ` ${customSize}`}>/*</h1>
			<h1 className={'white inline pad' + ` ${customSize}`}>{content}</h1>
			<h1 className={'yellow inline' + ` ${customSize}`}>*/</h1>
		</div>
	)
}
