import React, { useState } from "react";

export default function LoginPage()
{
    const [details,setDetails] = useState({userName:'',password:''});

    const handler =(event)=>{
        const{name,value} = event.target;
        setDetails({...details,[name]:value});
    };
    // console.log(details);

    const getStarted =(e)=>{
        e.preventDefault();
        const tempName= details.userName;
        const tempPass= details.password;
        console.log(tempName,tempPass);
        setDetails({userName:'',password:''})
    }
    
    return(
        <div className="bg-orange-300 w-full h=full rounded-lg border-black border-2  ">
            <p className="text-3xl font-bold m-4">LogIn Page</p>
            <div className="m-4 p-4 grid  grid-cols-8 gap-4 ">

                    <div  className="bg-orange-400 rounded-lg text-black p-2 border-black border-2 col-span-8 sm:col-span-2 " >
                        Name:
                    </div>

                    <div className="col-span-8 sm:col-span-6">
                        <input  className="w-full p-2 bg-orange-400 rounded-lg text-black border-black border-2 placeholder-black "
                        type="text" name="userName" id="userName" placeholder="Enter Your Name" value={details.userName} onChange={handler} />
                    </div>
                    

                    <div className="col-span-8 sm:col-span-6">
                        <input  className="bg-orange-400 p-2 rounded-lg text-black border-black border-2 placeholder-black w-full h-full "
                        type="password" name="password" id="password" placeholder="Enter the Password" value={details.password} onChange={handler} />
                    </div>
                    {/* passing props into the component */}
                    {/* <div>
                    <InputCom name="mobile" type="number" value={details.mobile} onChange={handler}/>
                    </div> */}
                    <div className="col-span-8 sm:col-span-2">
                        <button className="bg-orange-400 rounded-lg text-black border-black border-2" onClick={getStarted}>Get Started</button>
                    </div>
                </div>
               
        </div>
    )
    
}
//creating a new component for code reuseability
// const InputCom=(props)=>{
//     return(
//     <input  className="w-full p-2 bg-orange-400 rounded-lg text-black border-black border-2 placeholder-black "
//     type={props.type} name={props.name} id="userName" placeholder="Enter Your Name" value={props.value} onChange={props.onChnage} />
//     )
// }