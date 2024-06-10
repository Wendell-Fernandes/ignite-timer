import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCycles } from '../../shared/contexts/Cycles/context'

export function useHistory() {
	const { cyclesState } = useCycles()
	const { cycles } = cyclesState

	function dateDistanceToNow(date: Date) {
		return formatDistanceToNow(new Date(date), {
			locale: ptBR,
			addSuffix: true
		})
	}

	return { cycles, dateDistanceToNow }
}
