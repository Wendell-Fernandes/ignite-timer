import { Minus, Plus } from '@phosphor-icons/react'
import { Button } from './style'

interface ArrowProps {
	icon: 'minus' | 'plus'
	onclick?: () => void
	disabled: boolean
}

export function Arrow({ icon = 'minus', onclick, disabled }: ArrowProps) {
	return (
		<Button
			type='button'
			onClick={onclick}
			disabled={disabled}>
			{icon === 'minus' ? <Minus /> : <Plus />}
		</Button>
	)
}
