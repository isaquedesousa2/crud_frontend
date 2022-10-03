import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/api/v1/users/authentication/validate/",
        data: {
          token: token,
        },
      })
        .then((response) => {
          if (response.status === 200) setIsAuthenticated(true);
          else setIsAuthenticated(false);
        })
        .catch((e) => console.log(e.response.data));
    }
  }, []);

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
          const user = response.data["user"];
          const token = response.data["token"];

          localStorage.setItem("user", user);
          localStorage.setItem("token", token);

          navigate("/dashboard");
        } else {
          localStorage.removeItem("user");
          localStorage.removeItem("token");

          setIsAuthenticated(false);
        }
      })
      .catch((e) => console.log(e.response.data));
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

          setIsAuthenticated(false);
          navigate("/");
        }
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
