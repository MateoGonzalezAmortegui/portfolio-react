export const Sections = ({ section }: { section: string }) => {
	return (
		<a
			className="box-border p-2 rounded-lg effect_items_nav"
			href={`#${section}`}
		>
			{section}
		</a>
	)
}
