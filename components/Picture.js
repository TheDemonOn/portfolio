import React from 'react'
// There is a proper Next.js component for images but for this site the standard img should suffice

export default function Picture({ src, alt, width, height, srcset, className }) {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			srcSet={srcset}
			className={className}
		></img>
	)
}
