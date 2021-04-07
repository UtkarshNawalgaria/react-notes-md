import React from 'react'
import LineItem from './LineItem';

const ItemList = ({items}) => {
    items = items || []
    
    return (
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <LineItem key={item.id} item={item} styles="py-2 hover:bg-gray-600 cursor-pointer" />
        ))}
      </ul>
    );
}

export default ItemList