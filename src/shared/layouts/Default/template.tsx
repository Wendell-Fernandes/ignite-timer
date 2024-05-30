import type { ChildrenProp } from '../../typings'
import { Container } from './style'

export function Default({ children }: ChildrenProp) {
	return (
		<Container>
			<div className='frame'>{children}</div>
		</Container>
	)
}
