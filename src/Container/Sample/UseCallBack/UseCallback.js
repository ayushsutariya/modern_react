
import React, { useCallback, useState } from 'react';
import ListItem from './ListItem';

function UseCallBack(props) {
    const [theme, setTheme] = useState(false);
    const [number , setNumber] = useState(0);

    const ThemeStyle =  {
        backgroundColor : theme ? '#fff' : '#000',
        color: theme ? '#000' : '#fff'
    }

    const memoizedCallback = useCallback(() => {
        {console.log(number)}
         return [ number , number+5 ,  number + 10 ]
        },
        [number]);

        

    return (
        <div style={ThemeStyle}>
            <button onClick={() => setTheme(!theme)}>Change Theme</button>
            <input placeholder='Please enter a Number' onChange={(e) => setNumber(parseInt(e.target.value))} />
            <ListItem memoizedCallback = {memoizedCallback} />
            
        </div>
    );

}

export default UseCallBack;
