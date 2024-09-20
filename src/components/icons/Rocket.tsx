import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 16 16"
		{...props}
	>
		<g fill="currentColor">
			<path
				fillRule="evenodd"
				d="m10 16 2-2v-4l1.657-1.657A8 8 0 0 0 16 2.686V0h-2.686a8 8 0 0 0-5.657 2.343L6 4H2L0 6l10 10Zm.5-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
				clipRule="evenodd"
			/>
			<path d="m4.927 13.756-2.683-2.683L0 15l1 1 3.927-2.244Z" />
		</g>
	</svg>
)
export { SvgComponent as Rocket }
