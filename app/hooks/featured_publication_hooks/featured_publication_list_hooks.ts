import { GetFeaturedPublicationListApi } from "@/app/services/api/featured_publication_api/featured_publication_list_api";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const useFeaturedPublicationList = (currentPage: any) => {
    const [featuredPublicationListData, setFeaturedPublicationListData] = useState<any>([]);
    const [featuredPublicationListError, setFeaturedPublicationListError] = useState<boolean>(false);
    const [featuredPublicationListLoading, setFeaturedPublicationListLoading] = useState<boolean>(false);
    const [totalCount, setTotalCount] = useState<any>(0);

    const { slug } = useParams();
    {/* @ts-ignore */ }
    const decodedSlug = decodeURIComponent(slug);


    async function fetchFeaturedPublicationList(decodedSlug: any) {
        setFeaturedPublicationListLoading(true);
        try {
            const response = await GetFeaturedPublicationListApi(decodedSlug, currentPage);
            setFeaturedPublicationListLoading(false);
            setTotalCount(response?.total_count)
            setFeaturedPublicationListData(response?.data);
            return;
        } catch (error) {
            setFeaturedPublicationListLoading(false);
            setFeaturedPublicationListError(true);
            throw error;
        }
    }

    useEffect(() => {
        // dispatch(fetchPublicationPrintMediaList("Print Media") as any);
        fetchFeaturedPublicationList(decodedSlug);
    }, [decodedSlug, currentPage]);

    return { featuredPublicationListData, featuredPublicationListError, featuredPublicationListLoading, totalCount }

};

export default useFeaturedPublicationList;
