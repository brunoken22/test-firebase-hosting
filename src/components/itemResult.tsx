import React,{useEffect,useState} from "react"
import { Link ,useParams} from "react-router-dom";
function ItemResult (props){
   
   return (
      <div>
         <img src={props.url} alt={props.title}  />
      </div>
   )
}

export {ItemResult}