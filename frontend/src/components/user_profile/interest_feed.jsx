import React from 'react';
import { withRouter } from 'react-router-dom';
import InterestFeedItem from './interest_feed_item';
import M from "materialize-css";

class InterestFeed extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     interests: this.props.interests
        // };
    }

    componentDidMount() {
        // Code snippet from https://reactize.herokuapp.com/
        const options1 = {
            // onOpenStart: () => {
            //     console.log("onOpenStart");
            // },
            // onOpenEnd: () => {
            //     console.log("onOpenEnd");
            // },
            // onCloseStart: () => {
            //     console.log("onCloseStart");
            // },
            // onCloseEnd: () => {
            //     console.log("onCloseEnd");
            // },
            inDuration: 300,
            outDuration: 200
        };
        M.Collapsible.init(this.Collapsible1, options1);
    }

    render() {
        if (this.props.interests.length === 0) {
            return <div className="center">You haven't added any interests yet!</div>
        };

        const interests = this.props.interests.map(interest => {
                return <InterestFeedItem 
                            key={interest._id} 
                            name={interest.name}
                            description={interest.description}
                            category={interest.category}  
                        />
        })

        return (
            <ul ref={Collapsible => {this.Collapsible1 = Collapsible;}} 
                className="collapsible col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                {interests}
            </ul>
        )
    }

}

export default withRouter (InterestFeed);