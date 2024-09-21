"use client"
import { Language } from "@/interface/Language"
import { useThemeLanguage } from "@/context/ThemeLanguage"

export const useLanguage = (): Language => {
	const { language } = useThemeLanguage()

	const languageData: Language = {
		navbar:
			language === "es"
				? {
						id: "mi",
						sections: [
							{ name: "Sobre mí", path: "mi" },
							{ name: "Proyectos", path: "proyectos" },
							{ name: "Tecnologias", path: "tecnologias" },
							{ name: "Contáctame", path: "contacto" },
						],
						language: "Español",
				  }
				: {
						id: "me",
						sections: [
							{ name: "About me", path: "me" },
							{ name: "Projects", path: "projects" },
							{ name: "Technologies", path: "technologies" },
							{ name: "Contact me", path: "contact" },
						],
						language: "English",
				  },
		hero:
			language === "es"
				? {
						position: "Desarrollador Full Stack y Mobile",
						description:
							"Ingeniero en Telecomunicaciones con más de 2 años de experiencia en aplicaciones web escalables, maquetación responsive, uso de versionamiento GIT, desarrollo de Rest API, implementación de comunicación SOAP e REST, gestionamiento de bases de datos SQL y NoSQL, desarrollo móvil y mantenimiento de sistemas empresariales bajo metodologías ágiles Scrum.",
						cv: "Hoja de vida",
				  }
				: {
						position: "FullStack and Mobile Developer",
						description:
							"Telecommunications engineer with more than 2 years of experience in scalable web applications, responsive layout, use of GIT versioning, development of Rest API, implementation of SOAP and REST communication, management of SQL and NoSQL databases, Mobile development and maintenance of business systems under agile Scrum methodologies.",
						cv: "Resume",
				  },
		workExperience:
			language === "es"
				? {
						tittle: "EXPERIENCIA LABORAL",
						company: ["Samtel Consultores Colombia", "Banco Bancamia"],
						job: [
							{
								tittleJob: "Analista Programador",
								description:
									"✅Desarrollo e implementación de aplicaciones web, integracion de APIs, gestionamiento de bases de datos SQL y NoSQL, implementación de comunicación SOAP e REST y desarrollo mobile bajo metodologías Scrum. ✅En este cargo desempeñe tareas como. - Optimicé el rendimiento de aplicaciones web, reduciendo el tiempo de carga en un 20%. - Desarrollé e implementé nuevas funcionalidades que mejoraron la experiencia del usuario y aumentaron la productividad en un 30%",
							},
							{
								tittleJob: "Analista de desarrollo",
								description:
									"✅Promovido luego de 3 meses de Semillero al cargo de Analista de desarrollo, en donde desempeñe tareas como. - Mantenimiento y optimización de diferentes proyectos web y mobile para mejorar el rendimiento de las aplicaciones. - Desarrollo de nuevas funcionalidades o rediseño de pantallas de los proyectos existentes",
							},
						],
				  }
				: {
						tittle: "WORK EXPERIENCE",
						company: ["Samtel Consultores Colombia", "Banco Bancamia"],
						job: [
							{
								tittleJob: "Programmer analyst",
								description:
									"✅Development and implementation of web applications, integration of APIs, management of SQL and NoSQL databases, implementation of SOAP and REST communication and mobile development under Scrum methodologies. ✅ In this position you perform tasks such as. - Optimized web application performance, reducing load time by 20%. - I developed and implemented new features that improved the user experience and increased productivity by 30%",
							},
							{
								tittleJob: "Developer analyst",
								description:
									"✅Promoted after 3 months from Semillero to the position of Development Analyst, where he performs tasks such as. - Maintenance and optimization of different web and mobile projects to improve the performance of applications. - Development of new functionalities or redesign of screens of existing projects",
							},
						],
				  },
		projects:
			language === "es"
				? {
						id: "proyectos",
						tittle: "PROYECTOS",
						project: [
							{
								tittle: "Adopt Pet",
								images: [
									{ url: "/adoptPet/f1.png" },
									{ url: "/adoptPet/f2.png" },
									{ url: "/adoptPet/f2.png" },
								],
								description:
									"PWA que simplifica la adopción de mascotas en Bogotá mediante geolocalización. Los usuarios pueden publicar y encontrar mascotas cercanas, facilitando conexiones rápidas y seguras con adoptantes.",
								technologies: [
									"Html",
									"Tailwind",
									"React",
									"Nextjs",
									"Nestjs",
									"MongoDB",
									"AWS",
								],
								url: "https://adopt-pet-three.vercel.app/",
							},
							{
								tittle: "Angular Store",
								images: [
									{ url: "/angularStore/f1.png" },
									{ url: "/angularStore/f2.png" },
									{ url: "/angularStore/f3.png" },
								],
								description:
									"Tienda en línea interactiva con funcionalidades avanzadas para productos, categorías y detalles. Implementado con diseño responsivo para una experiencia de compra fluida.",

								technologies: ["Html", "Sass", "Angular", "TypeScript"],
								url: "https://63af13f06fc0c508ae1f5f60--idyllic-profiterole-21cd83.netlify.app/home",
							},
							{
								tittle: "Portafolio",
								images: [
									{ url: "/portfolio/f1.png" },
									{ url: "/portfolio/f2.png" },
									{ url: "/portfolio/f3.png" },
								],
								description:
									"Un portafolio dinámico que destaca mis habilidades y proyectos, con modo oscuro y traducción de idiomas, optimizado para todos los dispositivos.",

								technologies: ["Html", "Tailwind", "React", "Nextjs"],
								url: "",
							},
							{
								tittle: "Travel Page",
								images: [
									{ url: "/travelPage/f1.png" },
									{ url: "/travelPage/f2.png" },
									{ url: "/travelPage/f3.png" },
								],

								description:
									"Plataforma interactiva que ofrece información detallada sobre destinos turísticos. Diseño responsivo y modo oscuro para una experiencia inmersiva.",

								technologies: ["Html", "Tailwind", "JavaScript"],
								url: "https://mateogonzalezamortegui.github.io/Travel-page/index.html",
							},
							{
								tittle: "Lista de To-Do App",
								images: [
									{ url: "/todoPage/f1.png" },
									{ url: "/todoPage/f2.png" },
									{ url: "/todoPage/f3.png" },
								],
								description:
									"Aplicación intuitiva para gestionar tareas con funciones de edición y seguimiento. Desarrollado con diseño responsivo y funcionalidades completas.",

								technologies: ["Html", "Css", "React"],
								url: "https://mateogonzalezamortegui.github.io/ToDo-ReactApp/",
							},
							{
								tittle: "Landing Page",
								images: [
									{ url: "/landingPage/f1.png" },
									{ url: "/landingPage/f2.png" },
									{ url: "/landingPage/f3.png" },
								],
								description:
									"Reto de Frontend Mentor, una página de aterrizaje optimizada con diseño adaptable y modo oscuro para mejorar la experiencia del usuario.",

								technologies: ["Html", "Sass", "JavaScript"],
								url: "https://mateogonzalezamortegui.github.io/Landing-Page/",
							},
						],
						cta: "Ver pagina",
				  }
				: {
						id: "projects",
						tittle: "PROJECTS",
						project: [
							{
								tittle: "Adopt Pet",
								images: [
									{ url: "/adoptPet/f1.png" },
									{ url: "/adoptPet/f2.png" },
									{ url: "/adoptPet/f2.png" },
								],

								description:
									"PWA that simplifies the adoption of pets in Bogota by geolocation. Users can post and find nearby pets, facilitating quick and secure connections with adopters.",
								technologies: [
									"Html",
									"Tailwind",
									"React",
									"Nextjs",
									"Nestjs",
									"MongoDB",
									"AWS",
								],
								url: "https://adopt-pet-three.vercel.app/",
							},
							{
								tittle: "Angular Store",
								images: [
									{ url: "/angularStore/f1.png" },
									{ url: "/angularStore/f2.png" },
									{ url: "/angularStore/f3.png" },
								],
								description:
									"Interactive online store with advanced features for products, categories and details. Implemented with responsive design for a smooth shopping experience.",
								technologies: ["Html", "Sass", "Angular", "TypeScript"],
								url: "https://63af13f06fc0c508ae1f5f60--idyllic-profiterole-21cd83.netlify.app/home",
							},
							{
								tittle: "Portfolio",
								images: [
									{ url: "/portfolio/f1.png" },
									{ url: "/portfolio/f2.png" },
									{ url: "/portfolio/f3.png" },
								],
								description:
									"A dynamic portfolio that highlights my skills and projects, with dark mode and language translation, optimized for all devices.",
								technologies: ["Html", "Tailwind", "React", "Nextjs"],
								url: "",
							},
							{
								tittle: "Travel Page",
								images: [
									{ url: "/travelPage/f1.png" },
									{ url: "/travelPage/f2.png" },
									{ url: "/travelPage/f3.png" },
								],
								description:
									"Interactive platform that offers detailed information about tourist destinations. Responsive design and dark mode for an immersive experience.",
								technologies: ["Html", "Tailwind", "JavaScript"],
								url: "https://mateogonzalezamortegui.github.io/Travel-page/index.html",
							},
							{
								tittle: "To-Do App",
								images: [
									{ url: "/todoPage/f1.png" },
									{ url: "/todoPage/f2.png" },
									{ url: "/todoPage/f3.png" },
								],
								description:
									"Intuitive application to manage tasks with editing and tracking functions. Developed with responsive design and full functionalities.",
								technologies: ["Html", "Css", "React"],
								url: "https://mateogonzalezamortegui.github.io/ToDo-ReactApp/",
							},
							{
								tittle: "Landing Page",
								images: [
									{ url: "/landingPage/f1.png" },
									{ url: "/landingPage/f2.png" },
									{ url: "/landingPage/f3.png" },
								],
								description:
									"Frontend Mentor Challenge, an optimized landing page with responsive design and dark mode to improve the user experience.",
								technologies: ["Html", "Sass", "JavaScript"],
								url: "https://mateogonzalezamortegui.github.io/Landing-Page/",
							},
						],
						cta: "Wacth page",
				  },
		technologies:
			language === "es"
				? {
						id: "tecnologias",
						tittle: "TECNOLOGIAS",
						technology: [
							{
								specify: "FRONTEND",
								technologies: [
									{ name: "HTML" },
									{ name: "CSS" },
									{ name: "SASS" },
									{ name: "Tailwind" },
									{ name: "JavaScript" },
									{ name: "TypeScript" },
									{ name: "React" },
									{ name: "Nextjs" },
									{ name: "Angular" },
								],
							},
							{
								specify: "BACKEND",
								technologies: [
									{ name: "Nodejs" },
									{ name: "Nestjs" },
									{ name: "Java" },
									{ name: "SpringBoot" },
									{ name: "MongoDB" },
									{ name: "MySQL" },
								],
							},
							{
								specify: "NUBE",
								technologies: [
									{ name: "Docker" },
									{ name: "AWS" },
									{ name: "Azure" },
								],
							},
						],
				  }
				: {
						id: "technologies",
						tittle: "TECHNOLOGIES",
						technology: [
							{
								specify: "FRONTEND",
								technologies: [
									{ name: "HTML" },
									{ name: "CSS" },
									{ name: "SASS" },
									{ name: "Tailwind" },
									{ name: "JavaScript" },
									{ name: "TypeScript" },
									{ name: "React" },
									{ name: "Nextjs" },
									{ name: "Angular" },
								],
							},
							{
								specify: "BACKEND",
								technologies: [
									{ name: "Nodejs" },
									{ name: "Nestjs" },
									{ name: "Java" },
									{ name: "SpringBoot" },
									{ name: "MongoDB" },
									{ name: "MySQL" },
								],
							},
							{
								specify: "CLOUD",
								technologies: [
									{ name: "Docker" },
									{ name: "AWS" },
									{ name: "Azure" },
								],
							},
						],
				  },
		contact:
			language === "es"
				? {
						id: "contacto",
						tittle: "Contactame",
				  }
				: {
						id: "contact",
						tittle: "Contact me",
				  },
	}
	return languageData
}
