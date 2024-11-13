import axios from "./axios";
import { createContext, useEffect, useState } from "react";

export let Context=createContext()
export let ContextProvider= (props)=>{
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[])
    let getProducts=async ()=>{
        let {data}=await axios("/products")
        setProducts(data)
    }
    useEffect(() => {
      getProducts()
    }, [])
    
    return (
        <Context.Provider value={[products,setProducts]}>
            {props.children}
        </Context.Provider>
    )
}