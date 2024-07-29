
import { GetFeaturedPublicationDetailApi } from "@/app/services/api/featured_publication_api/featured_publication_detail";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { GetFeaturedEventDetailsApi } from "@/app/services/api/event_api/featured_event_details_api";

const useFeaturedEventDetail = () => {
    const [featuredEventDetailData, setFeaturedEventDetailData] = useState<any>([]);
    const [featuredEventDetailError, setFeaturedEventDetailError] = useState<boolean>(false);
    const [featuredEventDetailLoading, setFeaturedEventDetailLoading] = useState<boolean>(false);
    

    const { slug }:any = useParams();
    console.log("slug>>",slug, typeof(slug))
    const decodedSlug = decodeURIComponent(slug);
    // const decodedSlug = 'feature-event';
    

    async function fetchFeaturedEventDetail(decodedSlug:any) {
        setFeaturedEventDetailLoading(true);
        try {
            const response = await GetFeaturedEventDetailsApi(decodedSlug);
            console.log("response>>",response)
            setFeaturedEventDetailLoading(false);
        
            setFeaturedEventDetailData(response[0]);
            return;
        } catch (error) {
            setFeaturedEventDetailLoading(false);
            setFeaturedEventDetailError(true);
            throw error;
        }
    }

    useEffect(() => {
        fetchFeaturedEventDetail(decodedSlug);
    }, [decodedSlug]);
  
    return {featuredEventDetailData, featuredEventDetailError, featuredEventDetailLoading}

};

export default useFeaturedEventDetail;
