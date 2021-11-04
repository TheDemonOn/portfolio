import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import WordGenerator from '../components/WordGenerator'
import Autojack from '../components/Autojack'
import RandomTest from '../components/RandomTest'
import Portfolio from '../components/Portfolio'

export default function Index() {
	// The index will contain elements that are always there
	// This includes the side nav bar, the tab bar, the background when all tabs are closed, the meta
	// Because these things will communicate top to bottom and are not repeated elsewhere, it is not necessary to turn
	// these elements into components.

	const [selectedTab, setSelectedTab] = useState(['home', 0])
	const [displayedTab, setDisplayedTab] = useState(0)
	const [title, setTitle] = useState()

	const switchTabCheck = (e) => {
		let tab = e.target.className
		if (tab === selectedTab[0]) {
			// See if it can be scrolled to
			if (e.target.id !== 'section') {
				scrollTo(e)
			}
		} else {
			// Switch to tab
			setSelectedTab([tab, e])
			console.log('Tab switched')
		}
	}

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
		console.log(id)
		let element = document.getElementById(id)
		element.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}

	useEffect(() => {
		switch (selectedTab[0]) {
			case 'home':
				setDisplayedTab(<Home />)
				setTitle(
					<Head>
						<title>Home</title>
					</Head>
				)
				break
			case 'wordGenerator':
				setDisplayedTab(<WordGenerator />)
				setTitle(
					<Head>
						<title>Rhyming Word Generator</title>
					</Head>
				)
				break
			case 'autojack':
				setDisplayedTab(<Autojack />)
				setTitle(
					<Head>
						<title>Autojack</title>
					</Head>
				)
			case 'randomTest':
				setDisplayedTab(<RandomTest />)
				setTitle(
					<Head>
						<title>Random Test</title>
					</Head>
				)
			case 'portfolio':
				setDisplayedTab(<Portfolio />)
				setTitle(
					<Head>
						<title>This Site!</title>
					</Head>
				)
			default:
				break
		}
	}, [selectedTab])

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
							<div onClick={switchTabCheck}>
								<a className="home" id="section">
									home
								</a>
							</div>
						</li>
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
						<li>
							<div className="grey" onClick={switchTabCheck}>
								<a className="wordGenerator" id="section">
									proj1_word_generator
								</a>
							</div>
						</li>
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
						<li>
							<div className="grey">proj2_autojack</div>
						</li>
						<li>
							<div className="grey">proj3_random_test</div>
						</li>
						<li>
							<div className="grey">proj4_portfolio</div>
						</li>
					</ul>
				</div>
			</nav>

			<body>
				<div className="nav inline"></div>
				<>
					{displayedTab}
					{title}
				</>
				{/* <WordGenerator></WordGenerator> */}
			</body>
		</>
	)
}
