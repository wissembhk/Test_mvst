import React, { useState } from "react";
import {gql,useQuery } from '@apollo/client';
import Sidebar from "../components/sideBar";
import {user} from "../classes/user"
import Repositories from "../components/Repositories";
import { repositorie } from "../classes/repositorie";

const  Profile:React.FC=()=> {
    
        const [name,setname]=useState<string>('');
        const GET_REPOS=gql`
        query user {
            user(login: "${name}") {
              
              login
              avatarUrl
              company
              location
              url
              name
              
              repositories(first: 50) {
                nodes {
                    url
                    visibility
                    name
                    description
                    createdAt
                    updatedAt
                    languages(first: 1) {
                        
                          nodes {
                            name
                          
                        }
                      }
                    
                }
               
              }
              followers {
                totalCount
              }
              following {
                totalCount
              }
            }
          }
        `
      let userData=new user("","","",0,0,"","","")  ;
      let repos :repositorie[]=[];
      
        const {loading,error,data}=useQuery(GET_REPOS)
       if(data){
          userData  = new user(
          data['user']['login'],
          data['user']['company'],
          data['user']['avatarUrl'],
          data['user']['followers'].totalCount,
          data['user']['following'].totalCount,
          data['user']['location'],
          data['user']['url'],
          data['user']['name']
                               ) 
            
            for(var r of data['user']['repositories']['nodes'])
            {  if(r['languages']['nodes'][0]){
                var d = new repositorie(r['name'],
                                        r['visibility'],
                                        r['url'],
                                        r['description'],
                                        r['createdAt'],
                                        r['updatedAt'],
                                        r['languages']['nodes'][0]['name'])
               
                repos.push(d)   
            }   
            }
       
                
            }
        
       
    
    return (
        <div >
            <div className="input-group flex-row align-items-center justify-content-between fixed-top " style={{"backgroundColor":"black"}}>
               <img src={process.env.PUBLIC_URL+"/images/github.png"} width="60rem" className="m-3"></img>
                <div className="form-outline  " style={{"marginRight":"2rem"}}>
                    <input type="search"  value={name} className=" form-control m-3" placeholder="search  a user" onChange={e=>setname(e.target.value)} />
                </div>
                

            </div>
         {name.length!=0 && data?
            <div className=" p-0 d-flex flex-column flex-lg-row col-lg-12 " style={{"marginTop":"7rem"}} >

                
                <div className=" col-lg-4 col-md-12 col-12 "  >
                    <Sidebar {...userData}></Sidebar>
                </div > 
                <div className=" col-lg-8 col-md-12 col-12 d-flex flex-wrap justify-content-center"  >
                    {repos.length>0?
                    <Repositories  repositories={repos}></Repositories>:(<div>no repos</div>)}
                </div>
                
            </div>:(
                <div className="text-center" style={{"marginTop":"5rem"}}>
                    <img className="  mt-5" style={{"maxWidth":"50%"}}   src={process.env.PUBLIC_URL+"/images/user-not-found.png"}></img>
                    <h1>Please enter a valid username</h1>
                </div>
            ) }
        </div>
        
    )
   
}
export default Profile