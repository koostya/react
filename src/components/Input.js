import React, { Component } from 'react';

import { addItem, setAllChecked } from '../actions/actions';

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
            this.props.store.dispatch(addItem(this.generateID(), e.target.value, false, false));

            console.log(this.props.store.getState());

            this.setState({
                text: ''
            });
        } else {
            this.setState({
                text: e.target.value
            });
        }
    }

    generateID = () => {
        return + new Date();
    }

    render() {
        return(
            <div className="input_wrapper main_input_wrapper">
                <input type="text" placeholder="What needs to be done?" id="main_input" onChange={(e) => (this.handler(e))} onKeyPress={(e) => (this.inputEnter(e))} value={this.state.text} />
                {this.props.store.getState().store.items.length > 0 ?
                    <div className="choose_all">
                        <input type="checkbox" id="choose_all" onChange={(e) => {this.props.store.dispatch(setAllChecked(e.target.checked)); console.log(this.props.store.getState().store)}}  />
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