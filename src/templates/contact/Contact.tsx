"use client"
import { Tittle } from "@/components/UI/Tittle"
import { useLanguage } from "@/hooks/useLanguage"
import { CardContact } from "./CardContact"

export const Contact = () => {
	const { contact } = useLanguage()
	return (
		<section
			id={contact.id}
			className="w-11/12 my-0 mx-auto mt-8 mb-8 md:mb-12"
		>
			<Tittle tittle={contact.tittle} />
			<article className="grid gap-5 mt-5 md:grid-cols-2 font-bold">
				{contact.sections.map((section, index) => (
					<CardContact
						key={index}
						Index={index}
						description={section.description}
						socialMedia={section.socialMedia}
					/>
				))}
			</article>
		</section>
	)
}
