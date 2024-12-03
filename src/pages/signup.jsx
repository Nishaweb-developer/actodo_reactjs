import {Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(props)
{

    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [eusername, seteuser] = useState();
    const [epassword, setepass] = useState();

    function handleUser(evt) {
        seteuser(evt.target.value);
        console.log(users);

    }

    function handlePass(evt) {
        setepass(evt.target.value);
        console.log(users);
    }

    function addUser(){
        setusers([...users,{username:eusername , password:epassword}])
        console.log(users);
        navigate("/")
    }

    return( <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border 
        rounded-l-md">
        
       <h1 className="text-3xl font-medium">Hey Hi!</h1>
       <p>I help you manage activities after you login :)</p>

        <div className="flex flex-col gap-2 my-2">
            <input type="text" className="w-52 border-black p-1 
            bg-transparent border rounded-md" onChange={handleUser} placeholder="Username"/>

<input type="password" className="w-52 border-black p-1 
            bg-transparent border rounded-md" onChange={handlePass} placeholder="Password"/>

<input type="password" className="w-52 border-black p-1 
            bg-transparent border rounded-md" placeholder="Confirm Password"/>
       
       <button onClick={addUser} className="bg-[#8272Da] w-24 p-1 rounded-md">
        SignUp
       </button>
       <p>Already have an account?<Link className="underline" to={"/"}>Login</Link></p>
        </div>
        </div>
        
            </div>)
}

export default Signup