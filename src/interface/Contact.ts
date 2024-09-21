export interface SocialMediaProps {
	name: string
	url: string
}

interface SectionsProps {
	description: string
	socialMedia?: SocialMediaProps[]
}

export interface ContactProps {
	id: string
	tittle: string
	sections: SectionsProps[]
}
