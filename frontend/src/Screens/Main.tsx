import NavBar from "../Components/NavBar"
import Card from "../Components/Card"
import Navigator from "../Components/Navigator"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"

export default function Main()
{
    //const myState = useSelector((state : any) => state.changeTheUser);
        const isLogged =useSelector((state : any)=>  state.logStatus)
    
    const [datab,setBlogs]=useState([{
            _id:"",
            aid:"",
            isDraft:"",
            title:"",
            authorName:"",
            createdDate:"",
            description:"",
            imageUrl:"",
    
        }])
        useEffect(()=>{
            fetch("/allblogs").then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonRes=>setBlogs(jsonRes))
        })
    const blogs = datab.map(item =>
    {
        return(
           
            <div>
            {
            (item.isDraft=="0"&& 
            <li> 
                <Card  
                    key={item._id}
                    {...item}
                />
            </li>
            )
            }
            
            </div>          
            
        )
    }
    )
    return(
       
        <div className="app">

            <NavBar/>
            <Navigator/>
           
           {isLogged==1 &&  //show blogs only if isLogged is true
            <section  className="list" >
                <ol>
                    {blogs}
                </ol>
            </section>
            }
        </div>
     
    )
}