import React, { useState } from "react";

export default function LoginPage()
{
    const [details,setDetails] = useState([name,password]);
    
    const handler =(event)=>{
        event.target.value
    };
    
    return(
        <div className="bg-orange-300 w-full h=full rounded-lg border-black border-2  ">
            <p className="text-3xl font-bold m-4">LogIn Page</p>
            <div className="m-4 p-4 grid  grid-cols-8 gap-4 ">

                    <div  className="bg-orange-400 rounded-lg text-black p-2 border-black border-2 col-span-8 sm:col-span-2 " >
                        Name:
                    </div>

                    <div className="col-span-8 sm:col-span-6">
                        <input  className="w-full p-2 bg-orange-400 rounded-lg text-black border-black border-2 placeholder-black "
                        type="text" name="Name" id="Name" placeholder="Enter Your Name" value={details.name} onChange={handler} />
                    </div>
                    

                    <div className="col-span-8 sm:col-span-6">
                        <input  className="bg-orange-400 p-2 rounded-lg text-black border-black border-2 placeholder-black w-full h-full "
                        type="password" name="Name" id="Name" placeholder="Enter the Password" value={details.name} onChange={handler} />
                    </div>
                    <div className="col-span-8 sm:col-span-2">
                        <button className="bg-orange-400 rounded-lg text-black border-black border-2">Get Started </button>
                    </div>
                </div>
        </div>
    )
    
}