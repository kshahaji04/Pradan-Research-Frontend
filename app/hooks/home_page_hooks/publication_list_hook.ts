
import GetPublicationsApi from "@/app/services/api/home_page_api/publictaion_list_api";
import { fetchPublicationPrintMediaList, get_publication_print_media_list_from_store } from "@/app/store/slices/home_page_slice/publication_print_media_list_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePublicationList = () => {
  const dispatch = useDispatch();
  const PublicationListFromStore = useSelector(get_publication_print_media_list_from_store);
  const [printMediaData, setPrintMediaData] = useState<any>([]);
  const [socialMediaData, setSocialMediaData] = useState<any>([]);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchSocialMedia() {
    setLoading(true);
    try {
      const response = await GetPublicationsApi('Social Media');
      // console.log(response,"response")
      setLoading(false);
      setSocialMediaData(response?.data);
      return;
    } catch (error) {
      setLoading(false);
      setError(true);
      throw error;
    }
  }

  useEffect(() => {
    // dispatch(fetchPublicationPrintMediaList("Print Media") as any);
    fetchSocialMedia();
  }, []);

  useEffect(() => {
    if (PublicationListFromStore?.data && PublicationListFromStore?.data?.data?.length > 0) {
      const printMedia = PublicationListFromStore?.data?.data
      setPrintMediaData(printMedia);
      // console.log(printMedia, socialMedia, PublicationListFromStore?.data?.data, "publication data")
    }
    if (PublicationListFromStore?.error !== "") {
      setError(true);
    }
  }, [PublicationListFromStore]);


  return { printMediaData, socialMediaData, loadingPublicationList: PublicationListFromStore?.loading, loadingSocialMediaList: loading, error: error };
};

export default usePublicationList;
