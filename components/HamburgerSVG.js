import React, { useState, useEffect } from 'react'

import Icons from './Icons'

export default function HamburgerSVG() {
	const [mobileNavMenu, setMobileNavMenu] = useState()

	const menuClose = () => {
		let mobileSideNav = document.getElementsByClassName('mobileSideNav')[0]
		let darkFilter = document.getElementsByClassName('darkFilter')[0]
		mobileSideNav.className = mobileSideNav.className + ' exitNav'
		darkFilter.className = darkFilter.className + ' exitDark'
		setTimeout(() => {
			setMobileNavMenu(<></>)
		}, 200)
	}

	const menuOpen = () => {
		setMobileNavMenu(
			<>
				<div class="mobileSideNav">
					{' '}
					<svg
						className="hamburgerNew"
						width="1.2em"
						height="1.2em"
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						x="0"
						y="0"
						viewBox="0 0 19.315 17"
						onMouseDown={menuClose}
					>
						<g
							id="Hamburger_Menu_Icon"
							data-name="Hamburger Menu Icon"
							transform="translate(-363.191 -27.5)"
						>
							<path
								id="Path_23"
								data-name="Path 23"
								d="M2323.506,1337.632h-19.315"
								transform="translate(-1941 -1309.132)"
								fill="none"
								stroke="#fff"
								stroke-width="2"
							/>
							<path
								id="Path_24"
								data-name="Path 24"
								d="M2323.506,1337.632h-19.315"
								transform="translate(-1941 -1301.632)"
								fill="none"
								stroke="#fff"
								stroke-width="2"
							/>
							<path
								id="Path_25"
								data-name="Path 25"
								d="M2323.506,1337.632h-19.315"
								transform="translate(-1941 -1294.132)"
								fill="none"
								stroke="#fff"
								stroke-width="2"
							/>
						</g>
					</svg>
					<h3 id="codeAntonioNew">CODE ANTONIO</h3>
					<div className="sideNavContent">
						<div className="sideNavSection">
							<Icons iconName="homeTab" big={true} />
							<p class="sideNavText">home</p>
						</div>
						<div className="sideNavSection">
							<Icons iconName="wordGeneratorTab" big={true} />
							<p class="sideNavText">proj0_word_generator</p>
						</div>
						<div className="sideNavSection">
							<Icons iconName="autojackTab" big={true} />
							<p class="sideNavText">proj1_autojack</p>
						</div>
						<div className="sideNavSection">
							<Icons iconName="randomTestTab" big={true} />
							<p class="sideNavText">proj2_random_test</p>
						</div>
						<div className="sideNavSection">
							<Icons iconName="portfolioTab" big={true} />
							<p class="sideNavText">proj3_portfolio</p>
						</div>
					</div>
				</div>
				<div class="darkFilter" onMouseDown={menuClose}></div>
			</>
		)
	}

	return (
		<>
			{mobileNavMenu}
			{/* <div id="mobileSideNav"></div> */}
			<svg
				className="hamburger"
				width="1.2em"
				height="1.2em"
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0"
				y="0"
				viewBox="0 0 19.315 17"
				onMouseDown={menuOpen}
			>
				<g
					id="Hamburger_Menu_Icon"
					data-name="Hamburger Menu Icon"
					transform="translate(-363.191 -27.5)"
				>
					<path
						id="Path_23"
						data-name="Path 23"
						d="M2323.506,1337.632h-19.315"
						transform="translate(-1941 -1309.132)"
						fill="none"
						stroke="#fff"
						stroke-width="2"
					/>
					<path
						id="Path_24"
						data-name="Path 24"
						d="M2323.506,1337.632h-19.315"
						transform="translate(-1941 -1301.632)"
						fill="none"
						stroke="#fff"
						stroke-width="2"
					/>
					<path
						id="Path_25"
						data-name="Path 25"
						d="M2323.506,1337.632h-19.315"
						transform="translate(-1941 -1294.132)"
						fill="none"
						stroke="#fff"
						stroke-width="2"
					/>
				</g>
			</svg>
		</>
	)
}
