import "./App.css";
import Header from "./components/Header";
import Home from "./components/homeCatalog";
import GetProducts from "./components/GetProducts";
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

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <ApolloProvider client={client}>
        <GetProducts />
      </ApolloProvider>
    </div>
  );
}

export default App;
