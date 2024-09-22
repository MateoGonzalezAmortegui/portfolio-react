"use client"
import { Button } from "@/components/UI/Button"
import { LinkGithub } from "@/components/common/LinkGithub"

import { DescriptionHero } from "./DescriptionHero"

import { useLanguage } from "@/hooks/useLanguage"

import Image from "next/image"

export const Hero = () => {
	const { hero } = useLanguage()

	return (
		<section className="relative w-full h-48 drop-shadow-md md:h-[28rem] lg:h-[50rem]">
			<figure>
				<Image
					src="/hero.png"
					alt="hero"
					layout="fill"
					objectFit="cover"
					className="rounded-b-md md:rounded-none"
					priority
				/>
			</figure>
			<article className="relative z-10 grid w-11/12 grid-cols-1 mx-auto my-0 space-y-3 place-items-center md:grid-cols-2 lg:grid-cols-1">
				<figure>
					<Image
						src="/foto.jpg"
						alt="foto"
						width={150}
						height={0}
						className="w-48 h-48 mt-20 rounded-full drop-shadow-md lg:h-72 lg:w-72"
					/>
				</figure>

				<div className="space-y-3 text-center">
					<h1 className="text-2xl font-bold text-blacks drop-shadow-lg md:text-whites md:font-extrabold md:drop-shadow-xl lg:font-black dark:text-Blues">
						Mateo Gonzalez Amortegui
					</h1>

					<p className="text-lg font-medium text-Gray2 drop-shadow-md md:text-Gray1 md:font-semibold md:drop-shadow-lg lg:text-2xl lg:font-extrabold">
						{hero.position}
					</p>

					<p className="text-sm italic font-normal text-Gray4 drop-shadow-sm md:text-Gray1 lg:text-lg lg:font-semibold dark:text-Blues">
						|React/Next.js| |React Native| |Flutter| |Angular| |CSS/SASS,
						Tailwind| |TypeScript| --Micro servicios |Node.js/Express/Nest.js|
						|Java/Spring Boot| |MySQL| |MongoDB| --Nube |AWS| |Azure|
					</p>

					<DescriptionHero text={hero.description} />

					<div className="flex pt-4 space-x-4 justify-evenly md:pt-2 drop-shadow-md">
						<LinkGithub
							url="https://github.com/MateoGonzalezAmortegui"
							addClass="md:text-white lg:h-16 lg:w-16"
						/>

						<Button
							text={hero.cv}
							icon="cv"
							url="/MateoGonzalezAmorteguiHV.pdf"
							addClassText="lg:font-extrabold lg:text-xl"
							addClassButton="lg:h-16 lg:w-56"
						></Button>
					</div>
				</div>
			</article>
		</section>
	)
}
