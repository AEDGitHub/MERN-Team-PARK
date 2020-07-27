import React from "react";
import CreateGroupContainer from "./create_group_form_container";
import JoinGroupFormContainer from "./join_group_form_container";
import GroupShowContainer from "./group_show_container";
import M from "materialize-css";

class GroupIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          toggleCreate: false,
          toggleJoin: false,
        };

        // this.toggleCreate = this.toggleCreate.bind(this);
        // this.toggleJoin = this.toggleJoin.bind(this);
    }

    componentDidMount() {
      this.props.fetchGroups(this.props.currentUserId)
        .then(() => {
          this.attachCollapsibleHandles();
        })
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.groups !== this.props.groups) {
        this.attachCollapsibleHandles();
      }
    }
  
    attachCollapsibleHandles() {
      const options1 = {
        onOpenStart: (elem) => {
          this.props.fetchGroup(elem.dataset.id);
        },
        inDuration: 300,
        outDuration: 200
      };

      M.Collapsible.init(this.Collapsible1, options1);
    }

    // toggleCreate() {
    //     this.setState({ toggleCreate: !this.state.toggleCreate })
    // }

    // toggleJoin() {
    //     this.setState({ toggleJoin: !this.state.toggleJoin })
    // }

    render() {
        const { groups } = this.props;
        const groupsList = (groups.length !== 0 ? (
          <ul ref={Collapsible => { this.Collapsible1 = Collapsible; }} className="collapsible">
            {groups.map(group => (
                <li key={group._id} data-id={group._id}>
                    <div className="collapsible-header">
                      <div className="group-name-holder">
                        <h6>{group.name}</h6>
                      </div>
                    </div>
                    <div className="collapsible-body">
                        <GroupShowContainer groupId={group._id}/>
                    </div>
                </li>
            ))}
          </ul>
        ) : null)

        return (
          <div >
            <section>
              
              <div className="group-index-holder">
                {groupsList}
              </div>
              

              {/* {this.state.toggleCreate ? <CreateGroupContainer /> : null}

              {this.state.toggleJoin ? <JoinGroupFormContainer /> : null}

              <div className="group-session-button-holder">

                <button className="group-session-button modal-trigger" data-target="create-group" onClick={this.toggleCreate}>
                  Create Group
                </button>

                <button className="group-session-button" onClick={this.toggleJoin}>
                  Join Group
                </button> */}

              {/* </div> */}

            </section>
          </div>
        );
    }
}

export default GroupIndex;