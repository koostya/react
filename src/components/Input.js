import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handler = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    inputEnter = (e) => {
        if(e.key === 'Enter') {
            this.props.createItem(e.target.value);

            this.setState({
                text: ''
            });
        } else {
            this.setState({
                text: e.target.value
            });
        }
    }

    render() {
        return(
            <div className="input_wrapper main_input_wrapper">
                <input type="text" placeholder="What needs to be done?" id="main_input" onChange={(e) => (this.handler(e))} onKeyPress={(e) => (this.inputEnter(e))} value={this.state.text} />
                {this.props.itemsLength > 0 ?
                    <div className="choose_all">
                        <input type="checkbox" id="choose_all" onChange={(e) => this.props.chooseAllChange(e)} checked={this.props.chooseAllChecked ? 'checked' : ''} />
                        <label htmlFor="choose_all"></label>
                    </div>
                    :
                    ''
                }

            </div>
        );
    }
}

export default Input;