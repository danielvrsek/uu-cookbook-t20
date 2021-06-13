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
import './components/Env.css';
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from './pages/RecipeDetail';
import EditRecipe from './pages/EditRecipe';

const routes = {
    '/': () => <IndexPage />,
    '/authors': () => <AuthorListPage />,
    '/authors/:authorId': ({ authorId }) => <AuthorEditPage authorId={authorId} />,
    '/categories': () => <Categories />,
    '/recipes': () => <Recipes />,
    '/recipes/:recipeId': ({ recipeId }) => <RecipeDetail recipeId={recipeId} />,
    '/contact': () => <AuthorListPage />,
    '/addrecipe' : () => <AddRecipe />,
    '/login': () => <Login />,
    '/edit/': () => <EditRecipe />
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

