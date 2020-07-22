import React from 'react';

class InterestFeedItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const answer = window.confirm("Are you sure you want to delete this interest?");
    if (answer) this.props.deleteInterest(this.props.interest._id);
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
      <button className="interest-owner-action" onClick={this.handleDelete}>
        <i className="fa fa-trash"></i>
      </button>
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
      </li>
    );
  }
}

export default InterestFeedItem