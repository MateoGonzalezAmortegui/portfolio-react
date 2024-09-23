"use client"

import { Tittle } from "@/components/UI"

import { useLanguage } from "@/hooks/useLanguage"

import { ButtonCompany, CardExperience } from "./"

import { useState } from "react"

export const Experience = () => {
	const { workExperience } = useLanguage()
	const [selectedIndex, setSelectedIndex] = useState<number>(0)
	return (
		<>
			<div className="w-full h-[47rem] md:h-0 md:w-0 "></div>
			<section className="w-11/12 mx-auto my-0 mb-12 md:mt-8">
				<Tittle tittle={workExperience.tittle} />

				<article className="mt-9">
					<div
						className="lg:grid lg:grid-cols-5"
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
					>
						<div className="flex pb-2 space-x-4 font-semibold border-b-2 lg:flex-col lg:space-y-5 lg:border-0">
							{workExperience.company.map((company, index) => (
								<ButtonCompany
									key={index}
									job={company}
									isSelected={index === selectedIndex}
									onClick={() => setSelectedIndex(index)}
								/>
							))}
						</div>

						<div className="p-6 border-b-2 rounded-md shadow-md border-x-2 dark:shadow-purple-500 shadow-cyan-500 lg:col-start-2 lg:col-span-4 lg:w-10/12 lg:my-0 lg:mx-auto lg:p-12">
							<CardExperience
								tittleJob={workExperience.job[selectedIndex].tittleJob}
								description={workExperience.job[selectedIndex].description}
							/>
						</div>
					</div>
				</article>
			</section>
		</>
	)
}
