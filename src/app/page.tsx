import { Experience } from "@/templates/experience/Experience"
import { Hero } from "@/templates/hero/Hero"
import { Navbar } from "@/templates/navbar/Navbar"
import { Project } from "@/templates/project/Project"
import { Technology } from "@/templates/technology/Technology"

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Experience />
			<Project />
			<Technology />
		</>
	)
}
