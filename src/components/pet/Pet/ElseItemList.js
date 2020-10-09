import React, { Component } from 'react';
import ElseItem from './ElseItem';

class ElseItemList extends Component {
  render() {
    const { items, onRemove } = this.props;
    
    const itemList = items.map(
      ({id, text}) => (
        <ElseItem
          id={id}
          text={text}
          onRemove={onRemove}
        />
      )
    );
    return (
      <div>
        {itemList}
      </div>
    );
  }
}

export default ElseItemList;