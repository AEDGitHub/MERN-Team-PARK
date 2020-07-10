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
                <ul className="right" style={{ paddingRight: "30px" }}>
                    <li><button className="btn small" onClick={this.logoutUser}>Logout</button></li>
                </ul>
            );
        } else {
            return (
                <ul className="right" style={{ padding: "0 30px" }}>
                    <li><Link to={'/signup'}>Sign Up</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <div className="col s12">
                        <a className="brand-logo" href="/" style={{ padding: "0 30px" }}>
                            ReBond
                        </a>
                
                        {this.getLinks()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;