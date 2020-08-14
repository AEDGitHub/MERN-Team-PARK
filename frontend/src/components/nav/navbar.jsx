import React from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    componentDidMount() {
        const sideNav = document.querySelectorAll('.sidenav');
        const options = { inDuration: 400, outDuration: 400, edge: "right" }
        M.Sidenav.init(sideNav, options);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        const { currentUser, loggedIn } = this.props;
        const hasGroups = currentUser && currentUser.groups.length > 0;

        const profilePicture = (currentUser && currentUser.img ? (
            <div className="navbar-profile-picture">
                <img
                    src={currentUser.img} alt="user-profile"
                    className="responsive-img"
                />
            </div>
        ) : (
                <div className="navbar-profile-picture">
                    <i className="material-icons">account_circle</i>
                </div>
        ))
        
        if (loggedIn) {
            return (
                <>
                    <li><Link to={'/about'}>About</Link></li>
                    {hasGroups ? <li><Link to={'/main'}>Groups</Link></li> : null}
                    {hasGroups ? <li><Link to={'/main/events'}>Events</Link></li> : null}
                    <li><div className="navbar-welcome-message">{this.props.currentUser ? `Hello, ${this.props.currentUser.firstName}!` : null}</div></li>
                    <li>{profilePicture}</li>

                    <li>
                        <button 
                            className="navbar-session-button" 
                            onClick={this.logoutUser}>
                            Logout
                        </button>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li><Link to={'./about'}>About</Link></li>
                    <li><Link to={'/signup'}>Sign Up</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </>
            );
        }
    }

    render() {
        return (
            <>
                <nav className="navbar-wrapper">
                    <a className="navbar-brand-logo" href="/">ReBond</a>
                    <a href="/" data-target="mobile-nav-menu" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    <ul className="navbar-session-button-holder">
                        {this.getLinks()}
                    </ul>
                </nav>

                <ul className="sidenav sidenav-close" id="mobile-nav-menu">
                    {this.getLinks()}
                </ul>
            </>
        );
    }
}

export default NavBar;