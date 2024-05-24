import type { ChildrenProp } from '../../../../typings'

export function Root({ children }: ChildrenProp) {
	return <div className='relative'>{children}</div>
}
