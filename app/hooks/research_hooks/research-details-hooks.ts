import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetResearchDetailsApi from '@/app/services/api/research_api/research_details_api';
import { useParams } from 'next/navigation';


const useResearchDetails = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();

    // console.log(slug, "slug")
    const [researchDetails, setResearchDetails] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [researchError, setResearchError] = useState<boolean>(false);

    const fetchResearchDetails = async () => {

        setLoading(true);
        try {
          const response = await GetResearchDetailsApi(slug);
          // console.log('research d',response)
          // console.log('research d code',response.code)
          response?.length > 0 && setResearchDetails(response[0]);
          setLoading(false);
          
          let error = '';
          if (response.code === "ECONNABORTED") {
            error = "Request timed out";
          } else if (response.code === "ERR_BAD_REQUEST") {
            error = "Bad Request";
          } else if (response.code === "ERR_INVALID_URL") {
            error = "Invalid URL";
          } else if (response.name === "AxiosError") {
            error = "axios error";
          }
          // console.log('research error !!',error)
          if (error !== '') {
            setResearchError(true);
          } else {
            setResearchError(false);
          }
          // return response;
        } catch (error) {
          setLoading(false);
          throw error;
        }
        return;
      }
    
      useEffect(() => {
        fetchResearchDetails();
      }, []);
    
    return {researchDetails , loadingResearchDetails:loading , researchError}
}

export default useResearchDetails