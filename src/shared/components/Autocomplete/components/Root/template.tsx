import type { ChildrenProp } from '../../../../typings'
import { Container } from './style'

export function Root({ children }: ChildrenProp) {
	return <Container>{children}</Container>
}
