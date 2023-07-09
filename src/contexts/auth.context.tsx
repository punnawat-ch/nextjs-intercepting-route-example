import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface User {
  isLoggedIn: boolean;
}

interface AuthContextValue {
  user: User;
  setUser: (user: User) => void;
  login: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  console.log("🚀 ~ file: auth.context.tsx:25 ~ AuthProvider ~ user:", user);

  const handleSetUser = useCallback((user: User) => {
    setUser(user);
  }, []);

  const login = () => {
    setUser({ isLoggedIn: true });
  };
  const value: AuthContextValue = {
    user: user!,
    setUser: handleSetUser,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const contextData = useContext(AuthContext);
  if (!contextData) throw new Error("Invalid Auth Context");
  return contextData;
};
