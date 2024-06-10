import type { ReactNode } from 'react'
import { DurationContainer, TaskContainer } from './style'

interface RootProps {
	children: ReactNode
	role: 'task' | 'duration'
	disabled?: boolean
}

export function Root({ children, role, disabled }: RootProps) {
	return (
		<>
			{role === 'task' ? (
				<TaskContainer disabled={disabled}>{children}</TaskContainer>
			) : (
				<DurationContainer disabled={disabled}>{children}</DurationContainer>
			)}
		</>
	)
}
