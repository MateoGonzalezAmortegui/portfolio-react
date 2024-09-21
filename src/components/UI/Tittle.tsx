interface TittleProps {
	tittle: string
	addClass?: string
}

export const Tittle = ({ tittle, addClass }: TittleProps) => {
	return (
		<p
			className={`text-3xl font-semibold font-blacks drop-shadow-md dark:text-Blues ${addClass}`}
		>
			{tittle}
		</p>
	)
}
