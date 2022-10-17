import React, { useEffect, useState } from "react";
import { FaSistrix,FaCircle } from "react-icons/fa";
import { repositorie } from "../classes/repositorie";

interface Props{
    repositories:repositorie[]
}


const  Repositories:React.FC<Props>=(props:Props)=>


{
  
    const [repos, setRepos] = useState<repositorie[]>(props.repositories);   
    useEffect(() => {
        setRepos(props.repositories);
        
      }, [props.repositories])
    function filterByRepoName(a:string){
        const findrepo=props.repositories.filter((r)=>r.name.toUpperCase().includes(a.toUpperCase()))
        setRepos(findrepo);
    }
    return(
        <>
        <div className="input-group flex-row align-items-center justify-content-center  " >
             <div className="form-outline ">
                <input type="search"  onChange={e=>filterByRepoName(e.target.value)} className=" form-control m-3" placeholder="search  a repo" />
            </div>
            
            <FaSistrix/>

        </div>
        {
        repos.map((repo)=>{
           
           
            return(
            <div className=" border border-primary m-3 rounded col-md-6" style={{"backgroundColor":"#FCF7F8"}}>
                <div className="d-flex justify-content-between">
                    <div>
                        <a href={repo.url}><span className="fw-bold h4 m-2">{repo.name}</span></a>
                        <span className="badge bg-primary text-wrap m-2">{repo.visibility}</span>
                    </div>
                    <div className="m-2">{repo.created_at.slice(0,10)}</div>
                </div>
                <div className="m-2">{repo.description}</div>
                <div className="d-flex align-items-center">
                    <FaCircle className="m-2" style={{"color":"#C94277"}}/>
                    <div className="m-2">{repo.language}</div>
                </div>

            </div>

            )
        })}
        
        
        </>
    )
    
}

export default Repositories