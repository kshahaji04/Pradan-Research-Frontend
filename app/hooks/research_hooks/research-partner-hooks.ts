import GetPartnersApi from '@/app/services/api/research_api/partners_api';
import { useEffect, useState } from "react";

const usePartners = () => {
    const [partnersData, setPartnersData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [partnersError, setPartnersError] = useState<boolean>(false);

    const fetchpartners = async () => {

        setLoading(true);
        try {
          const response = await GetPartnersApi();
          // console.log('partners d',response)
          setPartnersData(response);
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
          if (error !== '') {
            setPartnersError(true);
          } else {
            setPartnersError(false);
          }
          // return response;
        } catch (error) {
          setLoading(false);
          throw error;
        }
        return;
      }
    
      useEffect(() => {
        fetchpartners();
      }, []);
    
    return {partnersData , loadingPartners:loading , partnersError}
}

export default usePartners