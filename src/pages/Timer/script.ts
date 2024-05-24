import { type ChangeEvent, useState } from 'react'

export function useTimer() {
	const [amountOfTime, setAmountOfTime] = useState<number>(0)
	const [projectName, setProjectName] = useState<string>('')

	function increaseTime() {
		setAmountOfTime((state) => (state >= 60 ? 0 : state + 1))
	}

	function reduceTime() {
		setAmountOfTime((state) => (state <= 0 ? 60 : state - 1))
	}

	function changeProjectName(event: ChangeEvent<HTMLInputElement>) {
		setProjectName(event.target.value)
	}

	const isDisabled = projectName.length === 0 || amountOfTime === 0
	const time = 0

	return {
		amountOfTime,
		projectName,
		increaseTime,
		reduceTime,
		changeProjectName,
		isDisabled,
		time
	}
}
