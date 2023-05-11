import {createRoot}  from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import React ,{Suspense} from "react"
import {AppRouter } from "./router"
import { Loader } from "components/loader/loader";
import {
   RecoilRoot,
   atom,
   selector,
   useRecoilState,
   useRecoilValue,
 } from 'recoil';
function App (){
   
   return (
      <RecoilRoot >
         <Suspense fallback={<Loader/>}>
            <BrowserRouter><AppRouter /></BrowserRouter>
         </Suspense>
      </RecoilRoot>
   )
}
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
