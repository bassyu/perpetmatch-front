import React, { Component } from 'react';
import './ElseItem.css';

class ElseItem extends Component {
  render() {
    const { text, id, onRemove } = this.props;

    return (
        <div className="else-item">
            <div># {text}</div>
            <div className="remove" onClick={(e) => {
                e.stopPropagation();
                onRemove(id)}
            }>&times;</div>
        </div>
        
    );
  }
}

export default ElseItem;