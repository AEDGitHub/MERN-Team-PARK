import React from 'react';

class InterestCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category: 'Choose a category'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let interest = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category
        }
        this.props.createInterest(interest)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightblue" }}>
                <div>I am the interest create form</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Name"
                        />
                        <br/>
                        <input
                            type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Description"
                        />
                        <br />
                        <div>
                            <select value={this.state.category}
                                onChange={this.update('category')}>
                                <option value="audi">Audi</option>
                                <option value="ford">Ford</option>
                            </select>
                        </div>
                        <br />
                        <input type="submit" value="Create Interest"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default InterestCreateForm;