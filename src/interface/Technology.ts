interface TechProps {
	name: string
}

export interface Technology {
	specify: string
	technologies: TechProps[]
}
export interface TechnologyProps {
	id: string
	tittle: string
	technology: Technology[]
}
