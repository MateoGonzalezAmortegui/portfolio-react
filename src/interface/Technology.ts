interface TechProps {
	name: string
}

export interface TechnologyProps {
	specify: string
	technologies: TechProps[]
}
export interface TechnologiesProps {
	id: string
	tittle: string
	technology: TechnologyProps[]
}
