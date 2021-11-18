import React, { useState, useEffect } from 'react'
import ActiveNoHover from './ActiveNoHover'

export default function Tab({
	content,
	id,
	headerTabs,
	focus,
	destroy,
	position,
	selectedTab,
	grabTabExistence,
}) {
	// Each tab will use its own position in the headerTabs array to determine where it should be placed
	const [status, setStatus] = useState(0)
	const [active, setActive] = useState(1)

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

	const reveal = (e) => {
		setStatus(1)
		if (grabTabExistence) {
			// change the background color
			if (!active) {
				console.log(e)
				if (typeof e.target.attributes.style !== 'undefined') {
					e.target.attributes.style.value =
						e.target.attributes.style.value + ' background-color: #5C5C77;'
				}
			}
		}
	}
	const hide = (e) => {
		setStatus(0)
		// console.log('Does this hide?!', e.currentTarget.firstChild.attributes.style)
		if (typeof e.target.attributes.style !== 'undefined') {
			let regex = / background-color: .*/g
			let newInlineStyle = e.currentTarget.firstChild.attributes.style.value
			let originalInlineStyle = newInlineStyle.replace(regex, '')
			console.log(newInlineStyle, originalInlineStyle)
			e.target.attributes.style.value = originalInlineStyle
		}
	}
	const colorCheck = (e) => {
		if (!grabTabExistence) {
			if (typeof e.target.attributes.style !== 'undefined') {
				let regex = / background-color: .*/g
				let newInlineStyle = e.currentTarget.firstChild.attributes.style.value
				let originalInlineStyle = newInlineStyle.replace(regex, '')
				console.log(newInlineStyle, originalInlineStyle)
				e.target.attributes.style.value = originalInlineStyle
			}
		}
	}

	return (
		<div className={id} onMouseEnter={reveal} onMouseOver={colorCheck} onMouseLeave={hide}>
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
