interface ImagesProject {
	url: string
}

export interface ProjectProps {
	tittle: string
	images: ImagesProject[]
	description: string
	technologies: string[]
	urlDeploy: string
	urlRepo: string
}

export interface ProjectsProps {
	id: string
	tittle: string
	project: ProjectProps[]
	cta: string
}
