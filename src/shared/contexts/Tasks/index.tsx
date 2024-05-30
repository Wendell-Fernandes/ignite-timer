import { type Dispatch, type SetStateAction, createContext, useContext, useState } from 'react'
import type { ChildrenProp, TasksProps } from '../../typings'

type TasksContextProps = {
	tasks: TasksProps[]
	setTasks: Dispatch<SetStateAction<TasksProps[]>>
}

const TasksContext = createContext({} as TasksContextProps)

export function TasksProvider({ children }: ChildrenProp) {
	const [tasks, setTasks] = useState<TasksProps[]>([
		{ task: 'teste123', duration: '1', start: '1', status: 'concluido' }
	])
	return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>
}

// export const useTasks = () => useContext(Tasks)

export function useTasks() {
	return useContext(TasksContext)
}
