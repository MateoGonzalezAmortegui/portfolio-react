import { Experience } from "@/templates/experience/Experience"
import { Hero } from "@/templates/hero/Hero"
import { Navbar } from "@/templates/navbar/Navbar"

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Experience />
		</>
	)
}
