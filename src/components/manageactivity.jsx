import Todoitem from "./todoitem"

function Manageactivity(props){
    var setActivityArr = props.setActivityArr;
    var activityArr = props.activityArr;

    return(


<div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
<h1 className="text-2xl font-medium">Today's Activity</h1>
  
 {activityArr.length===0?<p>You haven't added anything yet</p>:" "}        
{
   
                activityArr.map(function(item,index){
                   
                   return <Todoitem id={item.id} item={item} activityArr={activityArr} index={index} setAct={setActivityArr}/>
                   
                })
               
            }
            
        </div>

    )
}

export default Manageactivity
