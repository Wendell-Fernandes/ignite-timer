import type { ChildrenProp } from '../typings'
import { CyclesProvider } from './Cycles/context'
import { FormProvider } from './Form/context'

export function Providers({ children }: ChildrenProp) {
	return (
		<FormProvider>
			<CyclesProvider>{children}</CyclesProvider>
		</FormProvider>
	)
}
