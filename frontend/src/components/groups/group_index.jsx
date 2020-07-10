import React from "react";
import CreateGroupContainer from "./create_group_form_container";
import JoinGroupFormContainer from "./join_group_form_container";
import GroupShowContainer from "./group_show_container";

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
                        <div className="">
                            <GroupShowContainer groupId={group._id}/>
                        </div>
                    </li>
                ))}
            </ul>
        ) : null)

        return (
            <div className="col s12 l6">
                <section>
                    {groupsList}
                    <CreateGroupContainer />
                    <JoinGroupFormContainer />
                </section>
            </div>
        )
    }
}

export default GroupIndex;