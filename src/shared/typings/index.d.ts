import type { ReactNode } from 'react'

export interface ChildrenProp {
	children: ReactNode
}

export interface TasksProps {
	task: string
	duration: string
	start: string
	status: string
}
