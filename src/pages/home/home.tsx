import React ,{useState,useEffect,useContext} from "react"
import css from "./index.css"
function Home (props){

   
   return(
      <div  style={{textAlign:"center"}}>
         <h2 className={css.home}>Bienvenido a Mercado libre hecho con React</h2>
         <div className={css.gif}></div>
      </div>
   )
}

export {Home}