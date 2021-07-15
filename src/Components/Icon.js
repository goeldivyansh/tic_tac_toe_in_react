import React from 'react'
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({choice}) => {
    
    if(choice === "cross") {
        return <FaTimes className = "icon"/>
    }
    else if(choice === "circle")  {
        return <FaRegCircle className = "icon"/>
    }
    else {
        // return <FaPen className = "icon"/>
        return ""
    }
}

export default Icon