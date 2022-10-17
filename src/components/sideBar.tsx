import React from "react"
import { FaUsers,FaMapMarkerAlt,FaRegBuilding} from "react-icons/fa";
import {user} from "../classes/user"


const Sidebar:React.FC<user>=(user:user)=>
{  if(user)
    return(
        <div className="text-center" style={{}} >
          
        <div className="">
            <img src={user.avatarUrl} className=' rounded-circle  pt-3 w-50 center-block image-fluid ' ></img>
        </div>
        <a href={user.url}><div className="h1">{user.login}</div></a>
        <div>{user.name}</div>
        <div className=" d-flex justify-content-center align-items-center ">
                    <FaUsers />&nbsp;
                    <span className="fw-bold">{user.followers}</span>
                    <span >&nbsp;Followers</span>
                    <div className=""> , <span className="fw-bold">{user.following}</span><span>&nbsp;Following</span></div>
                </div>
            <div className="d-flex justify-content-center align-items-center">
                <FaRegBuilding/>
                {user.company? <span> {user.company}</span>:(<span>NA</span>)}
            </div>
               

                <div className="d-flex justify-content-center align-items-center">
                    <FaMapMarkerAlt/>
                    {user.location? <span> {user.location}</span>:(<span>NA</span>)}
                </div>

        
       
        
        </div>
    )
    return(<div>not found</div>)
}

export default Sidebar ;