import React from "react"
import { Button } from "ui/button";
import { Input} from "ui/input";
import { Link, useNavigate } from "react-router-dom";
import css from "./index.css"
export function SearcForm(props){
   const navigate = useNavigate()
   const handleSubmit = (e)=>{
      e.preventDefault();
      const search = e.target.search.value
      navigate("/search/"+search,{replace:true})

   }
   return(
      <form className={css.search} onSubmit={handleSubmit}>
         <div>
            <Link to="/"><img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png" alt="" /></Link>
         </div>
         <Input/>
         <Button>Buscar</Button>
      </form>
   )
}