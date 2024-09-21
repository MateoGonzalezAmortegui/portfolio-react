interface ImagesProject {
	url: string
}

interface Project {
	tittle: string
	images: ImagesProject[]
	description: string
	technologies: string[]
	url: string
}

export interface ProjectProps {
	id: string
	tittle: string
	project: Project[]
	cta: string
}
