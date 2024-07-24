
import { GetFeaturedResearchApi } from "@/app/services/api/home_page_api/featured_api";
import { useEffect, useState } from "react";

const useFeatured = () => {
    const [featuredData, setFeaturedData] = useState<any>([]);
    const [featuredError, setFeaturedError] = useState<boolean>(false);
    const [featuredLoading, setFeaturedLoading] = useState<boolean>(false);

    async function fetchFeatured() {
        setFeaturedLoading(true);
        try {
            const response = await GetFeaturedResearchApi();
            // console.log(response,"response")
            setFeaturedLoading(false);
            setFeaturedData(response);
            return;
        } catch (error) {
            setFeaturedLoading(false);
            setFeaturedError(true);
            throw error;
        }
    }

    useEffect(() => {
        // dispatch(fetchPublicationPrintMediaList("Print Media") as any);
        fetchFeatured();
    }, []);
  
    return {featuredData, featuredError: featuredError as boolean, featuredLoading:featuredLoading as boolean}

};

export default useFeatured;
