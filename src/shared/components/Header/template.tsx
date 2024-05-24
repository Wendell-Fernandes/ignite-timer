import { Scroll, Timer } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Tooltip } from '../Tooltip/template'
import { useHeader } from './script'

export function Header() {
	const { pathname } = useHeader()
	return (
		<header className='flex items-center justify-between w-full px-10 pt-10'>
			<div>
				<img
					src='./ignite-logo.svg'
					alt=''
					className='size-10'
				/>
			</div>

			<div className='flex items-center gap-8'>
				<Link
					to='/'
					className={`size-12 hover:border-b-[3px] hover:border-green flex items-center justify-center relative group ${
						pathname === '/' ? 'text-green' : 'text-gray6'
					}`}>
					<Tooltip text='Timer' />
					<Timer size={24} />
				</Link>
				<Link
					to='/history'
					className={`size-12 hover:border-b-[3px] hover:border-green flex items-center justify-center relative group ${
						pathname === '/history' ? 'text-green' : 'text-gray6'
					}`}>
					<Tooltip text='History' />
					<Scroll size={24} />
				</Link>
			</div>
		</header>
	)
}
