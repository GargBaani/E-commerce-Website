// create context
// provider
//consumer => hook useContext

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
import { type } from "@testing-library/user-event/dist/type";

const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts: []
};

const AppProvider = ({ children }) => {

    const [state,dispatch]=useReducer(reducer,initialState);
    const getProducts=async(url)=>{
        dispatch({type:"SET_LOADING"});  
        try {
            const res=await axios.get(url);  // promise return krta hai toh use handle krne k leye asyn await 
              const products=await res.data;
              dispatch({type:"SET_API_DATA" , payload:products})
        } catch (error) {
          dispatch({type:"API_ERRROR"});  
        }

    }
    useEffect(()=>{
        getProducts(API);
    },[])
    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
};


//custom hook
const useProductContext=()=>{
    return useContext(AppContext);
}
export{AppProvider , useProductContext};