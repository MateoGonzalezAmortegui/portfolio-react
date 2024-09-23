import {
	Angular,
	AWS,
	Css,
	Html,
	JavaScript,
	MongoDb,
	Nestjs,
	Nextjs,
	React,
	Sass,
	Tailwind,
	TypeScript,
} from "@/components/icons"
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
