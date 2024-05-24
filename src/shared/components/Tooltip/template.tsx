interface TooltipProps {
	text: string
}

export function Tooltip({ text }: TooltipProps) {
	return (
		<span className='invisible absolute left-1/2 top-0 -translate-x-1/2 bg-coal py-2 px-4 rounded-md font-bold text-sm text-gray6 whitespace-nowrap before:size-2 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:bg-coal before:rotate-45 group-hover:-translate-y-[110%] group-hover:visible group-enabled:invisible group-disabled:-translate-y-[130%] group-disabled:py-3'>
			{text}
		</span>
	)
}
