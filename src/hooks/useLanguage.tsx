"use client"
import { Language } from "@/interface/Language"
import { useThemeLanguage } from "@/context/ThemeLanguage"

export const useLanguage = (): Language => {
	const { language } = useThemeLanguage()

	const languageData: Language = {
		navbar:
			language === "es"
				? {
						sections: ["Sobre mí", "Proyectos", "Tecnologias", "Contáctame"],
						language: "Español",
				  }
				: {
						sections: ["About me", "Projects", "Technologies", "Contact me"],
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
						tittle: "",
						project: [
							"Adopt Pet",
							"Angular Store",
							"Portafolio",
							"Travel Page",
							"Lista de To-Do App",
							"Landing Page",
						],
						description: [
							"Es una innovadora PWA (Aplicación Web Progresiva) que facilita el proceso de adopción de animales en Bogotá a través de un sistema de geolocalización. Con esta app, los usuarios pueden publicar y buscar mascotas cercanas en adopción, mejorando la visibilidad y conectando a los animales necesitados con hogares amorosos en su área. La plataforma no solo hace el proceso más eficiente, sino que también permite gestionar el contacto y la comunicación de manera segura entre adoptantes y propietarios. Todo esto, con una interfaz amigable y tecnología avanzada que garantiza un rendimiento óptimo.",
							"¡Fue creado para una página de comercio electrónico interactivo con toda la información acerca de los productos, categorías, detalles del producto y con la interacción en todo el sitio web! Estaba implementando por lo que fue: Diseño responsivo",
							"¡¡¡Fue creado para mostrar mis habilidades, proyectos y para mostrar un poco acerca de mí Es una página con la interacción en todo el sitio web !!! Estaba implementando por lo que fue: Diseño responsivo y modo oscuro, traducción de idiomas",
							"¡¡¡Fue crear para ser una página web interactiva con toda la información sobre los países o lugar para visitar!!! Estaba implementando para que era: Diseño responsivo y modo oscuro",
							"Se creó una página de lista de tareas interactiva con toda la información sobre las tareas por hacer, tareas completadas y edición de tareas con interacción en todo el sitio web. Estaba implementando por lo que fue: Diseño responsivo",
							"¡¡¡Este proyecto fue un Reto de Frontend Mentor en el cual se trato de desarrollar una pagina de aterrizaje de acuerdo al tamaño de la pantalla y tener una interaccion en la pagina web!!! Fue la aplicación de lo que era: Responsive design y Dark Mode",
						],
				  }
				: {
						tittle: "",
						project: [
							"Adopt Pet",
							"Angular Store",
							"Portfolio",
							"Travel Page",
							"To-Do App",
							"Landing Page",
						],
						description: [
							"Is an innovative PWA (Progressive Web Application) that facilitates the process of animal adoption in Bogotá through a geolocation system. With this app, users can post and search for pets in their area, improving visibility and connecting the animals in need to loving homes in their area. The platform not only makes the process more efficient, but also allows for safe contact and communication between adopters and owners. All this, with a user-friendly interface and advanced technology that guarantees optimal performance.",
							"Was create for a ECommerce page interactive with all information about the products, category´s, product detail and with interaction in all website !! Was implementing so that was: Responsive design",
							"Was create for show my skills, projects and for show a little bit about me It´s a page with interaction in all website !! Was implementing so that was: Responsive design and Dark Mode, Language translation",
							"Was create for be a web page interactive with all information about the countries or place for visit!! Was implementing so that was: Responsive design and Dark Mode",
							"Was create for to-do list page interactive with all information about the tasks for do, completed tasks and edit of tasks with interaction in all website !! Was implementing so that was: Responsive design",
							"This project was a Challenge of Frontend Mentor in which was try to develop a landing page according to size of the screen and have a interaction on web page!! Was implementing so that was: Responsive design and Dark Mode",
						],
				  },
		technologies:
			language === "es"
				? { tittle: "Tecnologias" }
				: { tittle: "Technologies" },
		contact:
			language === "es" ? { tittle: "Contactame" } : { tittle: "Contact me" },
	}
	return languageData
}
