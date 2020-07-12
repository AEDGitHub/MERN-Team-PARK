import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
        const { interest, currentUserId, followInterest } = this.props;
        const followButton =
          currentUserId !== interest.owner && !interest.users.includes(currentUserId) ? (
            <button onClick={() => followInterest(interest._id)}>Follow</button>
          ) : null;

        return (
          <li>
              <div className="interest-container">
                <div className="interest-holder">
                  <div className="interest-content">
                    <span className="interest-title">{interest.name}</span>
                    <p>{interest.category}</p>
                    <p>{interest.description}</p>
                    {followButton}
                  </div>
                </div>
              </div>
          </li>
        );
    }
}

export default InterestFeedItem