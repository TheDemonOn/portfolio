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

	const [mobileNavMenu, setMobileNavMenu] = useState()

	const menuClose = () => {
		let mobileSideNav = document.getElementsByClassName('mobileSideNav')[0]
		let darkFilter = document.getElementsByClassName('darkFilter')[0]
		mobileSideNav.className = mobileSideNav.className + ' exitNav'
		darkFilter.className = darkFilter.className + ' exitDark'
		setTimeout(() => {
			setMobileNavMenu()
		}, 200)
	}

	const menuOpen = () => {
		// let header = document.getElementsByTagName('header')[0]
		setMobileNavMenu(
			<>
				<div className="mobileSideNav">
					<button
						id="hamburger2"
						className="hamburgerNew"
						name="nav"
						aria-expanded="true"
						aria-label="Menu"
						onClick={menuClose}
					>
						<svg
							width="1.2em"
							height="1.2em"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0"
							y="0"
							viewBox="0 0 19.315 17"
							aria-hidden="true"
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
									strokeWidth="2"
								/>
								<path
									id="Path_24"
									data-name="Path 24"
									d="M2323.506,1337.632h-19.315"
									transform="translate(-1941 -1301.632)"
									fill="none"
									stroke="#fff"
									strokeWidth="2"
								/>
								<path
									id="Path_25"
									data-name="Path 25"
									d="M2323.506,1337.632h-19.315"
									transform="translate(-1941 -1294.132)"
									fill="none"
									stroke="#fff"
									strokeWidth="2"
								/>
							</g>
						</svg>
					</button>
					<h3 id="codeAntonioNew">CODE ANTONIO</h3>
					<div className="sideNavContent">
						{/* Container for the sideNav */}
						<button
							className="sideNavSection"
							id="homeTab"
							aria-label="home"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="homeTab" big={true} active={active[0]} />
							<p className="sideNavText">home</p>
						</button>
						<button
							className="sideNavSection"
							id="wordGeneratorTab"
							aria-label="word generator"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="wordGeneratorTab" id="wordGenerator" big={true} active={active[1]} />
							<p className="sideNavText">proj0_word_generator</p>
						</button>
						<button
							className="sideNavSection"
							id="autojackTab"
							aria-label="autojack"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="autojackTab" id="autojack" big={true} active={active[2]} />
							<p className="sideNavText">proj1_autojack</p>
						</button>
						<button
							className="sideNavSection"
							id="randomTestTab"
							aria-label="random test"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="randomTestTab" id="randomTest" big={true} active={active[3]} />
							<p className="sideNavText">proj2_random_test</p>
						</button>
						<button
							className="sideNavSection"
							id="portfolioTab"
							aria-label="portfolio"
							onClick={(e) => {
								menuClose()
								focus(e)
							}}
						>
							<Icons iconName="portfolioTab" id="portfolio" big={true} active={active[4]} />
							<p className="sideNavText">proj3_portfolio</p>
						</button>
					</div>
				</div>
				<div className="darkFilter" onMouseDown={menuClose}></div>
			</>
		)
	}

	useEffect(() => {
		if (mobileNavMenu) {
			let hamburger2 = document.getElementById('hamburger2')
			if (hamburger2 !== null) {
				hamburger2.focus()
				let hamburger1 = document.getElementById('hamburger1')
				hamburger1.setAttribute('aria-hidden', 'true')
				hamburger1.setAttribute('tabIndex', '-1')
			}
		} else {
			let hamburger1 = document.getElementById('hamburger1')
			// hamburger1.focus()
			hamburger1.setAttribute('aria-hidden', 'false')
			hamburger1.setAttribute('tabIndex', '0')
		}
	}, [mobileNavMenu])

	return (
		<nav id="responsiveNav" aria-label="mobile">
			<button
				id="hamburger1"
				className="hamburger"
				name="nav"
				aria-expanded="false"
				aria-label="Menu"
				onClick={menuOpen}
			>
				<svg
					width="1.2em"
					height="1.2em"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0"
					y="0"
					viewBox="0 0 19.315 17"
					aria-hidden="true"
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
							strokeWidth="2"
						/>
						<path
							id="Path_24"
							data-name="Path 24"
							d="M2323.506,1337.632h-19.315"
							transform="translate(-1941 -1301.632)"
							fill="none"
							stroke="#fff"
							strokeWidth="2"
						/>
						<path
							id="Path_25"
							data-name="Path 25"
							d="M2323.506,1337.632h-19.315"
							transform="translate(-1941 -1294.132)"
							fill="none"
							stroke="#fff"
							strokeWidth="2"
						/>
					</g>
				</svg>
			</button>
			{mobileNavMenu}
		</nav>
	)
}
