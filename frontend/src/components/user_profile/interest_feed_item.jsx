import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
        const { interest, currentUserId, followInterest } = this.props;
        const followButton =
          currentUserId !== interest.owner && !interest.users.includes(currentUserId) ? (
            <button onClick={() => followInterest(interest._id)}>Follow</button>
          ) : null;

        return (
          <li className="row">
              <div className="col s12 m8">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{interest.name}</span>
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