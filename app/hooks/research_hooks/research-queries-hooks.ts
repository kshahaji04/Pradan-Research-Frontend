
import GetQueriesApi from "@/app/services/api/research_api/queries_api";
import { useEffect, useState } from "react";

const useQueries = () => {
    const [queriesData, setQueriesData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [queriesError, setQueriesError] = useState<boolean>(false);

    const fetchQueries = async () => {

        setLoading(true);
        try {
          const response = await GetQueriesApi();
          // console.log('Queries d',response)
          setQueriesData(response);
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
            setQueriesError(true);
          } else {
            setQueriesError(false);
          }
          // return response;
        } catch (error) {
          setLoading(false);
          throw error;
        }
        return;
      }
    
      useEffect(() => {
        fetchQueries();
      }, []);
    
    return {queriesData , loadingQueries:loading , queriesError}
}

export default useQueries