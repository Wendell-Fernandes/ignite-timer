import { HandPalm, Play } from '@phosphor-icons/react'
import { Tooltip } from '../../shared/components/Tooltip/template'
import { Countdown } from './components/Countdown/template'
import { Instructions } from './components/Instructions/template'
import { useTimer } from './script'
import { ButtonInterrupt, ButtonStart, Form } from './style'

export function Timer() {
	const { buttonDisabled, handleSubmit, handleCreateNewCycle, interruptCycle, activeCycle } = useTimer()

	return (
		<Form onSubmit={handleSubmit(handleCreateNewCycle)}>
			<Instructions />

			<Countdown />

			{activeCycle && (
				<ButtonInterrupt
					type='button'
					onClick={interruptCycle}>
					<HandPalm size={24} />
					Interromper
				</ButtonInterrupt>
			)}

			{!activeCycle && (
				<ButtonStart
					type='submit'
					disabled={buttonDisabled}>
					<Play size={24} />
					Começar
					<Tooltip text='Preencha o nome e a duração antes de começar.' />
				</ButtonStart>
			)}
		</Form>
	)
}
