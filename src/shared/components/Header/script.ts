import { useLocation } from 'react-router-dom'

export function useHeader() {
	const { pathname } = useLocation()
	return { pathname }
}
