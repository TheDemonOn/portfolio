import React from 'react'
import Image from 'next/image'

import cats from '../public/cats.jpg'

export default function EasterEgg() {
	return (
		<>
			<h1 className="easterText">Wow what an explorer!</h1>
			<div className="cats">
				{' '}
				<Image src={cats} layout="responsive" />{' '}
			</div>
		</>
	)
}
