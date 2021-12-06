import React, { useState, useEffect } from 'react'
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
}) {
	useEffect(() => {
		if (typeof idWithoutTab !== 'undefined') {
			if (selectedTab === idWithoutTab) {
				setActive(1)
			}
			if (selectedTab !== idWithoutTab) {
				setActive(0)
			}
		}
	}, [selectedTab])
	// Each tab will use its own position in the headerTabs array to determine where it should be placed
	const [status, setStatus] = useState(0)
	const [active, setActive] = useState(1)
	// 191.9
	let positioning
	let distance = 270 + position * 202.3
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
	const colorCheck = (e) => {
		console.log('colorCheck ' + grabTabExistence)
		if (!grabTabExistence) {
			if (typeof e.target.attributes.style !== 'undefined') {
				let regex = / background-color: .*/
				let altRegex = /background-color: .*/
				let newInlineStyle = e.currentTarget.firstChild.attributes.style.value
				let originalInlineStyle = newInlineStyle.replace(regex, '')
				let newestStyle = originalInlineStyle.replace(altRegex, '')
				e.target.attributes.style.value = newestStyle
			}
		}
	}

	let scrollTop
	let scrollLeft

	const tabScrollLock = () => {
		console.log(headerTabs)
		if (typeof headerTabs !== 'undefined') {
			let maxWidth = document.documentElement.clientWidth - 200
			let last = document.getElementById(headerTabs[headerTabs.length - 1])
			if (last) {
				let value1 = last.attributes.style.value
				let regex1 = /left: /
				let value2 = value1.replace(regex1, '')
				let regex2 = /px;/
				let value3 = value2.replace(regex2, '')
				console.log(value3)
				if (maxWidth < value3) {
					console.log('scroll')
					window.scrollTo(scrollLeft, scrollTop)
					console.log(document.documentElement.style)
					document.documentElement.style.overflow = 'hidden'
				} else {
					console.log(false)
				}
			}
		}
	}

	const tabScrollCheck = () => {
		console.log('over')
		scrollTop = document.documentElement.scrollTop
		scrollLeft = document.documentElement.scrollLeft
		document.onscroll = tabScrollLock
	}
	const tabScrollExit = () => {
		console.log('leave')
		document.onscroll = null
		document.documentElement.style.overflow = ''
	}

	return (
		<div
			className={id}
			onMouseEnter={reveal}
			onMouseOver={colorCheck}
			onMouseEnter={tabScrollCheck}
			onMouseLeave={(e) => {
				hide(e)
				tabScrollExit()
			}}
		>
			<div className="focusedTab" style={positioning} id={id} onMouseDown={focus}>
				<Icons iconName={id} big={true} positioning={positioning} active={active} />
				<p className="tabContent">{content}</p>
			</div>
			<ActiveNoHover
				positioning={positioning}
				destroy={destroy}
				id={id}
				active={active}
				status={status}
				grabTabExistence={grabTabExistence}
			/>
		</div>
	)
}
