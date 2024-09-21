export const DescriptionProject = ({ text }: { text: string }) => {
	return (
		<p className="pb-2 font-normal text-justify border-b text-Gray3 border-cyan-400 dark:border-gray-500 dark:text-whites">
			{text}
		</p>
	)
}
