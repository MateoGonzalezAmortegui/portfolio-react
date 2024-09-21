import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1024 1024"
		{...props}
	>
		<circle
			cx={512}
			cy={512}
			r={512}
			style={{
				fill: "#0078d4",
			}}
		/>
		<path
			d="M729.08 730.5a33.88 33.88 0 0 0 32.13-44.76L623.89 279.07A33.88 33.88 0 0 0 591.81 256H432.17a33.88 33.88 0 0 0-32.09 23.07L262.8 685.76a33.88 33.88 0 0 0 32.13 44.74h99.16a33.88 33.88 0 0 0 32.11-23.07l20.44-60.49 103.46 76.87a33.85 33.85 0 0 0 20.21 6.69M505.8 468.4 581.6 693a11.29 11.29 0 0 1-10.67 14.91h-.63a11.29 11.29 0 0 1-6.74-2.22L369.32 561.38h101.51m132 146.54a33.54 33.54 0 0 0 .15-22.13L465.77 279.07l-.15-.42h126.21a11.29 11.29 0 0 1 10.71 7.66L739.79 693a11.29 11.29 0 0 1-7.07 14.31"
			style={{
				fill: "#fff",
			}}
		/>
	</svg>
)
export { SvgComponent as Azure }
