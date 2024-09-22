"use client"

import { Contact } from "@/templates/contact/Contact"
import { Experience } from "@/templates/experience/Experience"
import { Footer } from "@/templates/footer/Footer"
import { Hero } from "@/templates/hero/Hero"
import { Navbar } from "@/templates/navbar/Navbar"
import { Project } from "@/templates/project/Project"
import { Technology } from "@/templates/technology/Technology"
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
