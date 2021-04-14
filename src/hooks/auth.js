import { Auth, Hub } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signout = async () => {
    await Auth.signOut();
    setUser(null);
  };

  useEffect(() => {
    Hub.listen('auth', (response) => {
      const { event, data } = response.payload;
      switch(event) {
        case 'signIn':
          console.log("User Has Signed in")
          setUser(data)
          console.log(data)
          break;
        case 'signOut':
          console.log("User Signed Out")
          break;
        default:
          console.log("Default Case")
      }
    })

    return () => {
      Hub.remove('auth')
    }
  }, []);

  return {
    user,
    signout,
  };
}

export default AuthProvider;
