
import { GetFeaturedPublicationDetailApi } from "@/app/services/api/featured_publication_api/featured_publication_detail";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const useFeaturedPublicationDetail = () => {
    const [featuredPublicationDetailData, setFeaturedPublicationDetailData] = useState<any>([]);
    const [featuredPublicationDetailError, setFeaturedPublicationDetailError] = useState<boolean>(false);
    const [featuredPublicationDetailLoading, setFeaturedPublicationDetailLoading] = useState<boolean>(false);
    

    const { slug } = useParams();
    console.log("slug>>",slug, typeof(slug))
    const decodedSlug = decodeURIComponent(slug);
    

    async function fetchFeaturedPublicationDetail(decodedSlug:any) {
        setFeaturedPublicationDetailLoading(true);
        try {
            const response = await GetFeaturedPublicationDetailApi(decodedSlug);
            console.log("response>>",response)
            setFeaturedPublicationDetailLoading(false);
        
            setFeaturedPublicationDetailData(response?.data);
            return;
        } catch (error) {
            setFeaturedPublicationDetailLoading(false);
            setFeaturedPublicationDetailError(true);
            throw error;
        }
    }

    useEffect(() => {
        // dispatch(fetchPublicationPrintMediaDetail("Print Media") as any);
        fetchFeaturedPublicationDetail(decodedSlug);
    }, [decodedSlug]);
  
    return {featuredPublicationDetailData, featuredPublicationDetailError, featuredPublicationDetailLoading}

};

export default useFeaturedPublicationDetail;
