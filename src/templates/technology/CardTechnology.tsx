import { SubTittle } from "@/components/UI/SubTittle"
import { CardTech } from "./CardTech"
import { TechnologyProps } from "@/interface/Technology"

export const CardTechnology = ({ specify, technologies }: TechnologyProps) => {
	return (
		<article className="w-full rounded-lg p-3 border-stone-400 efect_card lg:px-11">
			<SubTittle
				text={specify}
				addClass="p-3"
			/>
			<div
				className="w-full grid grid-cols-2 gap-12 md:grid-cols-3"
				data-aos="fade-down-right"
				data-aos-duration="2000"
			>
				{technologies.map((tech, index) => (
					<CardTech
						key={index}
						nameTech={tech.name}
					/>
				))}
			</div>
		</article>
	)
}
