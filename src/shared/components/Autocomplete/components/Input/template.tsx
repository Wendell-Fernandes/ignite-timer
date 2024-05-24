import type { ChangeEvent } from 'react'

interface InputProps {
	placeholder: string
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, onChange, value }: InputProps) {
	return (
		<input
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className='bg-transparent text-gray4 border-b-2 border-gray4 w-[17rem] text-center outline-none py-2 text-bold'
		/>
	)
}
