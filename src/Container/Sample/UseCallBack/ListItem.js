import React, { useEffect, useState } from 'react';

function ListItem({memoizedCallback}) {
    const [item , setItem] = useState([]);

    useEffect(() => {
      setItem(memoizedCallback())
    }, [memoizedCallback])
    
    return (
        item.map((i) => {
            return i
        })
    );
}

export default ListItem;