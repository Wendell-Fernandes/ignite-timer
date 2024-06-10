import { usePopper } from './script'
import { Container, PopperStyled } from './style'

export function Popper() {
	const { cyclesState, changeInputValue } = usePopper()
	const { cycles } = cyclesState

	return (
		<Container>
			{cycles.map(({ id, task, duration }) => (
				<PopperStyled
					key={id}
					type='button'
					id={String(duration)}
					onClick={changeInputValue}>
					{task}
				</PopperStyled>
			))}
		</Container>
	)
}
