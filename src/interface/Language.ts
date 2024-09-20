interface NavbarProps {
	sections: string[]
	language: string
}
interface HeroProps {
	position: string
	description: string
	cv: string
}
interface WorkExperienceProps {
	tittle: string
	job: string[]
	description: string[]
}

interface ProjectsProps {
	tittle: string
	project: string[]
	description: string[]
}
interface TechnologiesProps {
	tittle: string
}
interface ContactProps {
	tittle: string
}

export interface Language {
	navbar: NavbarProps
	hero: HeroProps
	workExperience: WorkExperienceProps
	projects: ProjectsProps
	technologies: TechnologiesProps
	contact: ContactProps
}
