import React from "react";
import CreateGroupContainer from "./create_group_form_container";
import JoinGroupFormContainer from "./join_group_form_container";
import GroupShowContainer from "./group_show_container";

class GroupIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleCreate: false,
            toggleJoin: false
        };

        this.toggleCreate = this.toggleCreate.bind(this);
        this.toggleJoin = this.toggleJoin.bind(this);
    }

    componentDidMount() {
        this.props.fetchGroups(this.props.currentUserId)
    }

    toggleCreate() {
        this.setState({ toggleCreate: !this.state.toggleCreate })
    }

    toggleJoin() {
        this.setState({ toggleJoin: !this.state.toggleJoin })
    }

    render() {
        const { groups } = this.props;
        const groupsList = (groups.length !== 0 ? (
          <ul className="group-list">
                {groups.map(group => (
                    <li key={group._id}>
                        <div className="group-list-element-title"><h3>{group.name}</h3></div>
                        <div className="group-list-element-body">
                            <GroupShowContainer groupId={group._id}/>
                        </div>
                    </li>
                ))}
            </ul>
        ) : null)

        return (
          <div >
            <section>

              {groupsList}

              {this.state.toggleCreate ? <CreateGroupContainer /> : null}

              {this.state.toggleJoin ? <JoinGroupFormContainer /> : null}

              <div className="group-session-button-holder">

                <button className="group-session-button" onClick={this.toggleCreate}>
                  Create Group
                </button>

                <button className="group-session-button" onClick={this.toggleJoin}>
                  Join Group
                </button>

              </div>

            </section>
          </div>
        );
    }
}

export default GroupIndex;