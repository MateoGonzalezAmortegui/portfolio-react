import { Cellphone } from "@/components/icons/Cellphone"
import { Colombia } from "@/components/icons/Colombia"
import { Email } from "@/components/icons/Email"
import { Linkedin } from "@/components/icons/Linkedin"
import { SocialMediaProps } from "@/interface/Contact"
import Link from "next/link"

interface CardContactProps {
	Index: number
	description: string
	socialMedia?: SocialMediaProps[]
}

export const CardContact = ({
	Index,
	description,
	socialMedia,
}: CardContactProps) => {
	return (
		<div className="flex items-center justify-center">
			{Index == 0 && <Colombia width={32} />}
			{Index == 1 && (
				<Cellphone
					width={32}
					className="dark:text-Blues"
				/>
			)}
			{Index == 2 && <Email width={32} />}
			{description == ""
				? socialMedia?.map((network, index) => (
						<Link
							className="flex flex-col items-center justify-center"
							href={network.url}
							target="_blank"
							key={index}
						>
							{network.name == "Linkedin" && <Linkedin width={50} />}
							{network.name}
						</Link>
				  ))
				: description}
		</div>
	)
}
