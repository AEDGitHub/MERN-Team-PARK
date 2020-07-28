import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <ul className="navbar-session-button-holder">
                    <li><Link to={'./about'}>About</Link></li>
                    <li>
                        <button 
                            className="navbar-session-button" 
                            onClick={this.logoutUser}>
                            Logout
                        </button>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-session-button-holder">
                    <li><Link to={'./about'}>About</Link></li>
                    <li><Link to={'/signup'}>Sign Up</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            );
        }
    }

    render() {
        return (
            <nav className="navbar-wrapper">
                <a className="navbar-brand-logo" href="/">ReBond</a>
                {this.getLinks()}
            </nav>
        );
    }
}

export default NavBar;