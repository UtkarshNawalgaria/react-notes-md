import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch
} from 'react-router-dom'
import { useMemo } from 'react'


export function useRouter() {
    const params = useParams()
    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch();

    return useMemo( () => {
        return {
            push: history.push,
            replace: match.replace,
            pathname: location.pathname,
            query: {...params},

            match,
            location,
            history,
        }
    }, [params, match, location, history])
}
