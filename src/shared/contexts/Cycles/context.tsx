import { differenceInSeconds } from 'date-fns'
import { type Dispatch, type SetStateAction, createContext, useContext, useState } from 'react'
import { cyclesActionsProps, useCyclesReducer } from '../../hooks/reducers/Cycles/reducer'
import type { ChildrenProp, Cycle } from '../../typings'

interface FormProps {
	task: string
	duration: number
}

interface actionProps {
	type: cyclesActionsProps
	payload: {
		newCycle: Cycle
	}
}

interface actionProp {
	type: cyclesActionsProps
}

interface CyclesContextProps {
	cyclesState: {
		cycles: Cycle[]
		activeCycleId: string | null
	}
	dispatch: Dispatch<actionProps | actionProp>
	amountSecondsPassed: number
	setAmountSecondsPassed: Dispatch<SetStateAction<number>>
	activeCycle: Cycle | undefined
	createNewCycle: ({ duration, task }: FormProps) => void
	interruptCycle: () => void
	totalSeconds: number
}

const CyclesContext = createContext({} as CyclesContextProps)

export function CyclesProvider({ children }: ChildrenProp) {
	const { createTask, interruptTask } = cyclesActionsProps
	const { cyclesState, dispatch } = useCyclesReducer()

	const { activeCycleId, cycles } = cyclesState

	const activeCycle = cycles.find((element) => element.id === activeCycleId)

	const [amountSecondsPassed, setAmountSecondsPassed] = useState(startAmountSecondsPassed)

	const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0

	function createNewCycle({ duration, task }: FormProps) {
		const id = String(new Date().getTime())

		const newCycle = {
			id,
			task,
			duration,
			start: new Date()
		}

		dispatch({ type: createTask, payload: { newCycle } })
		setAmountSecondsPassed(0)
	}

	function interruptCycle() {
		dispatch({ type: interruptTask })
	}

	function startAmountSecondsPassed() {
		if (activeCycle) {
			return differenceInSeconds(new Date(), new Date(activeCycle.start))
		}

		return 0
	}

	return (
		<CyclesContext.Provider
			value={{
				cyclesState,
				dispatch,
				amountSecondsPassed,
				setAmountSecondsPassed,
				activeCycle,
				createNewCycle,
				interruptCycle,
				totalSeconds
			}}>
			{children}
		</CyclesContext.Provider>
	)
}

export function useCycles() {
	return useContext(CyclesContext)
}
