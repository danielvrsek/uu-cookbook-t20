import React, { Component } from "react";
import { useRoutes } from '@patched/hookrouter';
import AuthorListPage from "./pages/AuthorListPage";
import AuthorEditPage from "./pages/AuthorEditPage";
import MainLayout from "./common/MainLayout";
import IndexPage from "./pages/IndexPage";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Favourites from './pages/Favourites';
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import './components/Env.css';
import Recipe from "./components/recipes/Recipe";




/* const routes = {
    '/': () => <IndexPage />,
    '/authors': () => <AuthorListPage />,
    '/authors/:authorId': ({ authorId }) => <AuthorEditPage authorId={authorId} />
}
 */
function App() {


    return (
       
        <Router>
            
            <MainLayout />
            
            
                <Switch>
                
                    <Route exact path="/">
                        <IndexPage />
                    </Route>
                        <Route exact path="/authors">
                            <AuthorListPage />
                        </Route>
                            <Route exact path="/favourites">
                    
                                 <Favourites />
                            </Route>
                            <Route exact path="/login">
                    
                                 <Login />
                            </Route>
                            <Route exact path="/categories">
                    
                                 <Categories />
                            </Route>
                            <Route exact path="/blog">
                    
                                 <Blog />
                            </Route>
                            <Route exact path="/contact">
                    
                                 <Contact />
                            </Route>
                
                </Switch>
            
        </Router>
        
    );

}

export default App;

