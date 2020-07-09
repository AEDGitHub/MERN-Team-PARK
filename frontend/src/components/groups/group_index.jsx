import React from "react";
import CreateGroupContainer from "./create_group_form_container";
import JoinGroupFormContainer from "./join_group_form_container";

class GroupIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGroups(this.props.currentUserId)
    }

    render() {
        const { groups } = this.props;
        const groupsList = (groups.length !== 0 ? (
            <ul className="collapsible">
                {groups.map(group => (
                    <li key={group._id}>
                        <div className="collapsible-header"><h3>{group.name}</h3></div>
                        <div className="collapsible-body">
                            <p>This is the Group Show Component</p>
                        </div>
                    </li>
                ))}
            </ul>
        ) : null)

        return (
            <section>
                {groupsList}
                <CreateGroupContainer />
                <JoinGroupFormContainer />
            </section>
        )
    }
}

export default GroupIndex;