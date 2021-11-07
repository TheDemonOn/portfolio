import React, { useState, useEffect, useLayoutEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import WordGenerator from '../components/WordGenerator'
import Autojack from '../components/Autojack'
import RandomTest from '../components/RandomTest'
import Portfolio from '../components/Portfolio'
import Tab from '../components/Tab'

export default function Index() {
	// The index will contain elements that are always there
	// This includes the side nav bar, the tab bar, the background when all tabs are closed, the meta
	// Because these things will communicate top to bottom and are not repeated elsewhere, it is not necessary to turn
	// these elements into components.

	const [selectedTab, setSelectedTab] = useState(['home', 0])
	const [displayedTab, setDisplayedTab] = useState(0)
	const [title, setTitle] = useState()

	const [activeTab, setActiveTab] = useState('yellow')
	const [inactiveTab, setInactiveTab] = useState('grey')

	const [homeClass, setHomeClass] = useState(activeTab)
	const [wordGeneratorClass, setWordGeneratorClass] = useState(inactiveTab)
	const [autojackClass, setAutojackClass] = useState(inactiveTab)
	const [randomTestClass, setRandomTestClass] = useState(inactiveTab)
	const [portfolioClass, setPortfolioClass] = useState(inactiveTab)

	// Use Header Tabs to determine the position of the actual tabs
	// Example: ["homeTab", "autojackTab"]
	// Therefore homeTab will be position 0, autojackTab will be position 1,
	// and all other tabs will have position -1
	const [headerTabs, setHeaderTabs] = useState(['homeTab'])

	const switchTabCheck = (e) => {
		let tab = e.target.className
		// Switch to tab with a useEffect trigger
		setSelectedTab([tab, e])
	}

	let emptySection
	const [homeSection, setHomeSection] = useState(
		<ul>
			<li>
				<div onClick={switchTabCheck}>
					<a className="home">welcome</a>
				</div>
			</li>
			<li>
				<div onClick={switchTabCheck}>
					<a className="home">about me</a>
				</div>
			</li>
			<li>
				<div onClick={switchTabCheck}>
					<a className="home">projects</a>
				</div>
			</li>
			<li>
				<div onClick={switchTabCheck}>
					<a className="home">contact</a>
				</div>
			</li>
		</ul>
	)
	const [navHomeSection, setNavHomeSection] = useState(homeSection)
	const wordGeneratorSection = (
		<ul>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">overview</a>
				</div>
			</li>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">step1</a>
				</div>
			</li>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">step2</a>
				</div>
			</li>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">step3</a>
				</div>
			</li>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">challenges</a>
				</div>
			</li>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">successes</a>
				</div>
			</li>
			<li>
				<div className="grey" onClick={switchTabCheck}>
					<a className="wordGenerator">screenshots</a>
				</div>
			</li>
		</ul>
	)
	const [navWordGeneratorSection, setNavWordGeneratorSection] = useState(wordGeneratorSection)
	let autojackSection
	const [navAutojackSection, setNavAutojackSection] = useState(emptySection)
	let randomSection
	const [navRandomSection, setNavRandomSection] = useState(emptySection)
	let portfolioSection
	const [navPortfolioSection, setNavPortfolioSection] = useState(emptySection)

	useEffect(() => {
		if (typeof selectedTab[1].target !== 'undefined') {
			if (selectedTab[1].target.id !== 'section') {
				scrollTo(selectedTab[1])
			}
		}
	}, [displayedTab])

	const scrollTo = (e) => {
		// This takes advantage of the fact that the id's of the titles IS its own text to find it with one function
		let id = e.target.innerText
		if (
			typeof document.getElementById(id) !== 'undefined' &&
			document.getElementById(id) !== null
		) {
			let element = document.getElementById(id)
			element.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	}

	const tabFocusCheck = (id) => {
		if (
			typeof document.getElementById(id) !== 'undefined' &&
			document.getElementById(id) !== null
		) {
			let e = document.getElementById(id)
			let prevClass = e.className
			if (prevClass === 'focusedTab') {
				e.className = 'tab'
			}
		}
	}

	const inactiveTabfunc = (active) => {
		if (active !== 'home') {
			setHomeClass(inactiveTab)
			tabFocusCheck('homeTab')
		}
		if (active !== 'wordGenerator') {
			setWordGeneratorClass(inactiveTab)
			tabFocusCheck('wordGeneratorTab')
		}
		if (active !== 'autojack') {
			setAutojackClass(inactiveTab)
			tabFocusCheck('autojackTab')
		}
		if (active !== 'randomTest') {
			setRandomTestClass(inactiveTab)
			tabFocusCheck('randomTestTab')
		}
		if (active !== 'portfolio') {
			setPortfolioClass(inactiveTab)
			tabFocusCheck('portfolioTab')
		}
	}

	const focusTab = (id) => {
		if (
			typeof document.getElementById(id) !== 'undefined' &&
			document.getElementById(id) !== null
		) {
			document.getElementById(id).className = 'focusedTab'
		}
	}

	const tabClick = (e) => {
		let id
		if (e.target.id === '') {
			id = e.target.offsetParent.id
		} else {
			id = e.target.id
		}
		inactiveTabfunc(id)
		focusTab(id)
		let regex = /Tab/
		let tab = id.replace(regex, '')
		setSelectedTab([tab, e])
	}

	const destroyTab = (e) => {
		let ID = e.target.previousElementSibling.id
		// setTabToBeKilled(ID)
		let index = headerTabs.indexOf(ID)
		headerTabs.splice(index, 1)
		setHeaderTabs([...headerTabs])
	}

	const [numberPosition, setNumberPosition] = useState([0, -1, -1, -1, -1])

	useEffect(() => {
		console.log('Setting tab positions based on headerTabs.')
		console.log(headerTabs)
		console.log(numberPosition)
		let seenTabs = []
		for (let i = 0; i < headerTabs.length; i++) {
			console.log(i, headerTabs[i])
			switch (headerTabs[i]) {
				case 'homeTab':
					numberPosition[0] = i
					setNumberPosition([...numberPosition])
					break
				case 'wordGeneratorTab':
					numberPosition[1] = i
					setNumberPosition([...numberPosition])
					break
				case 'autojackTab':
					numberPosition[2] = i
					setNumberPosition([...numberPosition])
					break
				case 'randomTestTab':
					numberPosition[3] = i
					setNumberPosition([...numberPosition])
					break
				case 'portfolioTab':
					numberPosition[4] = i
					setNumberPosition([...numberPosition])
					break
			}
		}
		if (numberPosition[0] > -1 && headerTabs.indexOf('homeTab') === -1) {
			numberPosition[0] = -1
			setNumberPosition([...numberPosition])
		} else if (numberPosition[1] > -1 && headerTabs.indexOf('wordGeneratorTab') === -1) {
			numberPosition[1] = -1
			setNumberPosition([...numberPosition])
		} else if (numberPosition[2] > -1 && headerTabs.indexOf('autojackTab') === -1) {
			numberPosition[2] = -1
			setNumberPosition([...numberPosition])
		} else if (numberPosition[3] > -1 && headerTabs.indexOf('randomTestTab') === -1) {
			numberPosition[3] = -1
			setNumberPosition([...numberPosition])
		} else if (numberPosition[4] > -1 && headerTabs.indexOf('portfolioTab') === -1) {
			numberPosition[4] = -1
			setNumberPosition([...numberPosition])
		}
		console.log(numberPosition)
	}, [headerTabs])

	useEffect(() => {
		console.log(numberPosition)
	})

	const [customPosition, setCustomPosition] = useState()

	const headerLogic = (ID) => {
		let index = headerTabs.findIndex((x) => x === ID)
		// Find if the tab exists or not
		if (index > -1) {
			// switch to that index without creating one
			focusTab(ID)
		} else {
			// it does not exist, create a new one
			setHeaderTabs([...headerTabs, ID])
		}
	}

	useEffect(() => {
		console.log(selectedTab)
		switch (selectedTab[0]) {
			case 'home':
				setHomeClass(activeTab)
				setDisplayedTab(<Home />)
				headerLogic('homeTab')
				setTitle(
					<Head>
						<title>Home</title>
					</Head>
				)
				inactiveTabfunc(selectedTab[0])
				break
			case 'wordGenerator':
				setWordGeneratorClass(activeTab)
				setDisplayedTab(<WordGenerator />)
				headerLogic('wordGeneratorTab')
				setTitle(
					<Head>
						<title>Rhyming Word Generator</title>
					</Head>
				)
				inactiveTabfunc(selectedTab[0])
				break
			case 'autojack':
				setAutojackClass(activeTab)
				setDisplayedTab(<Autojack />)
				headerLogic('autojackTab')
				setTitle(
					<Head>
						<title>Autojack</title>
					</Head>
				)
				inactiveTabfunc(selectedTab[0])
				break
			case 'randomTest':
				setRandomTestClass(activeTab)
				setDisplayedTab(<RandomTest />)
				headerLogic('randomTestTab')
				setTitle(
					<Head>
						<title>Random Test</title>
					</Head>
				)
				inactiveTabfunc(selectedTab[0])
				break
			case 'portfolio':
				setPortfolioClass(activeTab)
				setDisplayedTab(<Portfolio />)
				headerLogic('portfolioTab')
				setTitle(
					<Head>
						<title>This Site!</title>
					</Head>
				)
				inactiveTabfunc(selectedTab[0])
				break
			default:
				// Easter Egg
				break
		}
	}, [selectedTab])

	const navToggle = (e) => {
		let tab = e.target.className
		switch (tab) {
			case 'home':
				// Toggle visivility of home
				if (typeof navHomeSection !== 'undefined') {
					setNavHomeSection(emptySection)
				} else {
					setNavHomeSection(homeSection)
				}
				break
			case 'wordGenerator':
				if (typeof navWordGeneratorSection !== 'undefined') {
					setNavWordGeneratorSection(emptySection)
				} else {
					setNavWordGeneratorSection(wordGeneratorSection)
				}
				break
			case 'autojack':
				break
			case 'randomTest':
				break
			case 'portfolio':
				break
		}
	}

	return (
		<>
			<Head>
				<meta name="description" content="Portfolio site" />
				<meta name="author" content="Antonio Zamora, zamora88875@gmail.com" />
				<meta name="designer" content="Jess Simons, jess.simons.design@gmail.com" />
				<meta name="keywords" content="portfolio, front end development" />
				<meta name="theme-color" content="#4285f4" />
				<meta name="language" content="English" />
				<meta name="revised" content="November 11th, 2021" />
				<meta name="HandheldFriendly" content="true" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@600&display=swap"
					rel="stylesheet"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<header>
				<div className="headerAntonio">
					<h3 id="codeAntonio">CODE ANTONIO</h3>
				</div>
				<div className="header"></div>
				<div className="headerSpaceFill"></div>
			</header>

			<nav className="nav inline">
				<div className="sideNav navText">
					<ul>
						<li>
							<div className={homeClass} id="sectionHome" onClick={navToggle}>
								<a className="home">home</a>
							</div>
						</li>
						{navHomeSection}
						<li>
							<div className={wordGeneratorClass} id="sectionWordGenerator" onClick={navToggle}>
								<a className="wordGenerator" id="section">
									proj1_word_generator
								</a>
							</div>
						</li>
						{navWordGeneratorSection}
						<li>
							<div className={autojackClass} id="sectionAutojack" onClick={switchTabCheck}>
								<a className="autojack" id="section">
									proj2_autojack
								</a>
							</div>
						</li>
						{navAutojackSection}
						<li>
							<div className={randomTestClass} id="sectionRandomTest" onClick={switchTabCheck}>
								<a className="randomTest" id="section">
									proj3_random_test
								</a>
							</div>
						</li>
						{navRandomSection}
						<li>
							<div className={portfolioClass} id="sectionPortfolio" onClick={switchTabCheck}>
								<a className="portfolio" id="section">
									proj4_portfolio
								</a>
							</div>
						</li>
						{navPortfolioSection}
					</ul>
				</div>
			</nav>

			<body>
				{/* <div className="nav inline"></div> */}
				<div className="bodyPosition">
					{/* {headerTabs} */}
					<Tab
						content="home.tab"
						id="homeTab"
						focus={tabClick}
						destroy={destroyTab}
						position={numberPosition[0]}
					/>
					<Tab
						content="proj1.tab"
						id="wordGeneratorTab"
						focus={tabClick}
						destroy={destroyTab}
						position={numberPosition[1]}
					/>
					<Tab
						content="proj2.tab"
						id="autojackTab"
						focus={tabClick}
						destroy={destroyTab}
						position={numberPosition[2]}
					/>
					<Tab
						content="proj3.tab"
						id="randomTestTab"
						focus={tabClick}
						destroy={destroyTab}
						position={numberPosition[3]}
					/>
					<Tab
						content="proj4.tab"
						id="portfolioTab"
						focus={tabClick}
						destroy={destroyTab}
						position={numberPosition[4]}
					/>
					{displayedTab}
					{title}
				</div>
				{/* <WordGenerator></WordGenerator> */}
			</body>
		</>
	)
}
