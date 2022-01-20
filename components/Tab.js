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
	// 191.9
	let positioning
	let buttonPosition
	let initialOffset = offset
	let altInitialOffset = offset
	let inBetween = 202.3
	let altInBetween = 202.3

	switch (spacing) {
		case 0:
			// Default do nothing
			if (disable !== 1) {
				setDisable(1)
			}
			break
		case 1:
			// first media query
			inBetween = 183
			altInitialOffset = 250
			altInBetween = 182.1
			if (disable !== 1) {
				setDisable(1)
			}
			break
		case 2:
			// second media query
			// Disables close Icon for nonActive tabs
			inBetween = 164
			altInitialOffset = 230
			altInBetween = 163
			if (disable !== 0) {
				setDisable(0)
			}
			break
		case 3:
			inBetween = 164
			altInitialOffset = 160.5
			altInBetween = 163
			if (disable !== 0) {
				setDisable(0)
			}
			break
		case 4:
			inBetween = 145
			altInitialOffset = 145
			altInBetween = 146
			if (disable !== 0) {
				setDisable(0)
			}
			break

		case 6:
			inBetween = 69
			altInitialOffset = 10000
			altInBetween = 144
			if (disable !== 0) {
				setDisable(0)
			}
			break
	}

	let distance = initialOffset + position * inBetween
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
					console.log(style)
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

	// let scrollTop
	// let scrollLeft

	// const tabScrollLock = () => {
	// 	console.log(headerTabs)
	// 	if (typeof headerTabs !== 'undefined') {
	// 		let maxWidth = document.documentElement.clientWidth - 200
	// 		let last = document.getElementById(headerTabs[headerTabs.length - 1])
	// 		if (last) {
	// 			let value1 = last.attributes.style.value
	// 			let regex1 = /left: /
	// 			let value2 = value1.replace(regex1, '')
	// 			let regex2 = /px;/
	// 			let value3 = value2.replace(regex2, '')
	// 			console.log(value3)
	// 			if (maxWidth < value3) {
	// 				console.log('scroll')
	// 				window.scrollTo(scrollLeft, scrollTop)
	// 				// console.log(document.documentElement.style)
	// 				document.documentElement.style.overflow = 'hidden'
	// 			} else {
	// 				console.log(false)
	// 			}
	// 		}
	// 	}
	// }

	// const tabScrollCheck = () => {
	// 	console.log('over')
	// 	scrollTop = document.documentElement.scrollTop
	// 	scrollLeft = document.documentElement.scrollLeft
	// 	document.onscroll = tabScrollLock
	// }
	// const tabScrollExit = () => {
	// 	console.log('leave')
	// 	document.onscroll = null
	// 	document.documentElement.style.overflow = ''
	// }

	return (
		<div
			className={id}
			onMouseEnter={(e) => {
				reveal(e)
				// tabScrollCheck(e)
			}}
			onMouseLeave={(e) => {
				hide(e)
				// tabScrollExit()
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
