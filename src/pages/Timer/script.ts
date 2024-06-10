import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCycles } from '../../shared/contexts/Cycles/context'

interface FormProps {
	task: string
	duration: number
}

export function useTimer() {
	const { handleSubmit, reset, watch, setValue } = useFormContext<FormProps>()
	const { activeCycle, createNewCycle, interruptCycle } = useCycles()

	const task = watch('task')
	const duration = watch('duration')
	const buttonDisabled = !task || !duration

	function handleCreateNewCycle({ duration, task }: FormProps) {
		createNewCycle({ duration, task })
		reset()
	}

	useEffect(() => {
		if (task === '') setValue('duration', 0)
	}, [task, setValue])

	return {
		activeCycle,
		buttonDisabled,
		handleCreateNewCycle,
		handleSubmit,
		interruptCycle
	}
}
