import { useRoutes } from 'react-router-dom'

import { History } from '../pages/History/template'
import { Timer } from '../pages/Timer/template'
import { Default } from '../shared/layouts/Default/template'

const Routes = () => {
	const element = useRoutes([
		{
			path: '/',
			element: <Default />,
			children: [
				{
					path: '/',
					element: <Timer />
				},
				{
					path: '/history',
					element: <History />
				}
			]
		}
	])

	return element
}

export default Routes
