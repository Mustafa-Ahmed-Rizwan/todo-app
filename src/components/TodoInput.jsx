//2.4
//7
//8.3 expecting some prperties
//now importing use state hook for mananaging the value:
import { useState } from "react";
export function TodoInput(props) {
  //8.3.1 destructure props:
  const { handleAddTodo } = props;
  //8.3.2 managing input through state:
  //stateful react value for manage value inside todo
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      {/*8.3.3
            on new input aroow function will be called and its gonna add new value to stateful variable that is e.target.value  
            since it is input it is dynamic component for we need to need stateful variable
            value of input matches stateful variable then onchange everytime inside input value chnages
            then set value
            */}
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
      />
      {/* now for adding new todo logic
            when user his info using above then when on click button its gonna add that info
            
            */}
      <button
        onClick={() => {
          // if no inpput then exit the function never add that todo:security check
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          //clear value of input baack to empty screen
          //for next todo
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
