export const CardExperience = ({
	tittleJob,
	description,
}: {
	tittleJob: string
	description: string
}) => {
	return (
		<div className="space-y-6 text-justify">
			<h3 className="text-lg font-bold text-Blues dark:text-purples">
				➤ {tittleJob}
			</h3>
			{description.split(".").map((sentence, index) => (
				<p key={index}>
					{sentence}.<br />
				</p>
			))}
		</div>
	)
}
