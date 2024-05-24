import { Minus, Play, Plus } from '@phosphor-icons/react'
import { Autocomplete } from '../../shared/components/Autocomplete'
import { Tooltip } from '../../shared/components/Tooltip/template'
import { useTimer } from './script'

export function Timer() {
	const { amountOfTime, projectName, increaseTime, reduceTime, changeProjectName, isDisabled, time } = useTimer()

	return (
		<main className='w-[41rem] flex flex-col items-center gap-14 mt-[4.6875rem] mb-[9.75rem]'>
			<div className='flex items-center justify-center gap-2 text-lg font-bold text-gray7 whitespace-nowrap'>
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
				<div className='flex gap-3 items-center justify-center text-gray6 placeholder:text-gray4 border-b-2 border-gray4 py-2'>
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

			<div className='flex justify-center items-center text-[10rem] font-Roboto-mono font-bold text-gray7 leading-tight'>
				<div className='flex justify-center items-center gap-4'>
					{time
						.toString()
						.padStart(2, '0')
						.split('')
						.map((element) => (
							<p
								key={element}
								className='bg-gray3 rounded-lg px-4'>
								{element}
							</p>
						))}
				</div>
				<p className='text-green mx-1'>:</p>
				<div className='flex justify-center items-center gap-4'>
					{time
						.toString()
						.padStart(2, '0')
						.split('')
						.map((element) => (
							<p
								key={element}
								className='bg-gray3 rounded-lg px-4'>
								{element}
							</p>
						))}
				</div>
			</div>

			<div className='w-full'>
				<button
					type='button'
					disabled={isDisabled}
					className='flex items-center justify-center gap-2 font-bold text-base w-full bg-green disabled:bg-green-dark disabled:text-gray5 py-[1.25rem] rounded-lg group relative disabled:cursor-not-allowed'>
					<Tooltip text='Preencha o nome e a duração antes de começar.' />
					<Play size={24} />
					Começar
				</button>
			</div>
		</main>
	)
}
