import React from 'react'

const LineItem = ({ item, styles }) => {

    function handleClick() {
        console.log("Item Clicked")
    }
    
    return (
      <>
        <li className={styles} onClick={handleClick}>
          <h2 className="pl-4">{item.title}</h2>
        </li>
      </>
    );
}

export default LineItem
