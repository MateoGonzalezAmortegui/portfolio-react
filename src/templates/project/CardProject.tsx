import { SubTittle, Button } from "@/components/UI"

import { LinkGithub } from "@/components/common/LinkGithub"

import { ImageCarousel, DescriptionProject, TechnologyProject } from "./"

import { ProjectProps } from "@/interface/Project"

interface CardProjectProps extends ProjectProps {
	cta: string
}

export const CardProject = ({
	tittle,
	images,
	description,
	technologies,
	urlDeploy,
	urlRepo,
	cta,
}: CardProjectProps) => {
	return (
		<article
			className="card efect_card"
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="2500"
		>
			<ImageCarousel images={images} />
			<div className="p-4 rounded-t-lg">
				<SubTittle
					text={tittle}
					addClass="text-xl  pb-2 drop-shadow-md dark:text-whites"
				/>
				<DescriptionProject text={description} />
				<div className="px-2 pb-2 mt-2 border-b border-blue-400 dark:border-gray-500 drop-shadow-md">
					<TechnologyProject technologies={technologies} />
				</div>

				<div className="flex pb-4 mt-4 justify-evenly drop-shadow-md">
					<LinkGithub
						url={urlRepo}
						addClass="text-black dark:text-white lg:h-10 lg:w-10"
					/>

					<Button
						icon=""
						text={cta}
						url={urlDeploy}
						addClassText="lg:font-bold lg:text-base"
						addClassButton="lg:h-11 lg:w-44"
					/>
				</div>
			</div>
		</article>
	)
}
