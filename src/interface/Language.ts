import { ContactProps } from "./Contact"
import { HeroProps } from "./Hero"
import { NavbarProps } from "./Navbar"
import { ProjectProps } from "./Project"
import { TechnologieProps } from "./Technologie"

export interface Language {
	navbar: NavbarProps
	hero: HeroProps
	workExperience: WorkExperienceProps
	projects: ProjectProps
	technologies: TechnologieProps
	contact: ContactProps
}
