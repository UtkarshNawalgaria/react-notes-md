import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch
} from 'react-router-dom'
import { useMemo, useEffect } from 'react'
import { useAuth } from './auth'

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

export function useRequireAuth(redirectUrl = '/signup') {
    const auth = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (auth.user === null) {
        router.push(redirectUrl);
      }
    }, [auth, router, redirectUrl]);

    return auth
}