import Login from "./pages/Login";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import SearchImage from "./pages/SearchImage";
import Dashboard from "./pages/Dashboard";
import MyImages from "./pages/MyImages";
import UploadImage from "./pages/UploadImage";
import MyImageFull from "./pages/MyImageFull";
import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./contexts/auth";
import Logout from "./pages/Logout";

function Routers() {
  const Private = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated && location.pathname !== "/entrar") {
      return <Navigate to="/entrar" />;
    }

    if (isAuthenticated && location.pathname === "/entrar") {
      return <Navigate to="/dashboard" />;
    }

    return children;
  };

  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Private children={<Dashboard />} />} />
        <Route
          exact
          path="/entrar"
          element={<Private children={<Login />} />}
        />
        <Route
          exact
          path="/cadastrar"
          element={<Private children={<Register />} />}
        />
        <Route
          exact
          path="/dashboard"
          element={<Private children={<Dashboard />} />}
        />
        <Route
          exact
          path="/dashboard/buscar"
          element={<Private children={<SearchImage />} />}
        />
        <Route
          exact
          path="/dashboard/minhas-imagens"
          element={<Private children={<MyImages />} />}
        />
        <Route
          exact
          path="/dashboard/minhas-imagens/:name"
          element={<Private children={<MyImageFull />} />}
        />
        <Route
          exact
          path="/dashboard/salvar-imagens"
          element={<Private children={<UploadImage />} />}
        />
        <Route exact path="/dashboard/sair" element={<Logout />} />
      </Routes>
    </AuthProvider>
  );
}

export default Routers;
