import "./global.css";
import Routers from "./Routers";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contexts/api";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
