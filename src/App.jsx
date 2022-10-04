import "./global.css";
import Routers from "./Routers";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contexts/api";

function App() {
  return (    
        <BrowserRouter>
          <ApiProvider>
            <Routers />
          </ApiProvider>
        </BrowserRouter>
  );
}

export default App;
