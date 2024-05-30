import type { ChildrenProp } from '../typings'
import { TasksProvider } from './Tasks'

export function Providers({ children }: ChildrenProp) {
	return <TasksProvider>{children}</TasksProvider>
}
