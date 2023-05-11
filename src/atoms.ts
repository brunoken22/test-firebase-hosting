import { atom, selector } from "recoil";

export const searchState = atom({
   key: "userNameAtom",
   default: "",
});
export const searchStateApi = selector({
   key: "userNameState",
   get: async ({ get }) => {
      const search = get(searchState);
      const res = await fetch(
         "https://api.mercadolibre.com/sites/MLA/search?q=" + search
      );
      const respuesta = await res.json();

      return respuesta.results;
   },
});

export const productState = atom({
   key: "productState",
   default: "",
});

export const productStateApi = selector({
   key: "productStateApi",
   get: async ({ get }) => {
      const search = get(productState);
      if (!search) {
         return false;
      }
      const res = await fetch("https://api.mercadolibre.com/items/" + search);
      const respuesta = await res.json();

      return respuesta;
   },
});
