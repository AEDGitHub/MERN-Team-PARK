import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
        return (
          <li className="row">
              <div className="col s12 m8">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{this.props.name}</span>
                    <p>{this.props.category}</p>
                    <p>{this.props.description}</p>
                  </div>
                </div>
              </div>
          </li>
        );
    }
}

export default InterestFeedItem