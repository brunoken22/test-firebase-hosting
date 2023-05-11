import React from "react"
import { Link } from "react-router-dom"
import css from  "./searchResult.css"
export function SearchResult(props){
   
   return(
         <div className={css.products}>
            <img src={props.img} alt=""/>
            <div>
              <Link to=  {"/item/"+props.children}> <h3 className={css.title}>{props.title}</h3></Link>
               <p>$ {props.price}</p>
            </div>
      </div>
   )
}