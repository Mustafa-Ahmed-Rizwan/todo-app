//2.1
//5.1
//8.4
export function Tabs(props){
        //6.3
        // const {todos}=props
        //8.4.1
        //destructing properties
        const {todos,selectedTab,setSelectedTab}=props
       


    //mapping concept:
    //this technique works on arrays
    //first argument:what we refer to each element of the array
    //second arg:tabindex
    //return some jsx for every element return some jsx of tabs component
    //for every element of array return button
    //js always in curly brackets
    //in react js when we use mapping technique and return jsx we need to identify diff buttons with unique key
    // write button once and need as many we need through mapping mapping func takes an arrow func which returns jsx



    const tabs=['All','Open','Completed']
    return(
        <nav className="tab-container">
           {/* <button></button> 
           <button></button> 
           <button></button>  */}

           {tabs.map((tab,tabIndex)=> {
            //6.2
          
            const numOfTasks = tab === 'All' ?
            todos.length :
            tab === 'Open' ?
                todos.filter(val => !val.complete).length :
                todos.filter(val => val.complete).length

            return (
                //8.4.2 adding dynamic classnme 
                //i want to check if active tab is equal to selected tab state
                //if it is give it diff style
                //give it a class for it
                //if not we dont want to give extra classes
                //this extra class is dynamic
                //now adding for change tabs
                //onclick logic 
                

                <button onClick={()=>{
                    setSelectedTab(tab)

                }} key={tabIndex} className={"tab-button "
                    + (tab==selectedTab ? ' tab-selected' : ' ')
                }>
                    <h4>
                        {tab}<span>({numOfTasks})</span>
                    </h4>

                </button>

            )

           })

           }
           
           
           <hr/>
        </nav>
    )
}