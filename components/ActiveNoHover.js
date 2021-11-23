import React, { useState } from 'react'

export default function ActiveNoHover({
	active,
	positioning,
	destroy,
	id,
	status,
	grabTabExistence,
}) {
	// Create a function that uses a global handler to say: when this element is moused over, change the state of hover from 0 to 1,
	// and when it mouses out set the 1 to 0
	if (active) {
	} else {
		if (status === 0 || grabTabExistence) {
			return null
		}
	}

	const [hover, setHover] = useState(0)

	const startHover = () => {
		setHover(1)
	}
	const endHover = () => {
		setHover(0)
	}

	let output
	if (active && hover) {
		output = (
			<svg
				className="tabCloseButtonAlt"
				style={positioning}
				onClick={destroy}
				data-tab={id}
				onMouseEnter={startHover}
				onMouseLeave={endHover}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 30 30"
			>
				<g id="Group_1" data-name="Group 1" transform="translate(-549 -21)">
					<rect
						id="Rectangle_21"
						data-name="Rectangle 21"
						width="30"
						height="30"
						rx="6"
						transform="translate(549 21)"
						fill="#3a3950"
					/>
					<path
						id="Path_19"
						data-name="Path 19"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(524.025 593.845) rotate(-90)"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
					/>
					<path
						id="Path_20"
						data-name="Path 20"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(6.058 -4)"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
					/>
				</g>
			</svg>
		)
	} else if (active) {
		output = (
			<svg
				className="tabCloseButton"
				style={positioning}
				onClick={destroy}
				data-tab={id}
				onMouseEnter={startHover}
				onMouseLeave={endHover}
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="16.027"
				viewBox="0 0 16.027 16.027"
			>
				<g id="Group_1" data-name="Group 1" transform="translate(-555.95 -27.925)">
					<path
						id="Path_19"
						data-name="Path 19"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(524.025 593.845) rotate(-90)"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
					/>
					<path
						id="Path_20"
						data-name="Path 20"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(6.058 -4)"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
					/>
				</g>
			</svg>
		)
	} else if (hover) {
		output = (
			<svg
				className="tabCloseButtonAlt"
				style={positioning}
				onClick={destroy}
				data-tab={id}
				onMouseEnter={startHover}
				onMouseLeave={endHover}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 30 30"
			>
				<g id="Group_3" data-name="Group 3" transform="translate(-549 -21)">
					<rect
						id="Rectangle_21"
						data-name="Rectangle 21"
						width="30"
						height="30"
						rx="6"
						transform="translate(549 21)"
						fill="#47465D"
					/>
					<path
						id="Path_19"
						data-name="Path 19"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(524.025 593.845) rotate(-90)"
						fill="none"
						stroke="#d5d5d9"
						strokeWidth="2"
					/>
					<path
						id="Path_20"
						data-name="Path 20"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(6.058 -4)"
						fill="none"
						stroke="#d5d5d9"
						strokeWidth="2"
					/>
				</g>
			</svg>
		)
	} else {
		output = (
			<svg
				className="tabCloseButton"
				style={positioning}
				onClick={destroy}
				data-tab={id}
				onMouseEnter={startHover}
				onMouseLeave={endHover}
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="16.027"
				viewBox="0 0 16.027 16.027"
			>
				<g id="Group_3" data-name="Group 3" transform="translate(-555.95 -27.925)">
					<path
						id="Path_19"
						data-name="Path 19"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(524.025 593.845) rotate(-90)"
						fill="none"
						stroke="#d5d5d9"
						strokeWidth="2"
					/>
					<path
						id="Path_20"
						data-name="Path 20"
						d="M550.6,32.632l14.613,14.613"
						transform="translate(6.058 -4)"
						fill="none"
						stroke="#d5d5d9"
						strokeWidth="2"
					/>
				</g>
			</svg>
		)
	}
	return <>{output}</>
}
