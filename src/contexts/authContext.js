import { createContext, useState } from 'react'
import { Auth } from 'aws-amplify'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function getUser() {
        try {
            const {username} = await Auth.currentAuthenticatedUser();
            console.log(username);
            setIsAuthenticated(true);
        } catch (err) {
            console.log(err)
        }
    }
     
    return (
      <AuthContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, getUser }}
      >
        {children}
      </AuthContext.Provider>
    );
}

export default AuthProvider
