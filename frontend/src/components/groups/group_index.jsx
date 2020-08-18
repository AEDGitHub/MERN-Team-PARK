import React from "react";
import GroupShowContainer from "./group_show_container";
import M from "materialize-css";

class GroupIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          toggleCreate: false,
          toggleJoin: false,
          groupLoader: false
        };
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
          this.setState({ groupLoader: true });
          this.props.fetchGroup(elem.dataset.id)
            .then(() => this.setState({ groupLoader: false }));
        },
        inDuration: 300,
        outDuration: 200
      };

      M.Collapsible.init(this.Collapsible1, options1);
    }

    render() {
        const { groups } = this.props;
        
        const preloader = (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        );

        const groupsList = (groups.length !== 0 && groups[0] !== undefined ? (
          <ul ref={Collapsible => { this.Collapsible1 = Collapsible; }} 
          className="collapsible">
            {groups.map(group => (
                <li key={group._id} data-id={group._id}>
                    <div className="collapsible-header">
                      <div className="group-name-holder">
                        <h6>{group.name}</h6>
                      </div>
                    </div>
                    <div className="collapsible-body">
                        {this.state.groupLoader ? preloader : null}
                        <GroupShowContainer groupId={group._id}/>
                    </div>
                </li>
            ))}
          </ul>
        ) : null)

        return (
          <div >
            <section>
              {this.props.groups.length > 0 ? <h2 className="component-header">My Groups</h2> : null}
              <div className="group-index-holder">
                {groupsList}
              </div>

            </section>
          </div>
        );
    }
}

export default GroupIndex;