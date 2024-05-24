import type { ChildrenProp } from '../../typings'

export function Background({ children }: ChildrenProp) {
	return (
		<div className='w-screen h-screen bg-gray1 flex justify-center items-center text-gray6 font-Roboto leading-relaxed overflow-hidden'>
			<div className='bg-gray2 w-[70rem] rounded-lg flex flex-col items-center'>{children}</div>
		</div>
	)
}
