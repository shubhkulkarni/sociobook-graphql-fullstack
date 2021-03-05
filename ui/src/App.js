import "./App.css";
import { checkAuthStatus } from "./utils/checkAuth";
import Login from "./pages/Login/Login";

console.log(checkAuthStatus());

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
