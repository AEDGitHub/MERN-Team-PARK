import React from 'react';

class InterestFeedItem extends React.Component {
    render() {
        return (
            <div>
                <br/>
                Interest name: {this.props.name}
                <br/>
                Interest description: {this.props.description}
                <br/>
                Interest category: {this.props.category}
                <br/>
            </div>
        )
    }
}

export default InterestFeedItem