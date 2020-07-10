import React from "react";

class GroupShow extends React.Component {
    componentDidMount() {
        this.props.fetchGroup(this.props.groupId)
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default GroupShow;