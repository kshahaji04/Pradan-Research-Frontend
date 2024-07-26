import { GetFeaturedPublicationListApi } from "@/app/services/api/featured_publication_api/featured_publication_list_api";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { GetFeaturedEventApi } from "@/app/services/api/event_api/featured_event_api";

const useFeaturedEvents = () => {
    const [featuredEventData, setFeaturedEventData] = useState<any>([]);
    const [featuredEventError, setFeaturedEventError] = useState<boolean>(false);
    const [featuredEventLoading, setFeaturedEventLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<any>(0);

    const { slug } = useParams();
    {/* @ts-ignore */ }
    const decodedSlug = decodeURIComponent(slug);


    async function fetchFeaturedEvent() {
        setFeaturedEventLoading(true);
        try {
            const response = await GetFeaturedEventApi();
            setFeaturedEventLoading(false);
            setFeaturedEventData(response);
            return;
        } catch (error) {
            setFeaturedEventLoading(false);
            setFeaturedEventError(true);
            throw error;
        }
    }

    useEffect(() => {
        fetchFeaturedEvent();
    }, []);

    return { featuredEventData, featuredEventError, featuredEventLoading  }

};

export default useFeaturedEvents;
