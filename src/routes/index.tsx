import { useRoutes } from 'react-router-dom'

import { History } from '../pages/History/template'
import { Timer } from '../pages/Timer/template'

const Routes = () => {
	const element = useRoutes([
		{
			path: '/',
			element: <Timer />
		},
		{
			path: '/history',
			element: <History />
		}
	])

	return element
}

export default Routes
