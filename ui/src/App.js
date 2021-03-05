import "./App.css";
import { checkAuthStatus } from "./utils/checkAuth";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

console.log(checkAuthStatus());

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
