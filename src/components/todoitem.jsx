function Todoitem(props)
{
    const activityArr = props.activityArr;
const setAct = props.setAct;

const Handledelete = (deleteid) => {
  

var tempArr = activityArr.filter(function(item){
    if(item.id === deleteid)
    {
        return false
    }
    else
    {
        return true
    }
  
})

setAct(tempArr);

    }
    
    return(
        <>
        <div className="flex justify-between gap-2 my-2">
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="bg-red-600 text-white border-none rounded-md p-1" onClick={()=> Handledelete(props.id)}>Delete</button>
        </div>
        </>
    )
}

export default Todoitem