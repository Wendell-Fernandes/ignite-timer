import { useHistory } from './script'
import { Container, Details, Duration, EmptyTable, FullTable, Header, Start, Status, Table, Task } from './style'

export function History() {
	const { cycles, dateDistanceToNow } = useHistory()

	return (
		<Container>
			<h1>Meu histórico</h1>

			<Table>
				<Header>
					<span className='task'>Tarefa</span>
					<span className='duration'>Duraçãos</span>
					<span className='start'>Início</span>
					<span className='status'>Status</span>
				</Header>

				{cycles.length !== 0 ? (
					<FullTable>
						{cycles.map(({ id, duration, start, task, finished, interrupted }) => (
							<Details key={id}>
								<Task>{task}</Task>
								<Duration>{duration} minutos</Duration>
								<Start>{dateDistanceToNow(start)}</Start>

								{finished && <Status color='green'>Concluído</Status>}
								{interrupted && <Status color='red'>Interrompido</Status>}
								{!finished && !interrupted && <Status color='yellow'>Em andamento</Status>}
							</Details>
						))}
					</FullTable>
				) : (
					<EmptyTable />
				)}
			</Table>
		</Container>
	)
}
