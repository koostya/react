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

                            checkboxItemHandler={this.props.checkboxItemHandler}
                            removeItem={this.props.removeItem}
                            editItemStart={this.props.editItemStart}
                            editItemFinish={this.props.editItemFinish}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default List;