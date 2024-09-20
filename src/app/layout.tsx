import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeLanguageProvider } from "@/context/ThemeLanguage"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Mateo Gonzalez",
	description:
		"Portafolio, hoja de vida, programador web, fronend, fullstack, react, angular, proyectos web",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ThemeLanguageProvider>{children}</ThemeLanguageProvider>
			</body>
		</html>
	)
}
