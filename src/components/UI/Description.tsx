export const Description = ({ text }: { text: string }) => {
	return (
		<p className="text-base font-light text-justify text-blacks md:text-whites md:text-sm lg:drop-shadow-xl lg:text-xl lg:font-extrabold">
			{text}
		</p>
	)
}
