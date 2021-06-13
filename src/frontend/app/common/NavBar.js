import React, { Component } from 'react';
import { A, navigate } from '@patched/hookrouter';
import { NavItems } from '../components/NavItems';
import './NavBar.css';
import '../components/Button';
import { Button } from '../components/Button';
import '../components/LoginForm.css'
import { tokenStorage } from '../utils/TokenStorage';

class NavBar extends Component {
    constructor(props) {
        super(props);

        tokenStorage.subscribe((token) => this.setState({
            ...this.state,
            isLoggedIn: token ? true : false
        }));

        let token = tokenStorage.retrieveToken();
        this.state = { 
            isLoggedIn: token ? true : false,
            clicked: false,
            loginClicked: false 
        };
    }

    handleLoginClick = () => {
        this.setState({loginClicked: !this.state.loginClicked});
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
        
    }
    render() {
        return(
            <nav className="NavItems">
                <h1 className="navbar-logo"><A href ="/"><img src="/navbar-logo.png" width = "260" height ="210"></img></A></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <A className={item.cName} href={item.url}>
                                {item.label} &nbsp; <i className={item.img}></i>
                                </A>
                            </li>
                        )
                    })}
                    
                </ul>
                <div>
                    {this.state.isLoggedIn ?
                        <Button onClick={this.logout}>Odhlásit se</Button>
                    :
                        <A href ="/login">
                            <Button>Přihlásit se</Button>
                        </A>}
                </div>
            </nav>
        )
    }

    logout() {
        tokenStorage.removeToken();
        console.log("logout")
        navigate("/");
    }
}

export default NavBar;