"use client"
import { Moon, Sun } from "@/components/icons"

import { useLanguage } from "@/hooks/useLanguage"
import { useThemeLanguage } from "@/context/ThemeLanguage"

import { Sections, Flag, ButtonsMobile, SecImages } from "./"

export const Navbar = () => {
	const { language, toggleLanguage, theme, toggleTheme } = useThemeLanguage()
	const { navbar } = useLanguage()

	return (
		<>
			{/* Mobile View */}
			<nav className="fixed bottom-0 left-0 z-50 grid content-center w-full h-20 grid-cols-6 shadow-inner md:hidden place-items-center bg-whites dark:bg-Gray4">
				{navbar.sections.map((section, index) => (
					<ButtonsMobile
						key={index}
						Index={index}
						path={section.path}
					/>
				))}
				{theme == "light" ? (
					<Moon
						width={38}
						onClick={toggleTheme}
					/>
				) : (
					<Sun
						width={38}
						onClick={toggleTheme}
					/>
				)}
				<Flag
					Language={language}
					onClick={toggleLanguage}
				/>
			</nav>

			{/* Desktop View */}
			<header className="sticky top-0 z-50 bg-white shadow-md dark:bg-Gray4 dark:text-whites">
				<nav className="items-center justify-between hidden w-full h-20 p-4 shadow-md md:flex drop-shadow-md dark:bg-Gray4 dark:text-whites">
					<div className="text-lg font-black">
						<SecImages />
					</div>

					<div className="flex items-center justify-center space-x-4 text-base font-bold lg:text-lg">
						{navbar.sections.map((section, index) => (
							<Sections
								key={index}
								name={section.name}
								path={section.path}
							/>
						))}
					</div>

					<div className="flex space-x-2">
						<div className="flex items-center">
							<button
								className="p-2 rounded-lg effect_items_nav"
								onClick={toggleTheme}
							>
								{theme == "light" ? <Moon width={28} /> : <Sun width={28} />}
							</button>
						</div>

						<button
							className="p-2 text-base font-bold rounded-lg effect_items_nav"
							onClick={toggleLanguage}
						>
							<Flag Language={language} />
						</button>
					</div>
				</nav>
			</header>
		</>
	)
}
