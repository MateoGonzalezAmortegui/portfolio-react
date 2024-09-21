import Link from "next/link"

interface SectionProps {
	name: string
	path: string
}

export const Sections = ({ name, path }: SectionProps) => {
	return (
		<Link
			className="box-border p-2 rounded-lg effect_items_nav"
			href={`#${path}`}
		>
			{name}
		</Link>
	)
}
