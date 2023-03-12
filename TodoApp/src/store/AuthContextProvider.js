import { createContext, useState } from "react";

export const Auth = createContext({
  user: null,
  addUser: (user) => {},
  removeUser: () => {},
});
const AuthContextProvider = ({ children }) => {
  const [uservalue, setUserValue] = useState(null);
  const addUser = (value) => {
    setUserValue(value);
  };
  const removeUser = () => {
    setUserValue("");
  };
  const value = {
    user: uservalue,
    addUser: addUser,
    removeUser: removeUser,
  };
  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export default AuthContextProvider;
