import React from "react"
import css from "./index.css"

export function Button(props){
   return (
      <button  type="submit" className={css.button}>{props.children}</button>
   )
}