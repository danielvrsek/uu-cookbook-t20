import React from "react";
import { useRoutes } from '@patched/hookrouter';
import AuthorListPage from "./pages/AuthorListPage";
import AuthorEditPage from "./pages/AuthorEditPage";
import MainLayout from "./common/MainLayout";
import IndexPage from "./pages/IndexPage";
import './App.css';
import Favourites from './pages/Favourites';
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import './components/Env.css';


const routes = {
    '/': () => <IndexPage />,
    '/authors': () => <AuthorListPage />,
    '/authors/:authorId': ({ authorId }) => <AuthorEditPage authorId={authorId} />,
    '/favourites': () => <Favourites />,
    '/login': () => <Login />,
    '/categories': () => <Categories />,
    '/blog': () => <Blog />,
    '/contact': () => <Contact />
}
 
const App = () => {
    return (
        <MainLayout>
            {useRoutes(routes) || <h1>Not found</h1>}
        </MainLayout>
    );
}

export default App;

