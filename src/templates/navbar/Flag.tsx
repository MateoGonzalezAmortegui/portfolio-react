import { CaretDown } from "@/components/icons/CaretDown"
import { Colombia } from "@/components/icons/Colombia"
import { USA } from "@/components/icons/USA"
import React, { HTMLAttributes } from "react"

interface FlagProps extends HTMLAttributes<HTMLSpanElement> {
	Language: string
}

export const Flag = ({ Language, ...Props }: FlagProps) => {
	return (
		<span
			className="flex flex-col items-center font-bold md:space-x-3 md:flex-row"
			{...Props}
		>
			{Language == "es" ? (
				<>
					<Colombia width={32} />
					<div className="flex items-center dark:text-white">
						<p className="hidden lg:flex">ESPAÑOL</p>
						<p className="text-sm lg:hidden">ESP</p>

						<CaretDown />
					</div>
				</>
			) : (
				<>
					<USA width={32} />
					<div className="flex items-center dark:text-white">
						<p className="hidden lg:flex">ENGLISH</p>
						<p className="text-sm lg:hidden">ENG</p>

						<CaretDown />
					</div>
				</>
			)}
		</span>
	)
}
