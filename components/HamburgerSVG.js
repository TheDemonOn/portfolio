import React, { useState, useEffect } from 'react'

import Icons from './Icons'

export default function HamburgerSVG({ focus, selected }) {
	useEffect(() => {
		const checkWidth = () => {
			if (window.innerWidth >= 627) {
				setMobileNavMenu(<></>)
			}
		}
		window.addEventListener('resize', checkWidth)

		return () => {
			window.removeEventListener('resize', checkWidth)
		}
	}, [])

	const [active, setActive] = useState([false, false, false, false, false])

	useEffect(() => {
		switch (selected) {
			case 'home':
				setActive([true, false, false, false, false])
				break
			case 'wordGenerator':
				setActive([false, true, false, false, false])
				break
			case 'autojack':
				setActive([false, false, true, false, false])
				break
			case 'randomTest':
				setActive([false, false, false, true, false])
				break
			case 'portfolio':
				setActive([false, false, false, false, true])
				break
		}
	}, [selected])

	const [mobileNavMenu, setMobileNavMenu] = useState(<></>)

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
		// let header = document.getElementsByTagName('header')[0]
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
						<div
							className="sideNavSection"
							id="homeTab"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="homeTab" big={true} active={active[0]} />
							<p class="sideNavText">home</p>
						</div>
						<div
							className="sideNavSection"
							id="wordGeneratorTab"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="wordGeneratorTab" id="wordGenerator" big={true} active={active[1]} />
							<p class="sideNavText">proj0_word_generator</p>
						</div>
						<div
							className="sideNavSection"
							id="autojackTab"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="autojackTab" id="autojack" big={true} active={active[2]} />
							<p class="sideNavText">proj1_autojack</p>
						</div>
						<div
							className="sideNavSection"
							id="randomTestTab"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="randomTestTab" id="randomTest" big={true} active={active[3]} />
							<p class="sideNavText">proj2_random_test</p>
						</div>
						<div
							className="sideNavSection"
							id="portfolioTab"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="portfolioTab" id="portfolio" big={true} active={active[4]} />
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
