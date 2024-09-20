interface ButtonJobProps {
	job: string
	isSelected: boolean
	onClick: () => void
}
export const ButtonCompany = ({ job, isSelected, onClick }: ButtonJobProps) => {
	return (
		<button
			onClick={onClick}
			className={`row-start-2 p-2 text-center rounded-md lg:w-10/12 lg:my-0 lg:mx-auto ${
				isSelected ? "exp" : "exp_hover"
			}`}
		>
			{job}
		</button>
	)
}
