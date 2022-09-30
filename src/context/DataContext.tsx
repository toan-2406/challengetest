import { createContext,ReactNode,useState,useEffect } from "react";
import dataRespon from "../api/dataRespon";
interface DataContextProviderProps {
    children: ReactNode
}
export const DataContext = createContext({})

const DataContextProvider = ({children}:DataContextProviderProps) =>{
    const [data,setData] = useState([])

    const fetchCoins = async () => {
        const res = await dataRespon.getCoins()
        setData(res.data)
    }
   useEffect(() => {
    //use setInterval to fake realtime because api free not have
    fetchCoins()
   }, [])
   
    
    return <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
}

export default DataContextProvider
