import { HandPalm, Minus, Play, Plus } from '@phosphor-icons/react'
import { Autocomplete } from '../../shared/components/Autocomplete'
import { Tooltip } from '../../shared/components/Tooltip/template'
import { useTimer } from './script'
import { Container } from './style'

export function Timer() {
	const { amountOfTime, projectName, started, increaseTime, reduceTime, changeProjectName, isDisabled, time } =
		useTimer()

	return (
		<Container>
			<div className='title'>
				<p>Vou trabalhar em</p>
				<Autocomplete.root>
					<Autocomplete.input
						value={projectName}
						onChange={changeProjectName}
						placeholder='Dê um nome para o seu projeto'
					/>
					<Autocomplete.popper />
				</Autocomplete.root>
				<p>durante</p>
				<div className='time'>
					<button
						type='button'
						onClickCapture={reduceTime}>
						<Minus size={16} />
					</button>
					<span>{amountOfTime.toString().padStart(2, '0')}</span>
					<button
						type='button'
						onClick={increaseTime}>
						<Plus size={16} />
					</button>
				</div>
				<p>minutos.</p>
			</div>

			<div className='timer'>
				<div>
					{time
						.toString()
						.padStart(2, '0')
						.split('')
						.map((element) => (
							<div key={element}>
								<p>{element}</p>
							</div>
						))}
				</div>
				<span>:</span>
				<div>
					{time
						.toString()
						.padStart(2, '0')
						.split('')
						.map((element) => (
							<div key={element}>
								<p>{element}</p>
							</div>
						))}
				</div>
			</div>

			<div className='button'>
				{!started ? (
					<button
						type='button'
						disabled={isDisabled}
						className='start'>
						<Play size={24} />
						Começar
						<Tooltip text='Preencha o nome e a duração antes de começar.' />
					</button>
				) : (
					<button
						type='button'
						className='stop'>
						<HandPalm size={24} />
						Interromper
						<Tooltip text='Preencha o nome e a duração antes de começar.' />
					</button>
				)}
			</div>
		</Container>
	)
}
