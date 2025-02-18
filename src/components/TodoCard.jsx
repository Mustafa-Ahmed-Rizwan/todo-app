//2.2
//6.4
//8.6.
export function TodoCard(props){
    
    const {todo,handleDeleteTodo,todoIndex,handleCompleteTodo}=props
    //8.6.4.1 destructing complete
    //before 8.6.4.1 delete
    
    
    return(
        //6.4.1 now  making it look prett
        // y
        <div className="card todo-item"> 
        <p>{todo.input}</p>
        <div className="todo-buttons">
            {/* adding disabled if it is complete we cannot click on it  */}
            {/* 8.6.4.2 complete */}
            <button onClick={()=>{
                handleCompleteTodo(todoIndex)
                

            }}disabled={todo.complete}>
                <h6>Done</h6>
            </button>
            
            {/* 8.6.3 after passing index then calling handler function for it */}
            <button onClick={()=>{
                handleDeleteTodo(todoIndex)
            }}>
                <h6>Delete</h6>
            </button>
        </div>
        </div>
    )
}