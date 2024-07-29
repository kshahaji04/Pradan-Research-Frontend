import GetJoinEventsReports from '@/app/services/api/event_api/join_events_reports'
import React, { useEffect, useState } from 'react'

const usePastEventReportHook = () => {
    const [reportData,setReportData] = useState([])
    const [isLoading,setIsloading] = useState(false)
    const [error,setError] = useState(false)
     
    const fetchJoinEvents = async ()=>{
       try {
        setIsloading(true)
        const res = await GetJoinEventsReports()
        setReportData(res?.message?.data)
        setIsloading(false)
       } catch (error) {
         setIsloading(false)
         setError(true)
       }

    }
   useEffect(()=>{
      fetchJoinEvents()
   },[])
  return { 
        reportData,isLoading,error
  }
}

export default usePastEventReportHook