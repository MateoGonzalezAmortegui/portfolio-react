interface SubTittleProps {
	text: string
	addClass?: string
}
export const SubTittle = ({ text, addClass }: SubTittleProps) => {
	return (
		<h3
			className={`text-lg font-bold text-Blues dark:text-purples ${addClass}`}
		>
			{text}
		</h3>
	)
}
