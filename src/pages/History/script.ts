import { useState } from 'react'

interface TasksProps {
	task: string
	duration: string
	start: string
	status: string
}

export function useHistory() {
	const [tasks] = useState<TasksProps[]>([
		{
			duration: '1',
			start: 'há 2 meses',
			status: 'em andamento',
			task: 'terminar aplicação'
		},
		{
			duration: '1',
			start: 'há 2 meses',
			status: 'em andamento',
			task: 'terminar aplicação'
		}
	])

	return { tasks }
}
