import React, { useState, useEffect, useLayoutEffect } from 'react'
import ActiveNoHover from './ActiveNoHover'
import Icons from './Icons'

export default function Tab({
	content,
	id,
	headerTabs,
	focus,
	destroy,
	position,
	selectedTab,
	grabTabExistence,
	activeClass,
	dimensions,
	offset,
	spacing,
}) {
	useEffect(() => {
		if (activeClass === 'yellow') {
			setActive(1)
		} else {
			setActive(0)
		}
	}, [activeClass])
	// Each tab will use its own position in the headerTabs array to determine where it should be placed
	const [status, setStatus] = useState(0)
	const [active, setActive] = useState(1)
	const [disable, setDisable] = useState(1)
	let positioning
	let buttonPosition
	let initialOffset = offset
	let altInitialOffset = offset
	let inBetweenTabs = 202.3
	let altInBetween = 202.3
	switch (spacing) {
		// Set an alt condition based on how many tabs are currently displayed to line up with the amount of space remaining
		case 0:
			// Default do nothing
			if (disable !== 1) {
				setDisable(1)
			}
			break
		case 1:
			// first media query
			inBetweenTabs = 183
			altInitialOffset = 250
			altInBetween = 182.1
			if (disable !== 1) {
				setDisable(1)
			}
			break
		case 2:
			// second media query
			// Disables close Icon for nonActive tabs
			inBetweenTabs = 164
			altInitialOffset = 232
			altInBetween = 163
			if (disable !== 1) {
				setDisable(1)
			}
			break
		case 3:
			inBetweenTabs = 164
			altInitialOffset = 168
			altInBetween = 163.5
			if (disable !== 1) {
				setDisable(1)
			}
			break
		case 4:
			inBetweenTabs = 145
			altInitialOffset = 149.5
			altInBetween = 145
			if (disable !== 0) {
				setDisable(0)
			}
			break

		case 5:
			inBetweenTabs = 99.1
			altInitialOffset = 100
			altInBetween = 99
			if (disable !== 0) {
				setDisable(0)
			}
			break

		case 6:
			inBetweenTabs = 68.8
			altInitialOffset = 54 // 74
			altInBetween = 69.0
			if (disable !== 0) {
				setDisable(0)
			}
			break
		case 7:
			initialOffset = 170
			inBetweenTabs = 69.6
			altInitialOffset = 23 // 74
			altInBetween = 69.0
			if (disable !== 0) {
				setDisable(0)
			}
			break
		case 8:
			initialOffset = 0
			inBetweenTabs = 69.6
			altInitialOffset = -146 // 74
			altInBetween = 69.0
			if (disable !== 0) {
				setDisable(0)
			}
			break
		case 9:
			initialOffset = 0
			inBetweenTabs = 48.8
			altInitialOffset = -158 // 74
			altInBetween = 48.3
			if (disable !== 0) {
				setDisable(0)
			}
			break
	}

	let distance = initialOffset + position * inBetweenTabs
	let altDistance = altInitialOffset + position * altInBetween

	positioning = {
		left: distance,
	}
	if (position < 0) {
		return null
	}
	buttonPosition = {
		left: altDistance,
	}

	const reveal = (e) => {
		// console.log('Reveal function')
		setStatus(1)
		if (grabTabExistence) {
			// change the background color
			if (!active) {
				if (typeof e.target.attributes.style !== 'undefined') {
					let styleString = e.target.attributes.style.value
					let style = styleString.slice(styleString.length - 1)
					// console.log(style)
					if (style === ';') {
						e.target.attributes.style.value =
							e.target.attributes.style.value + ' background-color: #5C5C77;'
					} else {
						e.target.attributes.style.value =
							e.target.attributes.style.value + ';background-color: #5C5C77;'
					}
				}
			}
		}
	}
	const hide = (e) => {
		setStatus(0)
		if (typeof e.target.attributes.style !== 'undefined') {
			let regex = / background-color: .*/
			let altRegex = /background-color: .*/
			let newInlineStyle = e.currentTarget.firstChild.attributes.style.value
			let originalInlineStyle = newInlineStyle.replace(regex, '')
			let newestStyle = originalInlineStyle.replace(altRegex, '')
			e.target.attributes.style.value = newestStyle
		}
	}

	const colorReset = (e) => {
		// console.log(e)
		let regex = / background-color: .*/
		let altRegex = /background-color: .*/
		if (
			typeof e.target.attributes.style !== 'undefined' &&
			e.target.attributes.class.value !== 'tabIcon'
		) {
			let newInlineStyle = e.currentTarget.firstChild.attributes.style.value
			let originalInlineStyle = newInlineStyle.replace(regex, '')
			let newestStyle = originalInlineStyle.replace(altRegex, '')
			e.target.attributes.style.value = newestStyle
		} else if (
			typeof e.target.ownerSVGElement !== 'undefined' &&
			e.target.ownerSVGElement !== null
		) {
			if (typeof e.target.ownerSVGElement.parentNode.attributes.style !== 'undefined') {
				let newInlineStyle = e.target.ownerSVGElement.parentNode.attributes.style.value
				let originalInlineStyle = newInlineStyle.replace(regex, '')
				let newestStyle = originalInlineStyle.replace(altRegex, '')
				e.target.ownerSVGElement.parentNode.attributes.style.value = newestStyle
			}
		} else {
			let newInlineStyle = e.target.parentNode.attributes.style.value
			let originalInlineStyle = newInlineStyle.replace(regex, '')
			let newestStyle = originalInlineStyle.replace(altRegex, '')
			e.target.parentNode.attributes.style.value = newestStyle
		}
	}

	return (
		<div
			className={id}
			onMouseEnter={(e) => {
				reveal(e)
			}}
			onMouseLeave={(e) => {
				hide(e)
			}}
		>
			<div
				className="focusedTab"
				style={positioning}
				id={id}
				onMouseDown={focus}
				onMouseUp={colorReset}
			>
				<Icons iconName={id} big={true} positioning={positioning} active={active} />
				<p className="tabContent">{content}</p>
			</div>
			<ActiveNoHover
				positioning={buttonPosition}
				destroy={destroy}
				id={id}
				active={active}
				status={status}
				grabTabExistence={grabTabExistence}
				disable={disable}
			/>
		</div>
	)
}
