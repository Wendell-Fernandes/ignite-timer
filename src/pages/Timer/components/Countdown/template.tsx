import { useCountdown } from './script'
import { Container, Dots, Separator, Zero } from './style'

export function Countdown() {
	const { minutesAmount, secondsAmount } = useCountdown()

	return (
		<Container>
			<Separator>
				{minutesAmount
					.toString()
					.padStart(2, '0')
					.split('')
					.map((element, i) => (
						<Zero key={i}>{element}</Zero>
					))}
			</Separator>

			<Dots>:</Dots>

			<Separator>
				{secondsAmount
					.toString()
					.padStart(2, '0')
					.split('')
					.map((element, i) => (
						<Zero key={i}>{element} </Zero>
					))}
			</Separator>
		</Container>
	)
}
