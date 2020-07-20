import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="custom-footer">
                <div className="custom-footer-copyright">
                    © ReBond
                </div>
                <div className="custom-footer-links">
                    <Link to={'./about'}>About</Link>
                </div>
            </div>
        )
    }
}

export default Footer;