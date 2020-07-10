import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
        return (
            <li>
                <div className="collapsible-header">{this.props.name}</div>
                <div className="collapsible-body">
                    <span>{this.props.description}</span>
                    <br/>
                    <br/>
                    <span>category: {this.props.category}</span>
                </div>
            </li>
        )
    }
}

export default InterestFeedItem