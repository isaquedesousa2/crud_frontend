import "./global.css";
import Routers from "./Routers";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contexts/api";

function App() {
  return (
      <ApiProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ApiProvider>
  );
}

export default App;
