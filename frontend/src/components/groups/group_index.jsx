import React from "react";
import CreateGroupContainer from "./create_group_form_container";
import GroupIndexItem from "./group_index_item";

class GroupIndex extends React.Component {
    componentDidMount() {
        this.props.fetchGroups(this.props.currentUserId)
    }

    render() {
        if (Object.values(this.props.groups).length === 0) return null;

        return (
            <section>
                <ul>
                    {this.props.groups.map(group => (
                        <GroupIndexItem group={group} key={group.id}/>
                    ))}
                </ul>
                <CreateGroupContainer />
            </section>
        )
    }
}

export default GroupIndex;