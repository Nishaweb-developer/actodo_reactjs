import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    
    const navigate = useNavigate()
    const [eusername, seteuser] = useState();
    const [epassword, setepass] = useState();
    const [rUser,setRuser]=useState(true);

    var userFound = false;

    const users = props.users
    
     
    function handleUser(evt) {
        seteuser(evt.target.value);
        console.log(users);

    }

    function handlePass(evt) {
        setepass(evt.target.value);
    }
    function checkUser() {
        users.forEach(function(item)
        {
            if(item.username === eusername && item.password === epassword){
                console.log("Login Done");
                userFound = true
                navigate("/landing",{state:{user:eusername}})
                console.log(rUser)
            }
            // else{
            //     console.log("Login Failed");
            //     setRuser(false);
            //     console.log(rUser);
            // }

            if(userFound === false){
                console.log("Login failed");
                setRuser(false)

            }
        })
           
          
    

    }
    return (<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border 
        rounded-l-md">

            <h1 className="text-3xl font-medium">Hey Hi!</h1>
            {rUser? <p>I help you manage activities after you login :)</p>: <p className='text-red-500'>Please Sign Up if you don't have an account </p>}
           

            <div className="flex flex-col gap-2 my-2">
                <input type="text" onChange={handleUser} className="w-52 border-black p-1 
            bg-transparent border rounded-md" value={eusername} placeholder="Username" />

                <input type="password" onChange={handlePass} className="w-52 border-black p-1 
            bg-transparent border rounded-md" value={epassword} placeholder="Password" />



                <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkUser}>
                    Login
                </button>
                <p>Don't have an account?<Link className="underline" to={"/signup"}>Sign Up</Link></p>
            </div>
        </div>

    </div>)
}

export default Login