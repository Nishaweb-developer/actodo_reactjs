import Todolist from "./todolist";
import Manageactivity from "./manageactivity";
import { useState } from "react";



function TodoContainer(){
    const [activityArr,setActivityArr] = useState([
        {
        id:1,
         activity:'Walk in the morning'
        },
        {
            id:2,
            activity:'Have breakfast'
        },
        {
            id:3,
            activity:'Have food'
        }
    ])
    return(
        <div className="flex gap-3 align-top flex-wrap">
        <div className="flex flex-col gap-2">
          <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
        <Manageactivity activityArr={activityArr} setActivityArr={setActivityArr}/>
      
       </div>

    );
}

export default TodoContainer