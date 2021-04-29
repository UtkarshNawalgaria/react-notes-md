import { Auth } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "./router";

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
  const router = useRouter();

  const signout = async () => {
    await Auth.signOut();
    setUser(null);
    router.push("/");
  };

  const signUp = async ({ username, password, email }) => {
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setUser(user);
    } catch {
      console.error("Unable to signup user");
    }
  };

  const confirm = async ({ username, verificationCode }) => {
    try {
      await Auth.confirmSignUp(username, verificationCode);
    } catch (err) {
      console.error(err.message);
    }
  };

  const signIn = async ({ username, password }) => {
    try {
      const user = await Auth.signIn(username, password);
      setUser(user);
      router.push("/admin");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (err) {
        console.log(err.message);
      }
    }
    checkUser();
  }, []);

  return {
    user,
    router,
    signout,
    signUp,
    signIn,
    confirm,
  };
}

export default AuthProvider;
