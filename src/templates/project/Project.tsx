"use client"
import { Tittle } from "@/components/UI"
import { useLanguage } from "@/hooks/useLanguage"
import { CardProject } from "./"

export const Project = () => {
	const { projects } = useLanguage()

	return (
		<section
			id={projects.id}
			className="w-full pb-12 dark:bg-Gray4"
		>
			<div className="w-11/12 mx-auto">
				<Tittle
					tittle={projects.tittle}
					addClass="pt-8 dark:text-white"
				/>

				<section className="grid w-full grid-cols-1 mt-12 gap-9 place-items-center md:grid-cols-2 xl:grid-cols-3">
					{projects.project.map((Project, index) => (
						<CardProject
							key={index}
							tittle={Project.tittle}
							images={Project.images}
							description={Project.description}
							technologies={Project.technologies}
							urlRepo={Project.urlRepo}
							urlDeploy={Project.urlDeploy}
							cta={projects.cta}
						/>
					))}
				</section>
			</div>
		</section>
	)
}
