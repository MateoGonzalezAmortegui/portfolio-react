"use client"
import { Tittle } from "@/components/UI/Tittle"
import { useLanguage } from "@/hooks/useLanguage"
import { CardTechnology } from "./CardTechnology"

export const Technology = () => {
	const { technologies } = useLanguage()

	return (
		<section
			id={technologies.id}
			className="w-full bg-Gray3"
		>
			<div className="w-11/12 mx-auto my-0">
				<Tittle
					tittle={technologies.tittle}
					addClass="pt-8 text-white"
				/>
			</div>

			<div className="grid w-11/12 py-12 mx-auto my-0 gap-7 md:grid-cols-2">
				{technologies.technology.map((tech, index) => (
					<CardTechnology
						key={index}
						specify={tech.specify}
						technologies={tech.technologies}
					/>
				))}
			</div>
		</section>
	)
}
