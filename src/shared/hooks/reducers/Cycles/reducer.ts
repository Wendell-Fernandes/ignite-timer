import { produce } from 'immer'
import { useEffect, useReducer } from 'react'
import type { Cycle } from '../../../typings'

export enum cyclesActionsProps {
	createTask = 'createTask',
	interruptTask = 'interruptTask',
	finishedTask = 'finishedTask'
}

interface cyclesProps {
	cycles: Cycle[]
	activeCycleId: string | null
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

export function useCyclesReducer() {
	function reducer(state: cyclesProps, action: actionProps | actionProp) {
		const { createTask, finishedTask, interruptTask } = cyclesActionsProps

		switch (action.type) {
			case createTask:
				return produce(state, (draft) => {
					//@ts-ignore
					draft.cycles.push(action.payload.newCycle)
					//@ts-ignore
					draft.activeCycleId = action.payload.newCycle.id
				})

			case finishedTask: {
				const currentCycle = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
				if (currentCycle < 0) return state

				return produce(state, (draft) => {
					draft.activeCycleId = null
					draft.cycles[currentCycle].finished = new Date()
				})
			}

			case interruptTask: {
				const currentCycle = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
				if (currentCycle < 0) return state

				return produce(state, (draft) => {
					draft.activeCycleId = null
					draft.cycles[currentCycle].interrupted = new Date()
				})
			}

			default:
				return state
		}
	}

	function startReducer() {
		const storedStateAsJson = localStorage.getItem('@ignite-timer:cycles-state-1.0')

		if (storedStateAsJson) return JSON.parse(storedStateAsJson)
		return {
			cycles: [],
			activeCycleId: null
		}
	}

	const initialState: cyclesProps = {
		cycles: [],
		activeCycleId: null
	}

	const [cyclesState, dispatch] = useReducer(reducer, initialState, startReducer)

	useEffect(() => {
		const stateJson = JSON.stringify(cyclesState)
		localStorage.setItem('@ignite-timer:cycles-state-1.0', stateJson)
	}, [cyclesState])

	return {
		cyclesState,
		dispatch
	}
}
