import Link from "next/link"
import { Github } from "../icons/Github"

interface LinkGithubProps {
	url: string
	addClass: string
}

export const LinkGithub = ({ url, addClass }: LinkGithubProps) => {
	return (
		<Link
			className="effect_button"
			href={url}
			target="_blank"
		>
			<Github
				width={42}
				className={`${addClass}`}
			/>
		</Link>
	)
}
