import { TooltipStyled } from './style'

interface TooltipProps {
	text: string
}

export function Tooltip({ text }: TooltipProps) {
	return <TooltipStyled>{text}</TooltipStyled>
}
