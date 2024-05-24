import { useState } from 'react'

export function Popper() {
	const [autocomplete] = useState(['teste1', 'teste2', 'teste3', 'teste4', 'teste5', 'teste6'])
	return (
		<div className='absolute bottom-0 left-0 translate-y-[105%] flex flex-col border-2 border-green-dark w-full'>
			<span className='text-red-dark'>teste</span>
			{autocomplete.map((element) => (
				<span
					key={element}
					className='text-red-dark'>
					{element}
				</span>
			))}
		</div>
	)
}
