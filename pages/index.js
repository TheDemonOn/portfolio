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

	let selectedTab = 'home'

	const [displayedTab, setDisplayedTab] = useState()
	const [title, setTitle] = useState()

	useEffect(() => {
		switch (selectedTab) {
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
	}, [])

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
							<div className="yellow">home</div>
						</li>
						<ul>
							<li>
								<div>welcome</div>
							</li>
							<li>
								<div>about me</div>
							</li>
							<li>
								<div>projects</div>
							</li>
							<li>
								<div>contact</div>
							</li>
						</ul>
						<li>
							<div className="grey">proj1_word_generator</div>
						</li>
						<ul>
							<li>
								<div className="grey">overview</div>
							</li>
							<li>
								<div className="grey">step1</div>
							</li>
							<li>
								<div className="grey">step2</div>
							</li>
							<li>
								<div className="grey">step3</div>
							</li>
							<li>
								<div className="grey">challenges</div>
							</li>
							<li>
								<div className="grey">successes</div>
							</li>
							<li>
								<div className="grey">screenshots</div>
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
