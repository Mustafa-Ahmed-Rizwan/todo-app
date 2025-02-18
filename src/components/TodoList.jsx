import { TodoCard } from "./TodoCard";

//2.5 
export function TodoList(props){
    //6.3
    //8.5{
    const {todos,selectedTab}=props
    //remove this line:
    // const tab='All'
    //change everywhere we have tab to selected tab
    //for exam
    //const filterTodosList= tab=== 'All'? to 


    //}
    
    //creating filter list:
    //for each section there specific list 
    const filterTodosList= selectedTab=== 'All'? 
    todos:
    selectedTab==='Completed' ?
        todos.filter(val=>val.complete):
        todos.filter(val=>!val.complete)
    return(
        // <div> 
        //     <TodoCard/>
        //     <TodoCard/>
        //     <TodoCard/>
        //     <TodoCard/>
        //     <TodoCard/>
        // </div>
        //before 6.3 above
        
        
       //doing mapping
        <>
        {filterTodosList.map((todo,todoIndex)=>{
            return(
                <TodoCard key={todoIndex}

                // todoIndex={todoIndex} 
                // / passing todo object to todocard
                // what parent is recieving send it to child
                // {...props}
                //8.6.2 passing it down to todocard
                //passing todo index for deleting todo
                todoIndex={todos.findIndex(val=>val.input==todo.input)} 
                {...props}
                todo={todo}

                />

            )
         }) }
        </>
    )
}