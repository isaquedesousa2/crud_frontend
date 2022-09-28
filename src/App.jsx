import "./global.css";
import Routers from "./Routers";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter> 
      <Routers/>
    </BrowserRouter> 

  );
}

export default App;
