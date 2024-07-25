import { GetFeaturedPublicationApi } from "@/app/services/api/home_page_api/featured_ publications_api";
import { useEffect, useState } from "react";

const useFeaturedPublication = () => {
    const [featuredPublicationData, setFeaturedPublicationData] = useState<any>([]);
    const [featuredPublicationError, setFeaturedPublicationError] = useState<boolean>(false);
    const [featuredPublicationLoading, setFeaturedPublicationLoading] = useState<boolean>(false);

    async function fetchFeaturedPublication() {
        setFeaturedPublicationLoading(true);
        try {
            const response = await GetFeaturedPublicationApi();
            // console.log(response,"response")
            setFeaturedPublicationLoading(false);
            setFeaturedPublicationData(response);
            return;
        } catch (error) {
            setFeaturedPublicationLoading(false);
            setFeaturedPublicationError(true);
            throw error;
        }
    }

    useEffect(() => {
        // dispatch(fetchPublicationPrintMediaList("Print Media") as any);
        fetchFeaturedPublication();
    }, []);
  
    return {featuredPublicationData, featuredPublicationError, featuredPublicationLoading}

};

export default useFeaturedPublication;
