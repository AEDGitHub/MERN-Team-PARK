import React from 'react'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // debugger
        this.props.fetchUser();
        // debugger
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null
        // debugger

        return (
            <div>
                I am the user profile component
                <br/>
                {currentUser.firstName}
                <br/>
                {currentUser.lastName}
                <br/>
                {currentUser.email}
            </div>
        )
    }
}

export default UserProfile;