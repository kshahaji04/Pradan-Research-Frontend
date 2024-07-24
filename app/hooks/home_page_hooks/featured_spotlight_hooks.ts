import { spotlightDataInterface } from "@/app/interfaces/home_page_interface";
import { GetSpotlightApi } from "@/app/services/api/home_page_api/featured_api";
import { useEffect, useState } from "react";

const useSpotlight = () => {
  const [spotlightData, setSpotlightData] = useState<any>([]);
  const [spotlightError, setSpotlightError] = useState<boolean>(false);
  const [spotlightLoading, setSpotlightLoading] = useState<boolean>(false);

  async function fetchSpotlight() {
    setSpotlightLoading(true);
    try {
      const response = await GetSpotlightApi();
      // console.log(response,"response")
      setSpotlightLoading(false);
      if (response?.length > 0) {
        setSpotlightData(response[0]);
      }
      return;
    } catch (error) {
      setSpotlightLoading(false);
      setSpotlightError(true);
      throw error;
    }
  }

  useEffect(() => {
    // dispatch(fetchPublicationPrintMediaList("Print Media") as any);
    fetchSpotlight();
  }, []);

  return {
    spotlightData,
    spotlightError: spotlightError as boolean,
    spotlightLoading: spotlightLoading as boolean,
  };
};

export default useSpotlight;
