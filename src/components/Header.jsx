//2 export components in all files:
//we export what file is called
//5 
//6.1 Header (props) ke andar kaam karna 
// props is like maassive present object it contains key value pairs,properties of tag
export function Header(props){
    //6.2 destructure out props it was expecting
    const { todos}=props
    const todosLength=todos.length
    //if there is one task then it should show task:

       const isTasksPlural = todos.length != 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'
    return(
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
        </header>
)

}