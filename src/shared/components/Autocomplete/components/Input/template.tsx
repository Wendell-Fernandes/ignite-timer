import type { ChangeEvent } from 'react'
import { InputStyled } from './style'

interface InputProps {
	placeholder: string
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, onChange, value }: InputProps) {
	return (
		<InputStyled
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}
