import { Briefcase } from "@/components/icons/Briefcase"
import { Cellphone } from "@/components/icons/Cellphone"
import { Profile } from "@/components/icons/Profile"
import { Technology } from "@/components/icons/Technology"
import Link from "next/link"

interface ButtonsMobileProps {
	path: string
	Index: number
}

export const ButtonsMobile = ({ path, Index }: ButtonsMobileProps) => {
	return (
		<Link href={`#${path}`}>
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
		</Link>
	)
}
