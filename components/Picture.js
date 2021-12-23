import React from 'react'

export default function Picture({ src, alt, width, height, srcset }) {
	return <img src={src} alt={alt} width={width} height={height} srcset={srcset}></img>
}
