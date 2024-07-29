import GetResearchPublicationApi from '@/app/services/api/research_api/publication_api';
import { useEffect, useState } from "react";

const useResearchPublication = (type: string) => {
  const [researchPublicationData, setResearchPublicationData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [researchPublicationError, setResearchPublicationError] = useState<boolean>(false);

  const fetchResearchPublication = async () => {

    setLoading(true);
    try {
      const response = await GetResearchPublicationApi(type);
      console.log('publication response', response)
      setResearchPublicationData(response?.data);
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
        setResearchPublicationError(true);
      } else {
        setResearchPublicationError(false);
      }
      // return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
    return;
  }

  useEffect(() => {
    fetchResearchPublication();
  }, []);

  return { researchPublicationData, loadingResearchPublication: loading, researchPublicationError }
}

export default useResearchPublication