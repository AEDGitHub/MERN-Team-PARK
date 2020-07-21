import React from 'react';

class InterestFeedItem extends React.Component {
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
          </div>
        </li>
      );
    }
}

export default InterestFeedItem