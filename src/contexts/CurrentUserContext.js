import { createContext, useCallback, useContext, useState } from "react";

export const CurrentUserContext = createContext();
CurrentUserContext.displayName = "User";

export const useInfo = () => useContext(CurrentUserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: "", loggedIn: false });
  const [savedCards, setSavedCards] = useState([]);

  const signIn = useCallback(
    (name) => setCurrentUser({ name, loggedIn: true }),
    []
  );
  const signOut = useCallback(
    () => setCurrentUser({ name: "", loggedIn: false }),
    []
  );

  return (
    <CurrentUserContext.Provider
      value={{ savedCards, currentUser, signIn, signOut }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
