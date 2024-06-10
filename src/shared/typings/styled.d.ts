import 'styled-components'
import type { dark } from '../themes/dark'

type ThemeType = typeof dark

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
