import { createContext, useState } from "react";

export const GlobalAuthContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <GlobalAuthContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalAuthContext.Provider>
  );
}
