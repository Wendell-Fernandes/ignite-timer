import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/template'
import { Container, Frame } from './style'

export function Default() {
	return (
		<Container>
			<Frame>
				<Header />
				<Outlet />
			</Frame>
		</Container>
	)
}
