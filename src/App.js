import "./App.css";
import Header from "./components/Header";
import Home from "./components/homeCatalog";
import GetProducts from "./components/GetProducts";
import ProductContext from "./context/ProductContext";
import { useContext } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//create client
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => alert({ message }));
  }
});
const links = from([
  errorLink,
  new HttpLink({
    uri: "http://localhost:4000/",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: links,
});

function App(props) {
  const value = useContext(ProductContext);

  return (
    <div className="App">
      <Header />
      <ApolloProvider client={client}>
        <ProductContext>
          <Home value={value} />
        </ProductContext>
      </ApolloProvider>
    </div>
  );
}

export default App;
