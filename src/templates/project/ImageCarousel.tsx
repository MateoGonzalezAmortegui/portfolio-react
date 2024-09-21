"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
interface ImagesProject {
	url: string
}
interface ProjectProps {
	images: ImagesProject[]
}

export const ImageCarousel = ({ images }: ProjectProps) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="relative w-full h-64 overflow-hidden rounded-t-lg">
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
				>
					<figure>
						<Image
							src={image.url}
							alt="project"
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
						/>
					</figure>
				</div>
			))}

			<div className="absolute flex justify-center w-full space-x-2 bottom-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full ${
							index === currentIndex ? "bg-Blues" : "bg-gray-400"
						}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	)
}
