import React from "react";
import { hot } from "react-hot-loader";
import { useRoutes } from '@patched/hookrouter';
import AuthorList from "./components/AuthorList";

const routes = {
    '/authors': () => <AuthorList />
}

const App = () => {
    return useRoutes(routes) || (<h1>Index</h1>);
}

export default hot(module)(App);