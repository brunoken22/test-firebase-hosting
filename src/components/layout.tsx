import React ,{useState,useEffect,useContext,} from "react"
import { Outlet} from "react-router-dom";
import { SearcForm } from "components/searchForm/searchForm";
function Layout (props){
   return(
      <>
         <SearcForm ></SearcForm>
         <Outlet/>
      </>
   )
}

export {Layout}