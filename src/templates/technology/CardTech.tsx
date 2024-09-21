import { Angular } from "@/components/icons/Angular"
import { AWS } from "@/components/icons/AWS"
import { Azure } from "@/components/icons/Azure"
import { Css } from "@/components/icons/Css"
import { Docker } from "@/components/icons/Docker"
import { Html } from "@/components/icons/Html"
import { Java } from "@/components/icons/Java"
import { JavaScript } from "@/components/icons/JavaScript"
import { MongoDb } from "@/components/icons/MongoDb"
import { MySQL } from "@/components/icons/MySQL"
import { Nestjs } from "@/components/icons/Nestjs"
import { Nextjs } from "@/components/icons/Nextjs"
import { Nodejs } from "@/components/icons/Nodejs"
import { React } from "@/components/icons/React"
import { Sass } from "@/components/icons/Sass"
import { SpringBoot } from "@/components/icons/SpringBoot"
import { Tailwind } from "@/components/icons/Tailwind"
import { TypeScript } from "@/components/icons/TypeScript"

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
			</span>
			<p className="font-normal text-whites">{nameTech}</p>
		</div>
	)
}
