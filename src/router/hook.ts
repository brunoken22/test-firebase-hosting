import { useRecoilValue } from "recoil";
import { searchStateApi, productStateApi } from "atoms";

export function searchName() {
   const id = useRecoilValue(searchStateApi);
   return id;
}

export function searchId() {
   const product = useRecoilValue(productStateApi);
   return product;
}
