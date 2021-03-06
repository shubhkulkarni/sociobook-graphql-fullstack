import React, { useEffect } from "react";
import "./App.css";
import { checkAuthStatus } from "./utils/checkAuth";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { setContext } from "@apollo/client/link/context";

console.log(checkAuthStatus());

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("authToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
