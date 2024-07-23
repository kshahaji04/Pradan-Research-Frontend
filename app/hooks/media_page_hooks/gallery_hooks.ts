import GetGalleryApi from '@/app/services/api/media_page_api/galleery_details_api'
import React,{useState,useEffect} from 'react'


const gallery_hooks = () => {
    const [gallery, setGallery] = useState([])
    const [isLoading,setIsloading] = useState(false)
    const fetchData = async()=>{
        try {
            setIsloading(true)
            const res =await GetGalleryApi()
            setGallery(res?.data)
            setIsloading(false)
        } catch (error) {
            console.error('Error fetching gallery data:', error);
        }
       }
    useEffect(()=>{
           fetchData()
    },[])
     
  return {gallery,isLoading}
}

export default gallery_hooks