import { useFormContext } from 'react-hook-form'
import { useCycles } from '../../../../shared/contexts/Cycles/context'

export function useInstructions() {
	const { setValue, getValues } = useFormContext()
	const { activeCycle } = useCycles()

	function increaseTime() {
		const duration = getValues('duration') || 0
		if (duration >= 60) return
		setValue('duration', duration + 1)
	}

	function decreaseTime() {
		const duration = getValues('duration') || 0
		if (duration <= 0) return
		setValue('duration', duration - 1)
	}

	return { increaseTime, decreaseTime, activeCycle }
}
