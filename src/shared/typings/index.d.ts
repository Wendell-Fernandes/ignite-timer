import type { ReactNode } from 'react'

export interface ChildrenProp {
	children: ReactNode
}

export interface Cycle {
	id: string
	task: string
	duration: number
	start: Date
	interrupted?: Date
	finished?: Date
}
