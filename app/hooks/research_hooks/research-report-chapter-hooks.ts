import GetChapterWiseApi from '@/app/services/api/research_api/chapter_wise_report_api';
import { useEffect, useState } from "react";


const useReportChapters = (type:string) => {
    const [reportChaptersData, setReportChaptersData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [reportChaptersError, setReportChaptersError] = useState<boolean>(false);

    const fetchReportChapters = async () => {

        setLoading(true);
        try {
          const response = await GetChapterWiseApi(type);
          // console.log('reportChapters d',response)
          setReportChaptersData(response);
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
            setReportChaptersError(true);
          } else {
            setReportChaptersError(false);
          }
          // return response;
        } catch (error) {
          setLoading(false);
          throw error;
        }
        return;
      }
    
      useEffect(() => {
        fetchReportChapters();
      }, []);
    
    return {reportChaptersData , loadingReportChapters:loading , reportChaptersError}
}

export default useReportChapters