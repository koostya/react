import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return(
            <div id='list'>
                <ul>
                    {this.props.items.map(item => (
                        <Item
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}
                            checkboxID={item.checkboxID}
                            checkboxItemHandler={this.props.checkboxItemHandler}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;