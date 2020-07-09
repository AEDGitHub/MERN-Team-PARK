import React, { useLayoutEffect } from 'react';
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
                <ul className="right">
                    <li><button className="btn small" onClick={this.logoutUser}>Logout</button></li>
                </ul>
            );
        } else {
            return (
                <ul className="right">
                    <li><Link to={'/signup'}>Signup</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="col s12">
                        <a className="brand-logo" href="/">
                            Rebond
                        </a>
                
                        {this.getLinks()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;