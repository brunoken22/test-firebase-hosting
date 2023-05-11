import React ,{useContext,useEffect} from "react"
import { Link ,useParams} from "react-router-dom";
import { useRecoilState ,useRecoilValue} from "recoil"
import {searchState,searchStateApi} from "atoms"
import { searchName} from "router/hook"
import { SearchResult } from "components/searchResult/searchResult"
import css from "./index.css"

export function Search (){
   const query = useParams()
   const [search ,setSearch] = useRecoilState(searchState)
   
   useEffect(()=>{
      setSearch(query.query)
   },[search])
   const result = searchName() 
   
   // const value = useContext(MyContext)

   return(
        <div className={css.container}>
            <div className={css.product}>
               {  result? result.map((item,index)=><SearchResult key={item.id} img={item.thumbnail} title={item.title} price={item.price}>{item.id}</SearchResult> ):null}
            </div>
        </div>
      )
   }
- 1