import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import WordGenerator from '../components/WordGenerator'
import Autojack from '../components/Autojack'
import RandomTest from '../components/RandomTest'
import Portfolio from '../components/Portfolio'
import EasterEgg from '../components/EasterEgg'
import Tab from '../components/Tab'
import DragTab from '../components/DragTab'
import GithubSVG from '../components/GithubSVG'
import Icons from '../components/Icons'

export default function Index() {
	// The index will contain elements that are always there
	// This includes the side nav bar, the tab bar, the background when all tabs are closed, the meta
	// Because these things will communicate top to bottom and are not repeated elsewhere, it is not necessary to turn
	// these elements into components.

	const [selectedTab, setSelectedTab] = useState(['home', 0])
	const [displayedTab, setDisplayedTab] = useState(0)
	const [title, setTitle] = useState()

	const [activeTab, setActiveTab] = useState('yellow')
	const [inactiveTab, setInactiveTab] = useState('darkGrey')
	const [activeSubClass, setActiveSubClass] = useState('white')

	const [homeClass, setHomeClass] = useState(activeTab)
	const [homeSubClass, setHomeSubClass] = useState(activeSubClass)
	const [wordGeneratorClass, setWordGeneratorClass] = useState(inactiveTab)
	const [wordGeneratorSubClass, setWordGeneratorSubClass] = useState(inactiveTab)
	const [autojackClass, setAutojackClass] = useState(inactiveTab)
	const [autojackSubClass, setAutojackSubClass] = useState(inactiveTab)
	const [randomTestClass, setRandomTestClass] = useState(inactiveTab)
	const [randomTestSubClass, setRandomTestSubClass] = useState(inactiveTab)
	const [portfolioClass, setPortfolioClass] = useState(inactiveTab)
	const [portfolioSubClass, setPortfolioSubClass] = useState(inactiveTab)

	// Use Header Tabs to determine the position of the actual tabs
	// Example: ["homeTab", "autojackTab"]
	// Therefore homeTab will be position 0, autojackTab will be position 1,
	// and all other tabs will have position -1
	const [headerTabs, setHeaderTabs] = useState(['homeTab'])

	const switchTabCheck = (e) => {
		let tab
		let innerText
		if (e.target.className === '') {
			tab = e.target.firstChild.childNodes[1].className
			innerText = e.target.firstChild.childNodes[1].innerText
		} else if (
			e.target.ownerSVGElement !== null &&
			typeof e.target.ownerSVGElement !== 'undefined'
		) {
			tab = e.target.ownerSVGElement.nextElementSibling.className
			innerText = e.target.ownerSVGElement.nextElementSibling.innerText
		} else if (
			e.target.ownerSVGElement === null &&
			typeof e.target.nextElementSibling.className !== 'undefined'
		) {
			tab = e.target.nextElementSibling.className
			innerText = e.target.nextElementSibling.innerText
			console.log(tab, innerText)
		} else if (e.target.className !== 'white' && e.target.className !== 'darkGrey') {
			tab = e.target.className
			innerText = e.target.innerText
		} else {
			tab = e.target.childNodes[1].className
			innerText = e.target.childNodes[1].innerText
		}
		// Switch to tab with a useEffect trigger
		setSelectedTab([tab, innerText])
	}

	let emptySection
	const homeSection = (
		<ul className="sideNavBorder">
			<li onClick={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="welcome" />
					<a className="home">welcome</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="aboutMe" />
					<a className="home">about me</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="projects" />
					<a className="home">projects</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="contact" />
					<a className="home">contact</a>
				</div>
			</li>
		</ul>
	)
	const [navHomeSection, setNavHomeSection] = useState(homeSection)
	const wordGeneratorSection = (
		<ul className="sideNavBorder">
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="overview" />
					<a className="wordGenerator">overview</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" />
					<a className="wordGenerator">step 1</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" />
					<a className="wordGenerator">step 2</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" />
					<a className="wordGenerator">step 3</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="challenges" />
					<a className="wordGenerator">challenges</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="successes" />
					<a className="wordGenerator">successes</a>
				</div>
			</li>
			<li onClick={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="screenshots" />
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
		setNavHomeSection(homeSection)
		setNavWordGeneratorSection(wordGeneratorSection)
	}, [homeSubClass, wordGeneratorSubClass])

	useEffect(() => {
		// This useEffect attempts to scroll to where was clicked on the sideNav, using info from selectedTab
		if (selectedTab[1]) {
			let spaceRegex = / /gm
			let initialText = selectedTab[1]
			let id = initialText.replace(spaceRegex, '')
			// This essentially concatenates the incoming string
			if (document.getElementById(id) !== null) {
				let element = document.getElementById(id)
				element.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}
		}
	}, [displayedTab, selectedTab])

	// const scrollTo = (e) => {
	// 	// This takes advantage of the fact that the id's of the titles IS its own text to find it with one function
	// 	let id = e.target.innerText
	// 	if (
	// 		typeof document.getElementById(id) !== 'undefined' &&
	// 		document.getElementById(id) !== null
	// 	) {
	// 		let element = document.getElementById(id)
	// 		element.scrollIntoView({ behavior: 'smooth', block: 'center' })
	// 	}
	// }

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
		console.log('This triggers', active)
		if (active !== 'home') {
			setHomeClass(inactiveTab)
			setHomeSubClass(inactiveTab)
			tabFocusCheck('homeTab')
		}
		if (active !== 'wordGenerator') {
			setWordGeneratorClass(inactiveTab)
			setWordGeneratorSubClass(inactiveTab)
			tabFocusCheck('wordGeneratorTab')
		}
		if (active !== 'autojack') {
			setAutojackClass(inactiveTab)
			setAutojackSubClass(inactiveTab)
			tabFocusCheck('autojackTab')
		}
		if (active !== 'randomTest') {
			setRandomTestClass(inactiveTab)
			setRandomTestSubClass(inactiveTab)
			tabFocusCheck('randomTestTab')
		}
		if (active !== 'portfolio') {
			setPortfolioClass(inactiveTab)
			setPortfolioSubClass(inactiveTab)
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
		console.log(e)
		let id
		if (e.target.id === '') {
			if (typeof e.target.ownerSVGElement !== 'undefined' && e.target.ownerSVGElement !== null) {
				id = e.target.ownerSVGElement.parentNode.attributes.id.value
			} else if (typeof e.target.offsetParent !== 'undefined' && e.target.offsetParent !== null) {
				id = e.target.offsetParent.id
			} else if (
				e.target.parentNode.id !== 'undefined' &&
				e.target.parentNode.attributes.id !== null
			) {
				id = e.target.parentNode.id
			} else {
				id = e.target.parentNode.parentNode.id
			}
		} else {
			if (
				typeof e.target.parentNode.attributes.id !== 'undefined' &&
				e.target.parentNode.attributes.id !== null
			) {
				id = e.target.parentNode.attributes.id.value
			} else {
				id = e.target.id
			}
		}
		focusTab(id)
		let regex = /Tab/
		let tab = id.replace(regex, '')
		inactiveTabfunc(tab)
		setSelectedTab([tab])
	}

	const destroyTab = (e) => {
		// This function removes a tab and changes the displayedTab if necessary
		let ID
		if (typeof e.target.dataset.tab !== 'undefined') {
			ID = e.target.dataset.tab
		} else {
			ID = e.target.farthestViewportElement.dataset.tab
		}
		let index = headerTabs.indexOf(ID)
		headerTabs.splice(index, 1)
		if (ID === selectedTab[0] + 'Tab' && headerTabs[0]) {
			// If the deleted tab is currently being displayed, move to the next available tab
			let e
			if (
				typeof document.getElementById(headerTabs[index]) !== 'undefined' &&
				document.getElementById(headerTabs[index]) !== null
			) {
				// If the index that was deleted is now available we will switch to that
				e = document.getElementById(headerTabs[index])
			} else {
				// If that index is not available switch to the previous one
				e = document.getElementById(headerTabs[index - 1])
			}
			let newId = e.id
			focusTab(newId)
			// inactiveTabfunc(newId) // This is perhaps unnecessary
			let regex = /Tab/
			let tab = newId.replace(regex, '')
			setSelectedTab([tab])
		} else if (typeof headerTabs[0] === 'undefined') {
			// If there are no tabs
			setSelectedTab([])
		}
		// The deleted tab is not currently being displayed
		setHeaderTabs([...headerTabs])
	}

	const [numberPosition, setNumberPosition] = useState([0, -1, -1, -1, -1])

	useEffect(() => {
		// console.log('Setting tab positions based on headerTabs.')
		// console.log(headerTabs)
		// console.log(numberPosition)
		for (let i = 0; i < headerTabs.length; i++) {
			// console.log(i, headerTabs[i])
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
		// console.log(numberPosition)
	}, [headerTabs])

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
		// This useEffect controls the logic for adding a new tab, as well as displaying that requested tab
		console.log('Does this fire.', selectedTab[0])
		switch (selectedTab[0]) {
			case 'home':
				setHomeClass(activeTab)
				setHomeSubClass(activeSubClass)
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
				setWordGeneratorSubClass(activeSubClass)
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
				if (!headerTabs[0]) {
					setDisplayedTab(<EasterEgg />)
					setTitle(
						<Head>
							<title>Easter Egg!</title>
						</Head>
					)
				}
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

	const [dragTabContent, setDragTabContent] = useState('Nothing')
	const [tab, setTab] = useState(0)
	const [button, setButton] = useState(0)
	const [tabToBeMoved, setTabToBeMoved] = useState(0)
	const [grabTabIcon, setGrabTabIcon] = useState(0)
	const [dragTabId, setDragTabId] = useState(0)

	let initialPosition = [0, 0]

	const moveFunction = (e) => {
		if (typeof tab.style !== 'undefined') {
			grabTabAppear()
			existenceRef.current = 1
			tab.style.left = e.clientX - initialPosition[0] + 'px'
			tab.style.top = e.clientY - initialPosition[1] + 'px'
			button.style.left = e.clientX - initialPosition[0] + 'px'
			button.style.top = e.clientY - initialPosition[1] + 'px'
		}
	}
	let mouseDownFunction = (e) => {
		// This function takes in information about where you clicked on the page, as well
		// as using the left stlye of the element that was clicked to position the grabbed tab
		let leftString
		let element
		if (typeof e.target.ownerSVGElement !== 'undefined' && e.target.ownerSVGElement !== null) {
			leftString = e.target.ownerSVGElement.parentNode.style.left
			element = e.target.ownerSVGElement.parentNode
		} else if (e.target.parentNode.id) {
			leftString = e.target.parentNode.style.left
			element = e.target.parentNode
		} else if (e.target.style.left) {
			leftString = e.target.style.left
			element = e.target
		} else {
			leftString = e.explicitOriginalTarget.parentNode.parentNode.style.left
			element = e.explicitOriginalTarget.parentNode.parentNode
		}
		setTabToBeMoved(element)
		let regex = /px/
		let leftValueString = leftString.replace(regex, '')
		// This leaves the string value only having numbers so it can be coerced from string to num for the positioning
		initialPosition = [e.clientX - leftValueString, e.clientY]
		document.onmousemove = moveFunction
	}

	const removeMouseMove = () => {
		// When mouse is released stop moving the grabTab
		grabTabDisappear()
		existenceRef.current = 0
		document.onmousemove = ''
	}

	const existenceRef = useRef(0)
	// This useRef is used to guarantee that the functions use data that is not stale for this time sensitive operation
	const [grabTabExistence, setGrabTabExistence] = useState(0)

	const tabRelocate = (e) => {
		if (existenceRef.current === 1) {
			// If the grabTab exists right now
			let id
			if (
				typeof e.explicitOriginalTarget.ownerSVGElement !== 'undefined' &&
				e.explicitOriginalTarget.ownerSVGElement !== null
			) {
				id = e.explicitOriginalTarget.ownerSVGElement.parentNode.id
			} else if (
				typeof e.explicitOriginalTarget.id !== 'undefined' &&
				e.explicitOriginalTarget.id !== ''
			) {
				id = e.explicitOriginalTarget.id
			} else if (e.explicitOriginalTarget.parentNode.id) {
				id = e.explicitOriginalTarget.parentNode.id
			} else {
				id = e.explicitOriginalTarget.parentNode.parentNode.id
			}
			// do the swapping
			let movingIndex = headerTabs.indexOf(tabToBeMoved.id)
			let destinationIndex = headerTabs.indexOf(id)
			let storedValue = headerTabs[movingIndex]
			// should be able to just splice out the element that is moving, then place it in the new position it wants to be in
			headerTabs.splice(movingIndex, 1)
			headerTabs.splice(destinationIndex, 0, storedValue)
			setHeaderTabs([...headerTabs])
		}
	}

	useEffect(() => {
		if (existenceRef.current === 1) {
			// we are grabbing a tab
			headerTabs.map((tabName) => {
				let tabElement = document.getElementsByClassName(tabName)[0]
				tabElement.onmouseup = tabRelocate
			})
			document.documentElement.style.setProperty('--cursor-pointer', 'alias', 'important')
		} else {
			document.documentElement.style.setProperty('--cursor-pointer', 'pointer', 'important')
		}
	}, [grabTabExistence])

	const grabTabAppear = () => {
		setGrabTabExistence(1)
	}
	const grabTabDisappear = () => {
		setGrabTabExistence(0)
	}

	useEffect(() => {
		setTab(document.getElementsByClassName('grabbedFocusedTab')[0])
		setButton(document.getElementsByClassName('grabbedTabCloseButton')[0])
		// This will add and remove event listeners for the dragging and dropping of tabs to reposition
		// When numberPosition mutates to > -1 this will add the listener and when === -1 removes the listener
		if (numberPosition[0] > -1 && selectedTab[0] === 'home') {
			let parent = document.getElementsByClassName('homeTab')[0]
			let element = parent.getElementsByTagName('div')[0]
			setDragTabContent(element.innerText)
			element.onmousedown = mouseDownFunction
			window.onmouseup = removeMouseMove
		}
		if (numberPosition[1] > -1 && selectedTab[0] === 'wordGenerator') {
			// add
			let parent = document.getElementsByClassName('wordGeneratorTab')[0]
			let element = parent.getElementsByTagName('div')[0]
			setDragTabContent(element.innerText)
			element.onmousedown = mouseDownFunction
			window.onmouseup = removeMouseMove
		}
		if (numberPosition[2] > -1 && selectedTab[0] === 'autojack') {
			// add
			let parent = document.getElementsByClassName('autojackTab')[0]
			let element = parent.getElementsByTagName('div')[0]
			setDragTabContent(element.innerText)
			element.onmousedown = mouseDownFunction
			window.onmouseup = removeMouseMove
		}
		if (numberPosition[3] > -1 && selectedTab[0] === 'randomTest') {
			// add
			let parent = document.getElementsByClassName('randomTestTab')[0]
			let element = parent.getElementsByTagName('div')[0]
			setDragTabContent(element.innerText)
			element.onmousedown = mouseDownFunction
			window.onmouseup = removeMouseMove
		}
		if (numberPosition[4] > -1 && selectedTab[0] === 'portfolio') {
			// add
			let parent = document.getElementsByClassName('portfolioTab')[0]
			let element = parent.getElementsByTagName('div')[0]
			setDragTabContent(element.innerText)
			element.onmousedown = mouseDownFunction
			window.onmouseup = removeMouseMove
		}
	}, [numberPosition, selectedTab])

	const tabScrollCheck = () => {
		console.log('over')
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
				<div className="header" onMouseOver={tabScrollCheck}></div>
				<div className="headerSpaceFill"></div>
				<GithubSVG />
			</header>

			<nav className="nav inline">
				<div className="sideNav navText">
					<ul className="sideNavUL">
						<li className="titleList">
							<div className={homeClass} id="sectionHome" onClick={navToggle}>
								<Icons iconName="dropActive" />
								<a className="home">home</a>
							</div>
						</li>
						{navHomeSection}
						<li className="titleList">
							<div className={wordGeneratorClass} id="sectionWordGenerator" onClick={navToggle}>
								<Icons iconName="dropInactive" />
								<a className="wordGenerator" id="section">
									proj1_word_generator
								</a>
							</div>
						</li>
						{navWordGeneratorSection}
						<li className="titleList">
							<div className={autojackClass} id="sectionAutojack" onClick={switchTabCheck}>
								<a className="autojack" id="section">
									proj2_autojack
								</a>
							</div>
						</li>
						{navAutojackSection}
						<li className="titleList">
							<div className={randomTestClass} id="sectionRandomTest" onClick={switchTabCheck}>
								<a className="randomTest" id="section">
									proj3_random_test
								</a>
							</div>
						</li>
						{navRandomSection}
						<li className="titleList">
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
			<DragTab content={dragTabContent} exist={grabTabExistence} id={selectedTab[0] + 'Tab'} />
			<div className="tabCollection">
				<Tab
					content="home.tab"
					id="homeTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[0]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={homeClass}
				/>
				<Tab
					content="proj1.tab"
					id="wordGeneratorTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[1]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={wordGeneratorClass}
				/>
				<Tab
					content="proj2.tab"
					id="autojackTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[2]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={autojackClass}
				/>
				<Tab
					content="proj3.tab"
					id="randomTestTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[3]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={randomTestClass}
				/>
				<Tab
					content="proj4.tab"
					id="portfolioTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[4]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={portfolioClass}
				/>
			</div>
			<body>
				<div className="bodyPosition">
					{displayedTab}
					{title}
				</div>
				{/* <WordGenerator></WordGenerator> */}
			</body>
		</>
	)
}
