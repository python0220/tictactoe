import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import "../App.css";

function TodoInput(props) {
    const [inputText,SetInputText] = useState('')
    return (
        <div className="input-container">
            <input type="text" className="input-box-todo" placeholder="Enter your TodoTask"
            onChange={e=>{
                SetInputText(e.target.value)
            }}
             />
            <button className="add-btn" onClick={() => {
                props.addList(inputText);
                SetInputText('')
                document.getElementsByClassName("input-box-todo")[0].value = '';
            }}>
                <AddCircleOutlineOutlinedIcon style={{fontSize:'45px',color: '#00b4d4'}}/> </button>

        </div>
        
    )
}

export default TodoInput;