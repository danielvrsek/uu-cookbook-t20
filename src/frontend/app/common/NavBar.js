import React, { Component } from 'react';
import { A } from '@patched/hookrouter';
import { NavItems } from '../components/NavItems';
import './NavBar.css';
import '../components/Button';
import { Button } from '../components/Button';

class NavBar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }
    render() {
        return(
            <nav className="NavItems">
                <h1 className="navbar-logo"><A href ="/"><img src="../navbar-logo.png" width = "260" height ="210"></img></A></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <A className={item.cName} href={item.url}>
                                {item.label}
                                </A>
                            </li>
                            
                        )
                    })}
                    <li>
                        <h1 className="nav-links"><i className="far fa-question-circle"></i></h1>
                    </li>

                </ul>
                <Button>Registrace</Button>
            </nav>
        )
    }
}

export default NavBar;