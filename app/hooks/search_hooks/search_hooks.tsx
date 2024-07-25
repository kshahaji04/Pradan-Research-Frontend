import { fetchSearch, get_search_from_store } from "@/app/store/slices/search_slice/search_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// filterParam: any
const useSearch = (pageParam: any, searchKeyParam: any, sortByParam: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchFromStore = useSelector(get_search_from_store);
  const [searchData, setSetSearchData] = useState<any>([]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchSearch({ page: pageParam, searchQuery: searchKeyParam, sortBy: sortByParam}) as any);
  }, [pageParam,searchKeyParam,sortByParam]);
  // , selectedFilters: filterParam 
  useEffect(() => {
    if (searchFromStore?.data?.data) {
      setSetSearchData(searchFromStore?.data?.data);
    }
  }, [searchFromStore,pageParam,searchKeyParam,sortByParam]);

  return { searchData, searchListCount: searchFromStore?.data?.total_count, loadingSearch: searchFromStore?.loading };
};

export default useSearch;
