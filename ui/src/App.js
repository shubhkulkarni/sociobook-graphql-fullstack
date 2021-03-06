import React, { useEffect } from "react";
import "./App.css";
import { checkAuthStatus } from "./utils/checkAuth";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";

console.log(checkAuthStatus());

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Router />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
