import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = props;

        this.handler = this.handler.bind(this);
        this.inputEnter = this.inputEnter.bind(this);
        this.showChooseAll = this.showChooseAll.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.showChooseAll();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.showChooseAll();
        }
    }

    showChooseAll() {
        if(this.props.items.length > 0) {
            this.setState({
                chooseAll: true
            });
        } else {
            this.setState({
                chooseAll: false
            });
        }
    }

    handler(e) {
        this.props.mainInputHandler(e);
    }

    inputEnter(e) {
        if(e.key === 'Enter') {
            this.props.createItem();
            this.showChooseAll();
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
                <div className="choose_all" style={{ visibility: this.state.chooseAll ? 'visible' : 'hidden'}}>
                    <input type="checkbox" id="choose_all" />
                    <label htmlFor="choose_all"></label>
                </div>
            </div>
        );
    }
}

export default Input;