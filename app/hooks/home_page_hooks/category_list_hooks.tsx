import { fetchAboutUsShortInfo, get_about_us_short_info_from_store } from "@/app/store/slices/home_page_slice/about_us_short_info_slice";
import { fetchBanner, get_banner_from_store } from "@/app/store/slices/home_page_slice/banner_slice";
import { fetchCategoryList, get_category_list_from_store } from "@/app/store/slices/home_page_slice/category_list_slice";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCategoryList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const categoryListFromStore = useSelector(get_category_list_from_store);
  const [categoryData, setCategoryData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchCategoryList() as any);
  }, []);

  useEffect(() => {
    if (categoryListFromStore?.data) {
      setCategoryData(categoryListFromStore?.data);
    }
  }, [categoryListFromStore]);

  return { categoryData, loadingCategoryList: categoryListFromStore?.loading };
};

export default useCategoryList;
