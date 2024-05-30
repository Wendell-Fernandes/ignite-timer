import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import { Header } from './shared/components/Header/template'
import { Default } from './shared/layouts/Default/template'
import { GlobalStyle } from './shared/styles/global'
import { dark } from './shared/themes/dark'

export function App() {
	return (
		<ThemeProvider theme={dark}>
			<Default>
				<Header />
				<Routes />
			</Default>

			<GlobalStyle />
		</ThemeProvider>
	)
}
