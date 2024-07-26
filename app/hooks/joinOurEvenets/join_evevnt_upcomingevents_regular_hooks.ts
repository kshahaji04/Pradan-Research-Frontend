import GetJoinEventsReports from "@/app/services/api/join_events/join_events_reports";
import GetUpcomingRegularEvents from "@/app/services/api/join_events/upcoimg_events_regular";
import GetRegularEventsReports from "@/app/services/api/join_events/upcoimg_events_regular";
import React, { useEffect, useState } from "react";


const useRegularEvenetHook = ()=>{
   const [data,setData] = useState([])
   const [isLoading,setIsLoading] = useState(false)
   const [error,setError] = useState(false)
    
   const fetchRegularData = async ()=>{
    try {
        setIsLoading(true)
        const res = await GetUpcomingRegularEvents()
        setData(res?.message?.data)
        setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
        setError(true)
    }
   }
   useEffect(()=>{
     fetchRegularData()
   },[])

    return{
       data,isLoading,error
    }
}
export default useRegularEvenetHook