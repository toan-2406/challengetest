import { createContext,ReactNode,useState,useEffect } from "react";
import axiosClient from "../api/axiosClient";
interface DataContextProviderProps {
    children: ReactNode
}
export const DataContext = createContext({})

const DataContextProvider = ({children}:DataContextProviderProps) =>{
    const [data,setData] = useState({})

    const fetchCoins =async () => {
        const res = await axiosClient.get('/coins')
        setData(res.data)
    }
      
   useEffect(() => {
       const fetch = setInterval(() =>{
            fetchCoins()
        },2000)
        return () => {
            clearInterval(fetch)
        }
   }, [data])
   
    
    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}

export default DataContextProvider
