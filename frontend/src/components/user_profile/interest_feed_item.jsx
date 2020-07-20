import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
      const { interest, currentUserId, followInterest, parentContainer } = this.props;
      const followButton =
        currentUserId !== interest.owner ? (
          // <button onClick={() => followInterest(interest._id)}>Follow</button>
          <a
            className="btn-floating halfway-fab waves-effect waves-light teal"
            onClick={() => followInterest(interest._id)}
          >
            {interest.users.includes(currentUserId) ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}
          </a>
        ) : null;
    
      const cardImage = (parentContainer ? (
        <div className="card-image">
          {/* <img src="" alt=""/> */}
          <div className="default-interest-icon">
            <i className="fa fa-cutlery"></i>
          </div>
          <span className="interest-title">{interest.name}</span>
          {followButton}
        </div>
      ) : null)

      return (
        <li className="interest-container col l6 m6 s12">
          <div className="interest-holder">
            {cardImage}
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