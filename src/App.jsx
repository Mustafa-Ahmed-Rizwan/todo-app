// import { useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
//added header component in app.jsx:
//< />
//5.3 add content

//8.1 import hook:
import {useState,useEffect}  from 'react'


function App() {
  // const todos = [
  //   // { input: 'Hello! Add your first todo!', complete: true },
  //   // { input: 'Get the groceries!', complete: false },
  //   // { input: 'Learn how to web design', complete: false },
  //   // { input: 'Say hi to gran gran', complete: true },
  //   // ]

  //making our project functional above is before 8
  //making a react stateful variable
  //we can allow user to modify,maniplulate todo
  //Use state:is a react hook(functionalities for manipulating or managing data on page)

  //1st arg:var name,2nd arg:func name
  //pratice is to use set infront of var name
  //setter function
  //we can leave arg in use state empty or default value
  const [todos,setTodos]=useState([
    //default value
    { input: 'Hello! Add your first todo!', complete: true }
    //now adding functionality for edit or adding in to list

  ])
     //8.4 { for tabs
    //manage state of selected tab
     const [selectedTab,setSelectedTab]=useState('Open')



  //handler function is for sub type for modification of list
  // for add todo specifically
  // for mking adjustments in state variable we need to create copy for it becuase it is immutable 
  //and overwrite origional
  function handleAddTodo(newTodo){
    //created duplicate and spread it ..., append new todo add end in origional
    const newTodoList= [...todos,{input:newTodo,complete:false}]
    //now call setter function for new value to be assigned:
    //it will make sure that changes are made accurately made
    setTodos(newTodoList)
    handleSavedData(newTodoList)

  }
  
  //8.6{

  //8.6.4 now edit
  //index: index of todo we are editing
  function handleCompleteTodo(index){
    //update/edit/modify
    //...todos=spread out previous ones
    let newTodoList=[...todos]
    let completedTodos=todos[index]
    completedTodos['complete']=true
    newTodoList[index]= completedTodos
    setTodos(newTodoList)
    handleSavedData(newTodoList)


  }
  
  //8.6.1
  function handleDeleteTodo(index){

    let newTodoList=todos.filter((val,valindex)=>{
      //if it is equal then delete it else keep it
      return valindex!==index
    })
    setTodos(newTodoList)
    handleSavedData(newTodoList)

  }
  //}
  //9.1{ saved function
  //pass agr of latest data
  function handleSavedData(currTodos){
    //2nd arg object that is todos
    //we make it object becuase we want to do it in json
    //stringify our todolist and sve it to todoapp
    localStorage.setItem('todo-app',JSON.stringify({ 
      todos :currTodos
    }))
  }
  //now add this function to every data manipulating func

// }




  //9{
  //2nd arg:depedency array()
  //if array is empty run as soon the paage is available that is onmount event
  //the logic we want to implement on what events we are tracking
   useEffect(()=>{
    //security check if not ready to access database just exit and wait when it is

    if(!localStorage||!localStorage.getItem('todo-app')) { return }
    // console.log('here')
    let db=[]
    //tell the label of data that we want to fetch
    //unique key on how info is aved
    //its going to check our db and look for key todoapp
    //when we read from database it is json
    
      //parse it as json when read from db
      db=JSON.parse(localStorage.getItem('todo-app'))
      //then settodos
      setTodos(db.todos)
    
   },[])
   //} 9




  


  return (
    <>

      {/* giving property to child component */}
      {/* next implementation in child components */}
      {/* 8.2 onwards passing functgion as property to component */}
      {/* since we have having state modified in app theres we like to have handler */}
      {/* or we have to get access to todo in component */}

      {/*8.4.1 passing it for tabs and also passing setfunction so we change tab from component */}
      {/* 8.6.1 passing delete handler to todolist */}
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList  handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab}/>
      <TodoInput handleAddTodo={handleAddTodo}/>


    </>

  )


}

export default App
