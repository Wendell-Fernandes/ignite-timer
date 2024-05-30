import { Scroll, Timer } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Tooltip } from '../Tooltip/template'
import { HeaderStyled } from './style'

export function Header() {
	return (
		<HeaderStyled>
			<div className='img'>
				<img
					src='./ignite-logo.svg'
					alt=''
				/>
			</div>

			<Link to='/'>
				<Timer size={24} />
				<Tooltip text='Timer' />
			</Link>
			<Link to='/history'>
				<Scroll size={24} />
				<Tooltip text='History' />
			</Link>
		</HeaderStyled>
	)
}
