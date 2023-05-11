import React ,{useState,useEffect,useContext} from "react"
import { useRecoilState,useRecoilValue } from "recoil"
import {ItemResult} from "../../components/itemResult"
import {productState} from "atoms"
import { searchId } from "router/hook"
import { useParams } from "react-router-dom"
import Carousel  from 'nuka-carousel'
import css  from "./index.css"
function Item (props){
   const [product,setProduct] = useRecoilState(productState)
   const id =useParams()
   
   useEffect(()=>{
      setProduct(id.id)
   },[product])
   const valor = searchId() 
   
     return(
      <div className={css.contenedor}>
         <Carousel slidesToShow={1} cellSpacing={1}    dragging={true}
         renderCenterLeftControls={({ previousSlide }) => (
        <button className={css.button} onClick={previousSlide}>
          {"<"}
        </button>
         )}
         renderCenterRightControls={({ nextSlide }) => (
        <button className={css.button} onClick={nextSlide}>
          {">"}
        </button>
        
         )}>
            {valor.id?valor["pictures"].map(item=><ItemResult key={item.id} url={item.url} title={item.title} className={css.image} />):null}
         </Carousel>
         {valor.id ? <div><h2>{valor["title"]}</h2> <p>$ {valor["price"]}</p></div>:null}
      </div>  

     )
   }

export {Item}