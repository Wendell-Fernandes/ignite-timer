import { ThemeProvider } from 'styled-components'
import Routes from './routes/routes'
import { GlobalStyle } from './shared/styles/global'
import { dark } from './shared/themes/dark'

export function App() {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	)
}
