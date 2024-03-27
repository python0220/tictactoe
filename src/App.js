import './App.css';
import TodoInput from './components/TodoInp';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  }

  return (
    <>
      <div className='main-container'>
        <div className='center-container'>
            <TodoInput addList={addList}/>
            <hr
            style={{
              backgroundColor: '#fff',
              color: '#fff',
              width: '100%',
            }}
            />
            {listTodo.map((item,i)=> {
              return  (
                <TodoList task={item} key={i}
                index = {i}
                deleteItem = {deleteListItem}
                />
              )
            })}
            {/* <div className='TodoListClass' task={}> */}
            {/* <TodoList/> */}

            {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
