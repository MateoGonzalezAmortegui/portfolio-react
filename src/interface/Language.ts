import { ContactProps } from "./Contact"
import { HeroProps } from "./Hero"
import { NavbarProps } from "./Navbar"
import { ProjectProps } from "./Project"
import { TechnologyProps } from "./Technology"

export interface Language {
	navbar: NavbarProps
	hero: HeroProps
	workExperience: WorkExperienceProps
	projects: ProjectProps
	technologies: TechnologyProps
	contact: ContactProps
}
