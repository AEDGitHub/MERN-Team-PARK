import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="custom-footer">

                <div className="custom-footer-content">
                    © 2020 ReBond
                    <a className="custom-footer-logo" 
                       href="https://github.com/AEDGitHub/MERN-Team-PARK">
                        <img src="../../../images/icons/github-icon.png" alt="github icon"/>
                    </a>
                </div>



            </div>
        )
    }
}

export default Footer;