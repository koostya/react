import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
    render() {
        return(
            <div id='list'>
                <ul>
                    {this.props.items.map((item, idx, arr) => (
                        <Item
                            key={idx}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}
                            editing={item.editing}
                            chooseAllCheck={this.props.chooseAllCheck}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;