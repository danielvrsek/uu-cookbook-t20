import 'bootstrap';
import './scss/app.scss';
import React from "react";
import { useRoutes } from '@patched/hookrouter';
import AuthorListPage from "./pages/AuthorListPage";
import AuthorEditPage from "./pages/AuthorEditPage";
import MainLayout from "./common/MainLayout";
import IndexPage from "./pages/IndexPage";
import './App.css';
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import './components/Env.css';
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";



const routes = {
    '/': () => <IndexPage />,
    '/authors': () => <AuthorListPage />,
    '/authors/:authorId': ({ authorId }) => <AuthorEditPage authorId={authorId} />,
    '/login': () => <Login />,
    '/categories': () => <Categories />,
    '/recipe': () => <Recipes />,
    '/contact': () => <AuthorListPage />,
    '/addrecipe' : () => <AddRecipe />
}
 
const App = () => {
    return (
        <>
            <MainLayout>
                {useRoutes(routes) || <h1>Not found</h1>}
            </MainLayout>
        </>
    );
}

export default App;

