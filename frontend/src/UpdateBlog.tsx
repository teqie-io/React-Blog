import * as React from "react"
import Navigator from "./Navigator";
import NavBar from "./NavBar";
import {useState} from "react"
import axios from "axios"
import { useSelector } from "react-redux";

export default function UpdateBlog()
{
    const viewById = useSelector((state : any) => state.viewById)
    const [input,setInput] = useState({
        aid:"",
        isDraft:"0",
        title:"",
        authorName:"",
        createdDate:"",
        description:"",
        imageUrl:"",
    })
    function handleClick(event)
    {
       event.preventDefault();
       
       console.log(input)
       axios.put(`/update/${viewById}`,input)
       alert("Blog updated")

    }
    function handleChange(event)
    {
        const{name,value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    return(
        <div className="form-div">
        <NavBar/>
        <Navigator/>
        <form className="form-group">
        aid<input className="form-control" name="aid" onChange={handleChange}></input>
        isDraft<select className="form-control" name="isDraft" onChange={handleChange}>
            <option value={"0"}>post</option>
            <option value={"1"}>draft</option>
        </select>
        title<input className="form-control" name="title" onChange={handleChange}></input>
        authorname<input className="form-control" name="authorName" onChange={handleChange}></input>
        createddate<input className="form-control" name="createdDate" onChange={handleChange} type="datetime-local"></input>
        imageUrl<input className="form-control" name="imageUrl" onChange={handleChange}></input>
        description<textarea className="form-control" name="description" onChange={handleChange}></textarea>
        <button className="form-button" onClick={handleClick}>Create Blog</button>
        
        </form>
        </div>
    )
}