import { Route,Routes} from "react-router-dom";
import React from "react"
import{Home} from "pages/home/home"
import { Layout } from "components/layout";
import {Search} from "pages/searchResult/search"
import { Item } from "pages/item/item";

function AppRouter(){
   return (
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index  element={<Home/>}/>
            <Route path="/search/:query"  element={<Search/>}/>
            <Route path="/item/:id"  element={<Item/>}/>
         </Route>
      </Routes>
   )
}

export {AppRouter}