import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchPopularTag, get_popular_tag_from_store } from "@/app/store/slices/home_page_slice/popular_tag_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePopularTags = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const popularTagsFromStore = useSelector(get_popular_tag_from_store);
  const [popularTagsData, setPopularTagsData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchPopularTag() as any);
  }, []);

  useEffect(() => {
    if (popularTagsFromStore?.data) {
      setPopularTagsData(popularTagsFromStore?.data);
    }
  }, [popularTagsFromStore]);

  return { popularTagsData, loadingPopularTags: popularTagsFromStore?.loading };
};

export default usePopularTags;
