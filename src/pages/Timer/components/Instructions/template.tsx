import { Autocomplete } from '../../../../shared/components/Autocomplete/export'
import { useInstructions } from './script'
import { Container } from './style'

export function Instructions() {
	const { decreaseTime, increaseTime, activeCycle } = useInstructions()

	return (
		<Container>
			<label htmlFor='task'>Vou trabalhar em</label>

			<Autocomplete.root
				role='task'
				disabled={!!activeCycle}>
				<Autocomplete.input
					disabled={!!activeCycle}
					id='task'
					placeholder='Dê um nome para o seu projeto'
					readonly={false}
					type='text'
				/>
				<Autocomplete.popper />
			</Autocomplete.root>
			<label htmlFor='duration'>durante</label>

			<Autocomplete.root
				role='duration'
				disabled={!!activeCycle}>
				<Autocomplete.arrow
					icon='minus'
					onclick={decreaseTime}
					disabled={!!activeCycle}
				/>
				<Autocomplete.input
					disabled={!!activeCycle}
					id='duration'
					placeholder='00'
					readonly={true}
					type='number'
					options={{ valueAsNumber: true, max: 60, min: 1 }}
				/>

				<Autocomplete.arrow
					icon='plus'
					onclick={increaseTime}
					disabled={!!activeCycle}
				/>
			</Autocomplete.root>

			<span>minutos.</span>
		</Container>
	)
}
