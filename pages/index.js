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
import HamburgerSVG from '../components/HamburgerSVG'

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

	const [homeY, setHomeY] = useState(0)
	const homeYFunc = () => {
		setHomeY(window.scrollY)
	}
	const [wordGeneratorY, setWordGeneratorY] = useState(0)
	const wordGeneratorYFunc = () => {
		setWordGeneratorY(window.scrollY)
	}
	const [autojackY, setAutojackY] = useState(0)
	const autojackYFunc = () => {
		setAutojackY(window.scrollY)
	}
	const [randomTestY, setRandomTestY] = useState(0)
	const randomTestYFunc = () => {
		setRandomTestY(window.scrollY)
	}
	const [portfolioY, setPortfolioY] = useState(0)
	const portfolioYFunc = () => {
		setPortfolioY(window.scrollY)
	}

	// Use Header Tabs to determine the position of the actual tabs
	// Example: ["homeTab", "autojackTab"]
	// Therefore homeTab will be position 0, autojackTab will be position 1,
	// and all other tabs will have position -1
	const [headerTabs, setHeaderTabs] = useState(['homeTab'])

	const switchTabCheck = (e) => {
		// This function gets the information needed to swap tabs, and/or scroll to a new position
		// The different cases are for the different parts of the clickable elements
		// console.log(e)
		let tab
		let innerText
		if (typeof e.target !== 'undefined') {
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
			} else if (e.target.className !== 'white' && e.target.className !== 'darkGrey') {
				tab = e.target.className
				innerText = e.target.innerText
			} else if (typeof e.target.childNodes[1] !== 'undefined') {
				tab = e.target.childNodes[1].className
				innerText = e.target.childNodes[1].innerText
			} else if (typeof e.target.firstChild !== 'undefined') {
				tab = e.target.firstChild.className
				innerText = e.target.firstChild.innerText
			}
		} else {
			tab = e
		}

		// console.log(tab, innerText)
		// Switch to tab with a useEffect trigger
		if (tab || innerText) {
			setSelectedTab([tab, innerText])
		}
	}

	let emptySection
	const homeSection = (
		<ul className="sideNavBorder">
			<li onMouseDown={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="welcome" sideNavClass={homeSubClass} />
					<a className="home">welcome</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="aboutMe" sideNavClass={homeSubClass} />
					<a className="home">about me</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="projects" sideNavClass={homeSubClass} />
					<a className="home">projects</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={homeSubClass}>
					<Icons iconName="contact" sideNavClass={homeSubClass} />
					<a className="home">contact</a>
				</div>
			</li>
		</ul>
	)
	const [navHomeSection, setNavHomeSection] = useState(homeSection)
	const wordGeneratorSection = (
		<ul className="sideNavBorder">
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="overview" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">overview</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">step 1</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">step 2</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">step 3</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="step" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">step 4</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="challenges" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">challenges</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="successes" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">successes</a>
				</div>
			</li>
			{/* <li onMouseDown={switchTabCheck}>
				<div className={wordGeneratorSubClass}>
					<Icons iconName="screenshots" sideNavClass={wordGeneratorSubClass} />
					<a className="wordGenerator">screenshots</a>
				</div>
			</li> */}
		</ul>
	)
	const [navWordGeneratorSection, setNavWordGeneratorSection] = useState(emptySection)
	const autojackSection = (
		<ul className="sideNavBorder">
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="overview" sideNavClass={autojackSubClass} />
					<a className="autojack">overview</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="step" sideNavClass={autojackSubClass} />
					<a className="autojack">step 1</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="step" sideNavClass={autojackSubClass} />
					<a className="autojack">step 2</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="step" sideNavClass={autojackSubClass} />
					<a className="autojack">step 3</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="challenges" sideNavClass={autojackSubClass} />
					<a className="autojack">challenges</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="successes" sideNavClass={autojackSubClass} />
					<a className="autojack">successes</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={autojackSubClass}>
					<Icons iconName="screenshots" sideNavClass={autojackSubClass} />
					<a className="autojack">screenshots</a>
				</div>
			</li>
		</ul>
	)
	const [navAutojackSection, setNavAutojackSection] = useState(emptySection)
	const randomSection = (
		<ul className="sideNavBorder">
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="overview" sideNavClass={randomTestSubClass} />
					<a className="randomTest">overview</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="step" sideNavClass={randomTestSubClass} />
					<a className="randomTest">step 1</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="step" sideNavClass={randomTestSubClass} />
					<a className="randomTest">step 2</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="step" sideNavClass={randomTestSubClass} />
					<a className="randomTest">step 3</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="step" sideNavClass={randomTestSubClass} />
					<a className="randomTest">step 4</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="challenges" sideNavClass={randomTestSubClass} />
					<a className="randomTest">challenges</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="successes" sideNavClass={randomTestSubClass} />
					<a className="randomTest">successes</a>
				</div>
			</li>
			{/* <li onMouseDown={switchTabCheck}>
				<div className={randomTestSubClass}>
					<Icons iconName="screenshots" sideNavClass={randomTestSubClass} />
					<a className="randomTest">screenshots</a>
				</div>
			</li> */}
		</ul>
	)
	const [navRandomSection, setNavRandomSection] = useState(emptySection)
	const portfolioSection = (
		<ul className="sideNavBorder">
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="overview" sideNavClass={portfolioSubClass} />
					<a className="portfolio">overview</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="step" sideNavClass={portfolioSubClass} />
					<a className="portfolio">step 1</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="step" sideNavClass={portfolioSubClass} />
					<a className="portfolio">step 2</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="step" sideNavClass={portfolioSubClass} />
					<a className="portfolio">step 3</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="step" sideNavClass={portfolioSubClass} />
					<a className="portfolio">step 4</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="challenges" sideNavClass={portfolioSubClass} />
					<a className="portfolio">challenges</a>
				</div>
			</li>
			<li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="successes" sideNavClass={portfolioSubClass} />
					<a className="portfolio">successes</a>
				</div>
			</li>
			{/* <li onMouseDown={switchTabCheck}>
				<div className={portfolioSubClass}>
					<Icons iconName="screenshots" sideNavClass={portfolioSubClass} />
					<a className="portfolio">screenshots</a>
				</div>
			</li> */}
		</ul>
	)
	const [navPortfolioSection, setNavPortfolioSection] = useState(emptySection)

	useEffect(() => {
		if (navHomeSection) {
			setNavHomeSection(homeSection)
		}
	}, [homeSubClass])
	useEffect(() => {
		if (navWordGeneratorSection) {
			setNavWordGeneratorSection(wordGeneratorSection)
		}
	}, [wordGeneratorSubClass])
	useEffect(() => {
		if (navAutojackSection) {
			setNavAutojackSection(autojackSection)
		}
	}, [autojackSubClass])
	useEffect(() => {
		if (navRandomSection) {
			setNavRandomSection(randomSection)
		}
	}, [randomTestSubClass])
	useEffect(() => {
		if (navPortfolioSection) {
			setNavPortfolioSection(portfolioSection)
		}
	}, [portfolioSubClass])

	useEffect(() => {
		// This useEffect attempts to scroll to where was clicked on the sideNav, using info from selectedTab
		if (selectedTab[1]) {
			let spaceRegex = / /gm
			let initialText = selectedTab[1]
			let id = initialText.replace(spaceRegex, '')
			console.log(id)
			// This essentially concatenates the incoming string
			if (document.getElementById(id) !== null) {
				let element = document.getElementById(id)
				console.log(element)
				element.scrollIntoView({ behavior: 'smooth', block: 'center' })
			}
		}
	}, [displayedTab, selectedTab])

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
		// console.log('This triggers', active)
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
			if (window.innerWidth >= 627) {
				document.getElementById(id).className = 'focusedTab'
			}
		}
	}

	const tabClick = (e) => {
		console.log(e)
		let id
		if (e.target.id === '') {
			if (e.target.className === 'sideNavText') {
				id = e.target.parentElement.id
			} else if (
				typeof e.target.ownerSVGElement !== 'undefined' &&
				e.target.ownerSVGElement !== null
			) {
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
		console.log(id)
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
		switch (selectedTab[0]) {
			case 'home':
				setHomeClass(activeTab)
				setHomeSubClass(activeSubClass)
				setNavHomeSection(homeSection)
				setDisplayedTab(<Home y={homeY} distanceFromTopFunc={homeYFunc} />)
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
				setNavWordGeneratorSection(wordGeneratorSection)
				setDisplayedTab(
					<WordGenerator y={wordGeneratorY} distanceFromTopFunc={wordGeneratorYFunc} />
				)
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
				setAutojackSubClass(activeSubClass)
				setNavAutojackSection(autojackSection)
				setDisplayedTab(<Autojack y={autojackY} distanceFromTopFunc={autojackYFunc} />)
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
				setRandomTestSubClass(activeSubClass)
				setNavRandomSection(randomSection)
				setDisplayedTab(<RandomTest y={randomTestY} distanceFromTopFunc={randomTestYFunc} />)
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
				setPortfolioSubClass(activeSubClass)
				setNavPortfolioSection(portfolioSection)
				setDisplayedTab(<Portfolio y={portfolioY} distanceFromTopFunc={portfolioYFunc} />)
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
				inactiveTabfunc('None')
				break
		}
	}, [selectedTab])

	const navToggle = (e) => {
		console.log(e)
		// This function sets the target section's content to be the opposite of what it currently is
		let tab = e.target.className
		if (tab === 'yellow' || tab === 'darkGrey') {
			tab = e.target.lastChild.className
		} else if (tab === 'titleList') {
			tab = e.target.lastChild.lastChild.className
		}

		// console.log(typeof tab)

		if (typeof tab !== 'string') {
			// clicked on the Icon
			let sectionName

			if (e.target.parentElement.nextElementSibling !== null) {
				sectionName = e.target.parentElement.nextElementSibling.className
			} else {
				sectionName = e.target.nextElementSibling.className
			}

			switch (sectionName) {
				case 'home':
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
					if (typeof navAutojackSection !== 'undefined') {
						setNavAutojackSection(emptySection)
					} else {
						setNavAutojackSection(autojackSection)
					}
					break
				case 'randomTest':
					if (typeof navRandomSection !== 'undefined') {
						setNavRandomSection(emptySection)
					} else {
						setNavRandomSection(randomSection)
					}
					break
				case 'portfolio':
					if (typeof navPortfolioSection !== 'undefined') {
						setNavPortfolioSection(emptySection)
					} else {
						setNavPortfolioSection(portfolioSection)
					}
					break
			}
		} else {
			// Clicked on the text or box
			switch (tab) {
				case 'home':
					if (typeof navHomeSection !== 'undefined' && selectedTab[0] === 'home') {
						setNavHomeSection(emptySection)
					} else {
						setNavHomeSection(homeSection)
						switchTabCheck(tab)
					}
					break
				case 'wordGenerator':
					if (
						typeof navWordGeneratorSection !== 'undefined' &&
						selectedTab[0] === 'wordGenerator'
					) {
						setNavWordGeneratorSection(emptySection)
					} else {
						setNavWordGeneratorSection(wordGeneratorSection)
						switchTabCheck(tab)
					}
					break
				case 'autojack':
					if (typeof navAutojackSection !== 'undefined' && selectedTab[0] === 'autojack') {
						setNavAutojackSection(emptySection)
					} else {
						setNavAutojackSection(autojackSection)
						switchTabCheck(tab)
					}
					break
				case 'randomTest':
					if (typeof navRandomSection !== 'undefined' && selectedTab[0] === 'randomTest') {
						setNavRandomSection(emptySection)
					} else {
						setNavRandomSection(randomSection)
						switchTabCheck(tab)
					}
					break
				case 'portfolio':
					if (typeof navPortfolioSection !== 'undefined' && selectedTab[0] === 'portfolio') {
						setNavPortfolioSection(emptySection)
					} else {
						setNavPortfolioSection(portfolioSection)
						switchTabCheck(tab)
					}
					break
			}
		}
	}

	const [dragTabContent, setDragTabContent] = useState('Nothing')
	const [tab, setTab] = useState(0)
	const [button, setButton] = useState(0)
	const [tabToBeMoved, setTabToBeMoved] = useState(0)

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
		// console.log(existenceRef.current, grabTabExistence)
		if (grabTabExistence === 1) {
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

	const sideNavScroll = (e) => {
		if (e.deltaY > 0) {
			// scroll sideNav Up
			if (e.deltaY > 1.5) {
				let headerShadowElement = document.getElementsByClassName('headerAntonio')[0]
				headerShadowElement.style.boxShadow = '0 4px 2px -1px rgba(0, 0, 0, 0.2)'
				let nav = document.getElementsByClassName('sideNavUL')[0]
				let marginTop = window.getComputedStyle(nav).getPropertyValue('margin-top')
				let pxRegex = /px/
				let stringNum = marginTop.replace(pxRegex, '')
				let modifier = e.deltaY / 2.5
				let num = stringNum - modifier
				// This if else determines when the bottom of the sideNav is already in view, and prevents further scrolling
				if (40 + nav.offsetHeight + nav.offsetTop <= window.innerHeight) {
					nav.style.setProperty('margin-top', 40 + nav.offsetHeight + nav.offsetTop)
				} else {
					let final = num.toString() + 'px'
					nav.style.setProperty('margin-top', final)
				}
			}
		} else {
			// scroll sideNav Down
			if (e.deltaY < -1.5) {
				let nav = document.getElementsByClassName('sideNavUL')[0]
				let marginTop = window.getComputedStyle(nav).getPropertyValue('margin-top')
				let pxRegex = /px/
				let stringNum = marginTop.replace(pxRegex, '')
				let modifier = e.deltaY / 2.5
				let num = Number.parseInt(stringNum, 10) - modifier
				if (num < 18.5) {
					let final = num.toString() + 'px'
					nav.style.setProperty('margin-top', final)
				} else {
					let headerShadowElement = document.getElementsByClassName('headerAntonio')[0]
					headerShadowElement.style.boxShadow = ''
					nav.style.setProperty('margin-top', '18.5px')
				}
			}
		}
	}

	const sideNavScrollExit = () => {
		// Reset everything
		document.onwheel = null
		window.onwheel = null
		document.documentElement.style.overflow = ''
	}

	const sideNavScrollLock = () => {
		// Locking
		document.documentElement.style.overflow = 'hidden'
		// Do the scrolling
		window.onwheel = sideNavScroll
	}

	const sideNavScrollCheck = () => {
		// So this bit does not work from the original way I had intended, however the current result is what is desired so no further
		// refactor is required until something else related to it changes
		// The function is immidiately invoking and creating a similar result to if this was merely a onMouseEnter, lock
		document.onwheel = sideNavScrollLock(document.documentElement.scrollHeight)
	}

	const [offset, setOffset] = useState()
	const [spacing, setSpacing] = useState()

	useLayoutEffect(() => {
		let value = window
			.getComputedStyle(document.getElementsByClassName('headerAntonio')[0])
			.getPropertyValue('width')
		let pxRegex = /px/
		let stringNum = value.replace(pxRegex, '')
		let numValue = parseInt(stringNum, 10)

		let value2 = window
			.getComputedStyle(document.getElementsByClassName('tabCollection')[0])
			.getPropertyValue('z-index')
		let stringNum2 = value2.replace(pxRegex, '')
		let numValue2 = parseInt(stringNum2, 10)
		// This numValue2 is the z index which I will be using media Queries to adjust, then inside the tabs when the state for spacing
		//changes according to the media query the spacing value will change the in between spacing of all the tabs

		setOffset(numValue)
		setSpacing(numValue2)
	})

	useLayoutEffect(() => {
		// This effect manages the sideNav's size in comparison to the viewport and dynamically attaches functions to control scrolling
		let nav = document.getElementsByClassName('sideNavUL')[0]
		let navArea = document.getElementsByClassName('sideNav')[0]
		if (window.innerHeight < nav.offsetHeight + 55) {
			console.log('The box is too large by about: ' + (55 + nav.offsetHeight - window.innerHeight))
			let value = window.getComputedStyle(nav).getPropertyValue('border-right-style')
			// Here in order to detect if the mouse is currently over the sideNav, even without moving the mouse, a :hover
			// is used to change data about the nav's css and we check it to see if the value has been changed
			if (value === 'hidden') {
				// Mouse is already inside the sideNav
				sideNavScrollCheck()
			}
			navArea.onmouseenter = sideNavScrollCheck
			navArea.onmouseleave = sideNavScrollExit
		} else {
			console.log('The box has space, about: ' + (window.innerHeight - (nav.offsetHeight + 55)))
			navArea.onmouseenter = null
			navArea.onmouseleave = null
			sideNavScrollExit()
			// Set the box to be at the top & Clear the drop shadow
			let headerShadowElement = document.getElementsByClassName('headerAntonio')[0]
			headerShadowElement.style.boxShadow = ''
			nav.style.setProperty('margin-top', '18.5px')
		}
	}, [
		navHomeSection,
		navWordGeneratorSection,
		navAutojackSection,
		navRandomSection,
		navPortfolioSection,
	])

	const [dimensions, setDimensions] = useState()

	const updateDimensions = () => {
		setDimensions([window.innerHeight])
	}

	useEffect(() => {
		window.onresize = updateDimensions
	}, [])

	return (
		<>
			<Head>
				<meta name="description" content="Antonio's Portfolio Site" />
				<meta name="author" content="Antonio Zamora, zamora88875@gmail.com" />
				<meta name="designer" content="Jess Simons, jess.simons.design@gmail.com" />
				<meta name="keywords" content="portfolio, front end development, Antonio" />
				<meta name="theme-color" content="#262538" />
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
				<HamburgerSVG focus={tabClick} selected={selectedTab[0]} />
				<GithubSVG />
			</header>

			<nav className="nav inline">
				<div className="sideNav navText">
					<ul className="sideNavUL">
						<li className="titleList" onMouseDown={navToggle}>
							<div className={homeClass} id="sectionHome">
								<Icons iconName="drop" sideNavHead={navHomeSection} color={homeClass} />
								<a className="home">home</a>
							</div>
						</li>
						{navHomeSection}
						<li className="titleList" onMouseDown={navToggle}>
							<div className={wordGeneratorClass} id="sectionWordGenerator">
								<Icons
									iconName="drop"
									sideNavHead={navWordGeneratorSection}
									color={wordGeneratorClass}
								/>
								<a className="wordGenerator" id="section">
									proj0_word_generator
								</a>
							</div>
						</li>
						{navWordGeneratorSection}
						<li className="titleList" onMouseDown={navToggle}>
							<div className={autojackClass} id="sectionAutojack">
								<Icons iconName="drop" sideNavHead={navAutojackSection} color={autojackClass} />
								<a className="autojack" id="section">
									proj1_autojack
								</a>
							</div>
						</li>
						{navAutojackSection}
						<li className="titleList" onMouseDown={navToggle}>
							<div className={randomTestClass} id="sectionRandomTest">
								<Icons iconName="drop" sideNavHead={navRandomSection} color={randomTestClass} />
								<a className="randomTest" id="section">
									proj2_random_test
								</a>
							</div>
						</li>
						{navRandomSection}
						<li className="titleList" onMouseDown={navToggle}>
							<div className={portfolioClass} id="sectionPortfolio">
								<Icons iconName="drop" sideNavHead={navPortfolioSection} color={portfolioClass} />
								<a className="portfolio" id="section">
									proj3_portfolio
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
					dimensions={dimensions}
					offset={offset}
					spacing={spacing}
				/>
				<Tab
					content="proj0.tab"
					id="wordGeneratorTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[1]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={wordGeneratorClass}
					dimensions={dimensions}
					offset={offset}
					spacing={spacing}
				/>
				<Tab
					content="proj1.tab"
					id="autojackTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[2]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={autojackClass}
					dimensions={dimensions}
					offset={offset}
					spacing={spacing}
				/>
				<Tab
					content="proj2.tab"
					id="randomTestTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[3]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={randomTestClass}
					dimensions={dimensions}
					offset={offset}
					spacing={spacing}
				/>
				<Tab
					content="proj3.tab"
					id="portfolioTab"
					focus={tabClick}
					destroy={destroyTab}
					position={numberPosition[4]}
					selectedTab={selectedTab[0]}
					grabTabExistence={grabTabExistence}
					headerTabs={headerTabs}
					activeClass={portfolioClass}
					dimensions={dimensions}
					offset={offset}
					spacing={spacing}
				/>
			</div>
			<body>
				<div className="bodyPosition">
					{displayedTab}
					{title}
				</div>
			</body>
		</>
	)
}
