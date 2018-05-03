import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import Books from "./components/Books"
import AddBook from "./components/AddBook"


// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:3005/graphql"
});

class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <Books />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
