import { useState } from "react";

function Todolist(props){

    var setActivityArr = props.setActivityArr;
    var activityArr = props.activityArr;

    const [newActivity,setNewActivity] = useState("");

    function Handlechange(evt){

        setNewActivity(evt.target.value);
    }

    function AddActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity(" ")
    }

    return(
        <>  <h1 className="text-2xl font-medium">Manage Activities</h1> 
        <div>
        <input type="text" value = {newActivity} onChange={Handlechange} className="border border-black bg-transparent p-1" placeholder="Next Activity?"/>
        <button className="bg-black text-white pr-2 pl-2 border border-black ml-2" onClick={AddActivity}>Add</button>
        </div>
        </>

    )
}
export default Todolist