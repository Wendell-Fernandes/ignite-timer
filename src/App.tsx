import Routes from './routes'
import { Header } from './shared/components/Header/template'
import { Background } from './shared/layouts/Background/template'

export function App() {
	return (
		<>
			<Background>
				<Header />
				<Routes />
			</Background>
		</>
	)
}
