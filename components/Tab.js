import React, { useState, useEffect } from 'react'
import ActiveNoHover from './ActiveNoHover'

export default function Tab({ content, id, headerTabs, focus, destroy, position, selectedTab }) {
	// Each tab will use its own position in the headerTabs array to determine where it should be placed
	const [status, setStatus] = useState(0)
	const reveal = () => {
		setStatus(1)
	}
	const hide = () => {
		setStatus(0)
	}

	useEffect(() => {
		if (typeof idWithoutTab !== 'undefined') {
			if (selectedTab === idWithoutTab) {
				setActive(1)
			}
			if (selectedTab !== idWithoutTab) {
				setActive(0)
			}
		}
		console.log(active)
	}, [selectedTab])

	let positioning
	const [active, setActive] = useState(1)
	const [hover, setHover] = useState(0)
	let distance = 270 + position * 191.9
	positioning = {
		left: distance,
	}
	if (position < 0) {
		return null
	}

	let idWithTab = id
	let regex = /Tab/
	let idWithoutTab = idWithTab.replace(regex, '')

	return (
		<div className={id} onMouseEnter={reveal} onMouseLeave={hide}>
			<div className="focusedTab" style={positioning} id={id} onMouseDown={focus}>
				<p className="tabContent">{content}</p>
			</div>
			<ActiveNoHover
				positioning={positioning}
				destroy={destroy}
				id={id}
				active={active}
				status={status}
			/>
		</div>
	)
}
