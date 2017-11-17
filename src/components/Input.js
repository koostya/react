import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = props;

        this.handler = this.handler.bind(this);
        this.inputEnter = this.inputEnter.bind(this);
        this.chooseAllHandler = this.chooseAllHandler.bind(this);
    }

    handler(e) {
        this.props.mainInputHandler(e);
    }

    chooseAllHandler(e) {
        this.props.chooseAllChange(e);
    }

    inputEnter(e) {
        if(e.key === 'Enter') {
            this.props.createItem();
        } else {
            this.setState({
                text: e.target.value
            });
        }
    }

    render() {
        return(
            <div className="input_wrapper main_input_wrapper">
                <input type="text" placeholder="What needs to be done?" id="main_input" onChange={(e) => (this.handler(e))} onKeyPress={(e) => (this.inputEnter(e))} value={this.props.text} />
                {this.props.items.length > 0 ?
                    <div className="choose_all">
                        <input type="checkbox" id="choose_all" onChange={(e) => this.chooseAllHandler(e)} checked={this.props.chooseAllChecked ? 'checked' : ''} />
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