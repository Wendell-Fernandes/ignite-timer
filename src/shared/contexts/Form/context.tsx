import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider as HookFormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import type { ChildrenProp } from '../../typings'

const formValidationSchema = zod.object({
	task: zod.string().min(1),
	duration: zod.number().min(1).max(60)
})

type NewCycleFormData = zod.infer<typeof formValidationSchema>

export function FormProvider({ children }: ChildrenProp) {
	const methods = useForm<NewCycleFormData>({
		resolver: zodResolver(formValidationSchema),
		defaultValues: {
			task: '',
			duration: 0
		}
	})

	return <HookFormProvider {...methods}>{children}</HookFormProvider>
}
