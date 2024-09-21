import Link from "next/link"
import { Github } from "../icons/Github"

export const LinkGithub = ({ addClass }: { addClass?: string }) => {
	return (
		<Link
			className="effect_button"
			href="https://github.com/MateoGonzalezAmortegui"
			target="_blank"
		>
			<Github
				width={42}
				className={`md:text-white lg:h-16 lg:w-16 ${addClass}`}
			/>
		</Link>
	)
}
