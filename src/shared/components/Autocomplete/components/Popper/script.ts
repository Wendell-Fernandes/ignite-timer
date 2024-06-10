import type { MouseEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCycles } from '../../../../contexts/Cycles/context'

export function usePopper() {
	const { cyclesState } = useCycles()
	const { setValue, setFocus } = useFormContext()

	function changeInputValue(event: MouseEvent) {
		//@ts-ignore
		setValue('task', event.target.textContent)
		//@ts-ignore
		setValue('duration', Number(event.target.id))
		setFocus('duration')
	}

	return { cyclesState, changeInputValue }
}
