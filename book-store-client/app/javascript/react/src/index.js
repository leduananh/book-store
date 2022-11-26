// import { define } from 'remount'
// import Hello from "./components/Hello"
//
// define({ 'hello-component': Hello })

// define({ 'hello-component': Hello })
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";

const client = new ApolloClient({
    // uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
    link: createUploadLink({uri: 'http://127.0.0.1:3999/graphql'})
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
);

