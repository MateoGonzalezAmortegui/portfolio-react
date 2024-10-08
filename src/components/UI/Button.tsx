import Link from "next/link"
import { Resume } from "../icons/Resume"
import { Rocket } from "../icons/Rocket"

interface ButtonProps {
	text: string
	icon: string
	url: string
	addClassText?: string
	addClassButton?: string
}

export const Button = ({
	text,
	icon,
	url,
	addClassText,
	addClassButton,
}: ButtonProps) => {
	return (
		<Link
			href={url}
			className={`flex items-center h-12 p-4 space-x-2 cursor-pointer justify-evenly rounded-xl w-44 bg-gradient-to-r from-cyan-500 to-blue-500 ${addClassButton} hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500 dark:hover:bg-gradient-to-bl dark:focus:ring-4 dark:focus:outline-none dark:focus:ring-blue-800 effect_button`}
			target="_blank"
		>
			<div className={`font-bold text-whites ${addClassText}`}>{text}</div>
			<div>
				{icon == "cv" ? (
					<Resume
						width={32}
						className="text-white lg:w-12 lg:h-12"
					/>
				) : (
					<Rocket
						width={28}
						className="text-white "
					/>
				)}
			</div>
		</Link>
	)
}
