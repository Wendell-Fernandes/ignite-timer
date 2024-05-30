import { useState } from 'react'
import { Container } from './style'

export function Popper() {
	const [autocomplete] = useState(['tset', 'teste', 'teste', 'teste', 'teste'])
	return (
		<Container>
			{autocomplete?.map((element) => (
				<span key={element}>{element}</span>
			))}
		</Container>
	)
}
