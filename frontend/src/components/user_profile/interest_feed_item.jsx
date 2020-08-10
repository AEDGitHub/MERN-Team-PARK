import React from "react";
import InterestEditFormContainer from "./interest_edit_form_container";
import M from "materialize-css";

class InterestFeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const answer = window.confirm(
      "Are you sure you want to delete this interest?"
    );
    if (answer) this.props.deleteInterest(this.props.interest._id);
  }

  componentDidMount() {
    const options3 = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal5, options3);
  }

  render() {
    const {
      interest,
      owner,
      currentUserId,
      followInterest,
      unfollowInterest,
      parentContainer,
    } = this.props;

    const followButton = interest.users.includes(currentUserId) ? (
      <button
        className="interest-action"
        onClick={() => unfollowInterest(interest._id)}
      >
        <i className="material-icons">favorite</i>
      </button>
    ) : (
      <button
        className="interest-action"
        onClick={() => followInterest(interest._id)}
      >
        <i className="material-icons">favorite_border</i>
      </button>
    );

    const usersInterestButtons = parentContainer ? null : (
      <div className="interest-action-buttons">
        <button
          className="interest-owner-action red accent-4 "
          onClick={this.handleDelete}
        >
          <i className="material-icons">delete_forever</i>
        </button>
        <button
          className="interest-owner-action modal-trigger"
          data-target={`edit-interest-${interest._id}`}
        >
          <i className="material-icons">create</i>
        </button>
      </div>
    );

    const defaultInterestImage = (
      <div className="default-interest-icon">
        {interest.category === "Outdoors & Adventure" ? (
          <i className="medium material-icons responsive-img activator">
            terrain
          </i>
        ) : interest.category === "Food & Drink" ? (
          <i className="medium material-icons responsive-img activator">
            local_dining
          </i>
        ) : interest.category === "Hobbies & Crafts" ? (
          <i className="medium material-icons responsive-img activator">
            brush
          </i>
        ) : (
          <i className="medium material-icons responsive-img activator">
            widgets
          </i>
        )}
      </div>
    );

    const cardImage = interest.img ? (
      <img
        src={interest.img}
        alt={`${interest.name}`}
        className="activator responsive-img"
      />
    ) : (
      <>{defaultInterestImage}</>
    );

    const cardImageElements = parentContainer ? (
      <>
        <span className="card-title truncate activator">{interest.name}</span>
        {/* {currentUserId !== interest.owner ? followButton : null} */}
      </>
    ) : null;

    return (
      <li
        className={`interest-container ${
          parentContainer ? "two-column" : "one-column"
        }`}
      >
        <div className={`card${parentContainer ? "" : " horizontal"}`}>
          <div className="card-image waves-effect waves-block waves-light">
            {cardImage}
            {cardImageElements}
          </div>
          <div className="card-stacked">
            <div className="card-content">
              {parentContainer ? null : (
                <span className="card-title activator grey-text text-darken-4 flow-text">
                    {interest.name}
                    <i className="material-icons right">more_vert</i>
                </span>
              )}
              <div className="flexed">
                <p className="interest-card-category">{interest.category}</p>
                {currentUserId !== interest.owner ? followButton : null}
              </div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {interest.name}
              <i className="material-icons right">close</i>
            </span>
            <div className="flexed">
              <p>{interest.description}</p>
              {usersInterestButtons}
            </div>
          </div>
        </div>
        {/* <div
          className={`interest-holder${parentContainer ? "" : " horizontal"}`}
        >
          <div className="interest-image">
            {cardImage}
            {cardImageElements}
          </div>
          <div className="interest-content">
            
            {parentContainer ? (
              <p>
                {owner.firstName} {owner.lastName}
              </p>
            ) : null}
            <p>{interest.category}</p>
            <p>{interest.description}</p>
            </div>*/}
        <div
          className="modal"
          id={`edit-interest-${interest._id}`}
          ref={(Modal5) => {
            this.Modal5 = Modal5;
          }}
        >
          <InterestEditFormContainer key={interest._id} interest={interest} />
        </div>{" "}
      </li>
    );
  }
}

export default InterestFeedItem;
