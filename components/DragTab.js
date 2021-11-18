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
			<svg
				id={potentialId}
				className="grabbedTabCloseButton"
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
			{/* <button className="grabbedTabCloseButton" id={potentialId}></button> */}
		</div>
	)
}
