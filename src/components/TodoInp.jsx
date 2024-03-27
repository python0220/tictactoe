import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import "../App.css";

function TodoInput(props) {
    const [inputText,SetInputText] = useState('')
    return (
        <div className="input-container">
            <input type="text" id="input-box" className="input-box-todo" placeholder="Enter your TodoTask"
            onChange={e=>{
                SetInputText(e.target.value)
            }}
            onKeyDown={e=>{
                if (e.key === 'Enter'){
                    if (e.target.value !== ''){
                        props.addList(inputText);
                        SetInputText('')
                        document.getElementsByClassName("input-box-todo")[0].value = '';

                    }
                }
            }}
             />
            <button className="add-btn" onClick={() => {
                if (document.getElementById('input-box').value !== ''){
                    props.addList(inputText);
                    SetInputText('')
                }
                document.getElementsByClassName("input-box-todo")[0].value = '';
            }}>
                <AddCircleOutlineOutlinedIcon style={{fontSize:'45px',color: '#00b4d4'}}/> </button>

        </div>
        
    )
}

export default TodoInput;