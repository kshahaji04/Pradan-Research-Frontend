import GetPartnersApi from '@/app/services/api/research_api/partners_api';
import GetResearchInfoApi from '@/app/services/api/research_api/research_info_api';
import { useEffect, useState } from "react";

const useResearchInfo = () => {
    const [researchInfoData, setResearchInfoData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [researchError, setResearchError] = useState<boolean>(false);

    const fetchResearchInfo = async () => {

        setLoading(true);
        try {
          const response = await GetResearchInfoApi();
          // console.log('partners d',response)
          setResearchInfoData(response[0]);
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
        fetchResearchInfo();
      }, []);
    
    return {researchInfoData , loadingResearch:loading , researchError}
}

export default useResearchInfo