import Image from "next/image"

export const Footer = () => {
	return (
		<footer className="w-full h-12 bg-blacks flex items-center justify-center space-x-2 text-whites text-sm font-semibold mb-20 md:mb-0">
			<Image
				height={72}
				width={72}
				src="/logo.png"
				alt="Logo"
			/>
			<p>Mateo Gonzalez 2024</p>
		</footer>
	)
}
