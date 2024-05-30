import { Circle } from '@phosphor-icons/react'
import { useHistory } from './script'
import { Container } from './style'

export function History() {
	const { tasks } = useHistory()

	return (
		<Container>
			<h1>Meu histórico</h1>

			<div className='table'>
				<div className='header'>
					<span className='task'>Tarefa</span>
					<span className='duration'>Duraçãos</span>
					<span className='start'>Início</span>
					<span className='status'>Status</span>
				</div>

				{tasks.length !== 0 ? (
					<div className='rows'>
						{tasks.map((element) => (
							<div key={element.task}>
								<span className='task'>{element.task}</span>
								<span className='duration'>{element.duration}</span>
								<span className='start'>{element.start}</span>
								<span className='status'>
									<Circle
										size={8}
										weight='fill'
										color='orange'
									/>
									{element.status}
								</span>
							</div>
						))}
					</div>
				) : (
					<div className='empty_table' />
				)}
			</div>
		</Container>
	)
}
