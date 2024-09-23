"use client"

import {
	Contact,
	Experience,
	Footer,
	Hero,
	Navbar,
	Project,
	Technology,
} from "@/templates"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Home() {
	useEffect(() => {
		AOS.init({})
	}, [])

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
