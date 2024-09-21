import { Angular } from "@/components/icons/Angular"
import { AWS } from "@/components/icons/AWS"
import { Css } from "@/components/icons/Css"
import { Html } from "@/components/icons/Html"
import { JavaScript } from "@/components/icons/JavaScript"
import { MongoDb } from "@/components/icons/MongoDb"
import { Nestjs } from "@/components/icons/Nestjs"
import { Nextjs } from "@/components/icons/Nextjs"
import { React } from "@/components/icons/React"
import { Sass } from "@/components/icons/Sass"
import { Tailwind } from "@/components/icons/Tailwind"
import { TypeScript } from "@/components/icons/TypeScript"

interface TechnologyProjectProps {
	technologies: string[]
}

export const TechnologyProject = ({ technologies }: TechnologyProjectProps) => {
	return (
		<div className="flex justify-evenly">
			{technologies.includes("Html") && <Html width={32} />}
			{technologies.includes("Css") && <Css width={32} />}
			{technologies.includes("Sass") && <Sass width={32} />}
			{technologies.includes("Tailwind") && <Tailwind width={32} />}
			{technologies.includes("JavaScript") && <JavaScript width={32} />}
			{technologies.includes("TypeScript") && <TypeScript width={32} />}
			{technologies.includes("React") && <React width={32} />}
			{technologies.includes("Nextjs") && <Nextjs width={32} />}
			{technologies.includes("Angular") && <Angular width={32} />}
			{technologies.includes("Nestjs") && <Nestjs width={32} />}
			{technologies.includes("MongoDB") && <MongoDb width={32} />}
			{technologies.includes("AWS") && <AWS width={32} />}
		</div>
	)
}
