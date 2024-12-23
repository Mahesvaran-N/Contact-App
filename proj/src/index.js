
import ReactDOM from "react-dom";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
    
  
  rootElement
);