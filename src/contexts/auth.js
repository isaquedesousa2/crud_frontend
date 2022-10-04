import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user_local = localStorage.getItem("user");
    const token_local = localStorage.getItem("token");
    console.log('REFRESH')
    setUser(user_local);
    setToken(token_local);

    if (token_local) {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/v1/users/authentication/validate/",
        data: {
          token: token_local,
        },
      })
        .then((response) => {
          if (response.status === 200) setIsAuthenticated(true);
          else setIsAuthenticated(false);
        })
        .catch((e) => console.log(e.response.data));
    }
  }, [location.pathname]);

  const login = ({ email, password }) => {
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
          const user_response = response.data["user"];
          const token_response = response.data["token"];

          localStorage.setItem("user", user_response);
          localStorage.setItem("token", token_response);

          window.location.reload();
        } else {
          localStorage.removeItem("user");
          localStorage.removeItem("token");

          setIsAuthenticated(false);
        }
      })
      .catch((e) => console.log(e.response.data));
  };

  const register = ({ username, first_name, last_name, email, password }) => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/users/authentication/register/",
      data: {
        username,
        first_name,
        last_name,
        email,
        password,
      },
    })
      .then((response) => {
        if (response.status === 201) {
          const user_response = response.data["user"];
          const token_response = response.data["token"];

          localStorage.setItem("user", user_response);
          localStorage.setItem("token", token_response);

          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e.response);
      });

    return;
  };

  const logout = () => {
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/users/authentication/logout/",
      data: {
        token: token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");

          window.location.reload();
        }
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
