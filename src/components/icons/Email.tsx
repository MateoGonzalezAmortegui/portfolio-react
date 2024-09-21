import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="icon flat-line"
		data-name="Flat Line"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			d="m20.61 5.23-8 6.28a1 1 0 0 1-1.24 0l-8-6.28A1 1 0 0 0 3 6v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-.39-.77Z"
			style={{
				fill: "#2ca9bc",
				strokeWidth: 2,
			}}
		/>
		<path
			d="M20 19H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Zm0-14H4a1 1 0 0 0-.62.22l8 6.29a1 1 0 0 0 1.24 0l8-6.29A1 1 0 0 0 20 5Z"
			style={{
				fill: "none",
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 2,
			}}
		/>
	</svg>
)
export { SvgComponent as Email }
