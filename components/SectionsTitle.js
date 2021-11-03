import React from 'react'

export default function SectionsTitle({ content, size }) {
	let customSize
	if (size) {
		customSize = 'biggerTitle'
	}
	return (
		<div>
			<h1 className={'yellow inline' + ` ${customSize}`}>/*</h1>
			<h1 className={'white inline pad' + ` ${customSize}`}>{content}</h1>
			<h1 className={'yellow inline' + ` ${customSize}`}>*/</h1>
		</div>
	)
}
