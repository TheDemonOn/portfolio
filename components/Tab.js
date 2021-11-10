import React, { useState, useEffect } from 'react'

export default function Tab({ content, id, headerTabs, focus, destroy, position }) {
	// Each tab will use its own position in the headerTabs array to determine where it should be placed
	let positioning
	let distance = 270 + position * 191.9
	positioning = {
		left: distance,
	}

	if (position < 0) {
		return null
	}

	return (
		<div className={id}>
			<div className="focusedTab" style={positioning} id={id} onMouseDown={focus}>
				<p className="tabContent">{content}</p>
			</div>
			<button className="tabCloseButton" style={positioning} onClick={destroy}></button>
		</div>
	)
}
