import {
	Ionic,
	Angular,
	AWS,
	Azure,
	Css,
	Docker,
	Html,
	Java,
	JavaScript,
	MongoDb,
	MySQL,
	Nestjs,
	Nextjs,
	Nodejs,
	React,
	Sass,
	SpringBoot,
	Tailwind,
	TypeScript,
} from "@/components/icons"

export const CardTech = ({ nameTech }: { nameTech: string }) => {
	return (
		<div className="w-full flex flex-col items-center drop-shadow-md">
			<span>
				{nameTech == "HTML" && <Html width={50} />}
				{nameTech == "CSS" && <Css width={50} />}
				{nameTech == "SASS" && <Sass width={50} />}
				{nameTech == "Tailwind" && <Tailwind width={50} />}
				{nameTech == "JavaScript" && <JavaScript width={50} />}
				{nameTech == "TypeScript" && <TypeScript width={50} />}
				{nameTech == "React" && <React width={50} />}
				{nameTech == "Nextjs" && <Nextjs width={50} />}
				{nameTech == "Angular" && <Angular width={50} />}
				{nameTech == "Nodejs" && <Nodejs width={50} />}
				{nameTech == "Nestjs" && <Nestjs width={50} />}
				{nameTech == "Java" && <Java width={50} />}
				{nameTech == "SpringBoot" && <SpringBoot width={50} />}
				{nameTech == "MongoDB" && <MongoDb width={50} />}
				{nameTech == "MySQL" && <MySQL width={50} />}
				{nameTech == "Docker" && <Docker width={50} />}
				{nameTech == "AWS" && <AWS width={50} />}
				{nameTech == "Azure" && <Azure width={50} />}
				{nameTech == "React Native" && <React width={50} />}
				{nameTech == "Ionic" && <Ionic width={50} />}
			</span>
			<p className="font-normal text-whites">{nameTech}</p>
		</div>
	)
}
