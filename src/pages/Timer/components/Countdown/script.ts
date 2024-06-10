import { differenceInSeconds } from 'date-fns'
import { useEffect } from 'react'
import { useCycles } from '../../../../shared/contexts/Cycles/context'
import { cyclesActionsProps } from '../../../../shared/hooks/reducers/Cycles/reducer'

export function useCountdown() {
	const { finishedTask } = cyclesActionsProps
	const { activeCycle, amountSecondsPassed, totalSeconds, dispatch, setAmountSecondsPassed } = useCycles()

	const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60

	useEffect(() => {
		if (activeCycle)
			document.title = `${minutesAmount.toString().padStart(2, '0')}:${secondsAmount.toString().padStart(2, '0')}`

		return () => {
			document.title = 'Iginite timer'
		}
	}, [minutesAmount, secondsAmount, activeCycle])

	useEffect(() => {
		let interval: number

		if (activeCycle) {
			interval = setInterval(() => {
				const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.start))

				if (secondsDifference >= totalSeconds) {
					dispatch({ type: finishedTask })
					setAmountSecondsPassed(totalSeconds)
					clearInterval(interval)
				} else {
					setAmountSecondsPassed(secondsDifference)
				}
			}, 1000)
		}

		return () => {
			clearInterval(interval)
		}
	}, [activeCycle, totalSeconds, dispatch, finishedTask, setAmountSecondsPassed])

	return {
		minutesAmount,
		secondsAmount
	}
}
