import React from 'react';
import InterestEditFormContainer from "./interest_edit_form_container";
import M from "materialize-css";

class InterestFeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const answer = window.confirm("Are you sure you want to delete this interest?");
    if (answer) this.props.deleteInterest(this.props.interest._id);
  }

  componentDidMount() {
    const options3 = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal5, options3);
  }

  render() {
    const {
      interest,
      currentUserId,
      followInterest,
      unfollowInterest,
      parentContainer } = this.props;

    const followButton = interest.users.includes(currentUserId) ? (
        <button
          className="interest-action"
          onClick={() => unfollowInterest(interest._id)}
        >
          <i className="fa fa-heart"></i>
        </button>
    ) : (
        <button
          className="interest-action"
          onClick={() => followInterest(interest._id)}
        >
          <i className="fa fa-heart-o"></i>
        </button>
      );
    
    const usersInterestButtons = parentContainer ? null : (
      <div>
        <button className="interest-owner-action" onClick={this.handleDelete}>
          <i className="fa fa-trash"></i>
        </button>
        <button className="interest-owner-action modal-trigger" data-target="edit-interest">
          <i className="material-icons">create</i>
        </button>
      </div>
    )
  
    const cardImageElements = (parentContainer ? (
      <>
        <span className="interest-title">{interest.name}</span>
        {currentUserId !== interest.owner ? followButton : null}
      </>
    ) : null)

    return (
      <li className={`interest-container ${parentContainer ? "two-column" : "one-column"}`}>
        <div className={`interest-holder${parentContainer ? "" : " horizontal"}`}>
          <div className="card-image">
            <div className="default-interest-icon">
              <i className="fa fa-cutlery"></i>
            </div>
            {cardImageElements}
          </div>
          <div className="interest-content">
            {parentContainer ? null : <span className="interest-title">{interest.name}</span>}
            <p>{interest.category}</p>
            <p>{interest.description}</p>
          </div>
          <div className="interest-action-buttons">
            {usersInterestButtons}
          </div>
        </div>

        <div className="modal" id="edit-interest"
          ref={Modal5 => { this.Modal5 = Modal5; }}>
            <InterestEditFormContainer
              key={interest._id} 
              interest={interest}
            />
        </div>

      </li>
    );
  }
}

export default InterestFeedItem