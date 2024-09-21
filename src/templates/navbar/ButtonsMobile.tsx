import { Briefcase } from "@/components/icons/Briefcase"
import { Cellphone } from "@/components/icons/Cellphone"
import { Profile } from "@/components/icons/Profile"
import { Technology } from "@/components/icons/Technology"

interface ButtonsMobileProps {
	Tittle: string
	Index: number
}

export const ButtonsMobile = ({ Tittle, Index }: ButtonsMobileProps) => {
	return (
		<a href={`#${Tittle}`}>
			{Index == 0 && (
				<Profile
					width={38}
					className=" dark:text-white"
				/>
			)}
			{Index == 1 && (
				<Briefcase
					width={38}
					className=" dark:text-white"
				/>
			)}
			{Index == 2 && (
				<Technology
					width={38}
					className=" dark:text-white"
				/>
			)}
			{Index == 3 && (
				<Cellphone
					width={38}
					className=" dark:text-white"
				/>
			)}
		</a>
	)
}
