import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList(props){
    return (
        <li className='list-item'>
            <p>{props.task}</p>
            <span className='icon'><DeleteIcon 
            // style={{
            //     color: '#fff',
            // }}
            id='icon'
            onClick = {e=> {
                props.deleteItem(props.index)
            }}
            /></span>
        </li>
    )
}

export default TodoList;