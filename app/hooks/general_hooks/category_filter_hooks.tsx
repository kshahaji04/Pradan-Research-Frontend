// hooks/blog_hooks/blog_list_hooks.ts
import { fetchCategoryFilter, get_category_filter_from_store } from "@/app/store/slices/general_slice/category_filter_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCategoryFilter = () => {
  const dispatch = useDispatch();
  const categoryFilterFromStore = useSelector(get_category_filter_from_store);
  const [categoryFilterData, setCategoryFilterData] = useState<any>([]);
  const router = useRouter();
  const { query } = useRouter();
  useEffect(() => {
    dispatch(fetchCategoryFilter() as any);
  }, [dispatch]);

  useEffect(() => {
    if (categoryFilterFromStore?.data) {
      setCategoryFilterData(categoryFilterFromStore?.data);
    }
  }, [categoryFilterFromStore]);

  return { categoryFilterData, loadingCategoryFilter: categoryFilterFromStore?.loading };
};

export default useCategoryFilter;
