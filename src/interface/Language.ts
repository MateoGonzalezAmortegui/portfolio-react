import { ContactProps } from "./Contact"
import { HeroProps } from "./Hero"
import { NavbarProps } from "./Navbar"
import { ProjectsProps } from "./Project"
import { TechnologyProps } from "./Technology"

export interface Language {
	navbar: NavbarProps
	hero: HeroProps
	workExperience: WorkExperienceProps
	projects: ProjectsProps
	technologies: TechnologyProps
	contact: ContactProps
}
