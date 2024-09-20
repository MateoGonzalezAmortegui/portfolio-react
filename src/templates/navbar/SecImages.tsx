import Image from "next/image"

export const SecImages = () => {
	return (
		<>
			<Image
				className="hidden h-12 dark:flex lg:dark:hidden"
				src="/logoN.png"
				alt="logo"
				width={87}
				height={48}
			/>
			<Image
				className="hidden h-16 lg:dark:flex"
				src="/logoN.png"
				alt="logo"
				width={144}
				height={64}
			/>

			<Image
				className="h-12 dark:hidden lg:hidden"
				src="/logoL.png"
				alt="logo"
				width={87}
				height={48}
			/>
			<Image
				className="h-16 dark:hidden md:hidden lg:flex"
				src="/logoL.png"
				alt="logo"
				width={144}
				height={64}
			/>
		</>
	)
}
