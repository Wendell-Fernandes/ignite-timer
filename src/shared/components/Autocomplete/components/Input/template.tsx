import { useFormContext } from 'react-hook-form'
import type { RegisterOptions } from 'react-hook-form'
import { BaseInput } from './style'

interface InputProps {
	disabled: boolean
	id: 'task' | 'duration'
	placeholder: string
	readonly: boolean
	type: 'number' | 'text'
	options?: RegisterOptions
}

export function Input({ disabled, id, placeholder, readonly, type, options }: InputProps) {
	const { register } = useFormContext()

	return (
		<BaseInput
			type={type}
			autoComplete='off'
			readOnly={readonly}
			disabled={disabled}
			placeholder={placeholder}
			{...register(id, { ...options })}
		/>
	)
}
