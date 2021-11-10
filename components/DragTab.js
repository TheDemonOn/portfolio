import React from 'react'

export default function DragTab({ content, exist = 0 }) {
	let potentialId = 'offScreen'
	if (exist !== 0) {
		potentialId = ''
	}
	return (
		<div id="grabbedTab">
			<div className="grabbedFocusedTab" id={potentialId}>
				<p className="tabContent">{content}</p>
			</div>
			<button className="grabbedTabCloseButton" id={potentialId}></button>
		</div>
	)
}
