import { Contact } from "@/templates/contact/Contact"
import { Experience } from "@/templates/experience/Experience"
import { Footer } from "@/templates/footer/Footer"
import { Hero } from "@/templates/hero/Hero"
import { Navbar } from "@/templates/navbar/Navbar"
import { Project } from "@/templates/project/Project"
import { Technology } from "@/templates/technology/Technology"

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Experience />
				<Project />
				<Technology />
				<Contact />
			</main>
			<Footer />
		</>
	)
}
