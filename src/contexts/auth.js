import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginUser = ({ email, password }) => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/users/authentication/login/",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
          setIsAuthenticated(true);
          console.log(user)
        } else {
          setUser({});
          setIsAuthenticated(false);
        }
      })
      .catch((e) => console.log());

  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
