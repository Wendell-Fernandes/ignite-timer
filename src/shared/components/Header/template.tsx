import { Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { Tooltip } from '../Tooltip/template'
import { HeaderStyled, Nav } from './style'

export function Header() {
	return (
		<HeaderStyled>
			<div className='img'>
				<img
					src='./ignite-logo.svg'
					alt=''
				/>
			</div>

			<Nav>
				<NavLink
					to='/'
					title='timer'>
					<Timer size={24} />
					<Tooltip text='Timer' />
				</NavLink>
				<NavLink
					to='/history'
					title='history'>
					<Scroll size={24} />
					<Tooltip text='History' />
				</NavLink>
			</Nav>
		</HeaderStyled>
	)
}
