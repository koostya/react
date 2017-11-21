import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                            dispatch={this.props.dispatch}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        
    })
)(List);