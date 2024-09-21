import { SubTittle } from "@/components/UI/SubTittle"

interface CardExperienceProps {
	tittleJob: string
	description: string
}
export const CardExperience = ({
	tittleJob,
	description,
}: CardExperienceProps) => {
	return (
		<div className="space-y-6 text-justify">
			<SubTittle text={`➤ ${tittleJob}`} />

			{description.split(".").map((sentence, index) => (
				<p key={index}>
					{sentence}.<br />
				</p>
			))}
		</div>
	)
}
