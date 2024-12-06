import { createContext, useContext, useState } from "react";

// Create Auth Context
export const AuthContext = createContext();

// Custom Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider to wrap the application and provide authentication state
export default function AuthProvider({ children }) {
  const [username, setUsername] = useState("GanniSai");

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
}



