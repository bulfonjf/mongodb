import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({

  uri: 'https://mongodb-ez09.onrender.com/graphql',

  cache: new InMemoryCache(),

});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>,
      </ErrorBoundary>,
    </BrowserRouter>,
  </React.StrictMode>,
)
