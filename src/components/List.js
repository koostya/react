import React, { Component } from 'react';

import Item from './Item';

class List extends Component {
    render() {
        return(
            <div id='list'>
                <ul>
                    {this.props.items.map((item, idx) => (
                        <Item
                            key={idx}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}
                            editing={item.editing}
                            store={this.props.store}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;