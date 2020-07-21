import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
      const { interest, currentUserId, followInterest, parentContainer } = this.props;

      const followButton = currentUserId !== interest.owner ? (
          <button
            className="interest-action"
            onClick={() => followInterest(interest._id)}
          >
            {interest.users.includes(currentUserId) ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}
          </button>
        ) : null;
    
      const cardImageElements = (parentContainer ? (
        <>
          <span className="interest-title">{interest.name}</span>
          {followButton}
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