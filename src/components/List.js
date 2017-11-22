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
                            store={this.props.store}
                            chooseAllCheck={this.props.chooseAllCheck}
                            items={arr}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;