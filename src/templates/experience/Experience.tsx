"use client"

import { Tittle } from "@/components/UI/Tittle"
import { useLanguage } from "@/hooks/useLanguage"

export const Experience = () => {
	const { workExperience } = useLanguage()
	return (
		<>
			<div className="w-full h-[47rem] md:h-0 md:w-0 "></div>
			<section className="w-11/12 mx-auto my-0 mb-12 md:mt-8">
				<Tittle tittle={workExperience.tittle} />

				<article className="mt-9">
					<div className="lg:grid lg:grid-cols-5">
						<div className="flex pb-2 space-x-4 font-semibold border-b-2 lg:grid lg:grid-rows-4 lg:gap-4 lg:border-0">
							<button className="row-start-2 p-2 text-center rounded-md lg:w-10/12 lg:my-0 lg:mx-auto">
								Bancamia Bank
							</button>
						</div>

						<div className="p-6 border-b-2 rounded-md shadow-md border-x-2 dark:shadow-purple-500 shadow-cyan-500 lg:col-start-2 lg:col-span-4 lg:w-10/12 lg:my-0 lg:mx-auto lg:p-12">
							<div className="space-y-6">
								<h3 className="text-lg font-bold text-Blues dark:text-purples">
									➤ Semillero JR
								</h3>
								<p>
									✅ Desarrollo e implementación de Microservicios, frontend y
									desarrollo mobile bajo metodologías Scrum.
								</p>
								<p>
									📝1. Mantenimiento y depuración de diferentes proyectos para
									mejorar el rendimiento y tener un código limpio.
								</p>
								<p>
									📝2. Desarrollo de implementaciones o servicios para clientes
									de la red.
								</p>
							</div>
						</div>
					</div>
				</article>
			</section>
		</>
	)
}
