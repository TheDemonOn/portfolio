import React, { useState, useEffect } from 'react'

export default function Tab({ content, id, headerTabs }) {
	let positioning
	console.log(headerTabs)
	if (typeof headerTabs !== 'undefined') {
		let distance = 270 + headerTabs.length * 191.9
		console.log(distance)
		positioning = {
			left: distance,
		}
	}

	return (
		<div className="tab" style={positioning} id={id}>
			{content}
		</div>
	)
}
