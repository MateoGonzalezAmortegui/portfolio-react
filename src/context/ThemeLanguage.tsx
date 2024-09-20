"use client"
import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext,
} from "react"

interface ThemeLanguageContextProps {
	language: string
	toggleLanguage: () => void
	theme: string
	toggleTheme: () => void
}
interface ThemeLanguageProviderProps {
	children: ReactNode
}

const ThemeLanguageContext = createContext<
	ThemeLanguageContextProps | undefined
>(undefined)

export const ThemeLanguageProvider = ({
	children,
}: ThemeLanguageProviderProps) => {
	const [language, setLanguage] = useState<string>("es")
	const [theme, setTheme] = useState<string>("light")

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme) {
			setTheme(savedTheme)
			document.documentElement.classList.add(savedTheme)
		}
	}, [])

	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"))
	}

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		setTheme(newTheme)
		document.documentElement.classList.remove(theme)
		document.documentElement.classList.add(newTheme)
		localStorage.setItem("theme", newTheme)
	}

	return (
		<ThemeLanguageContext.Provider
			value={{ language, toggleLanguage, theme, toggleTheme }}
		>
			{children}
		</ThemeLanguageContext.Provider>
	)
}

export const useThemeLanguage = (): ThemeLanguageContextProps => {
	const context = useContext(ThemeLanguageContext)
	if (!context) {
		throw new Error(
			"useThemeLanguage must be used within a ThemeLanguageProvider"
		)
	}
	return context
}
