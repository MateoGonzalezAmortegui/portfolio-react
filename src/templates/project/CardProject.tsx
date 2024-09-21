import { SubTittle } from "@/components/UI/SubTittle"
import { Button } from "@/components/UI/Button"
import { LinkGithub } from "@/components/common/LinkGithub"

import { ImageCarousel } from "./ImageCarousel"
import { DescriptionProject } from "./DescriptionProject"
import { TechnologyProject } from "./TechnologyProject"

interface ImagesProject {
	url: string
}
interface ProjectProps {
	tittle: string
	images: ImagesProject[]
	description: string
	technologies: string[]
	url: string
	cta: string
}

export const CardProject = ({
	tittle,
	images,
	description,
	technologies,
	url,
	cta,
}: ProjectProps) => {
	return (
		<article className="card efect_card">
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
					<LinkGithub addClass="text-black dark:text-white lg:h-10 lg:w-10" />

					<Button
						icon=""
						text={cta}
						url={url}
						addClassText="lg:font-bold lg:text-base"
						addClassButton="lg:h-11 lg:w-44"
					/>
				</div>
			</div>
		</article>
	)
}
