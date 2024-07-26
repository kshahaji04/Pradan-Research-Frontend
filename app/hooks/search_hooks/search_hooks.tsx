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
  console.log(searchKeyParam,"console in search hook")
  useEffect(() => {
    console.log(searchKeyParam,"console in search hook2")
    if (searchKeyParam) {
      dispatch(fetchSearch({ page: pageParam, searchQuery: searchKeyParam, sortBy: sortByParam}) as any);
    }
  }, []);
  // , selectedFilters: filterParam 
  useEffect(() => {
    if (searchFromStore?.data?.data) {
      console.log(searchKeyParam,"console in search hook3")
      setSetSearchData(searchFromStore?.data?.data);
    }
  }, [searchFromStore]);

  return { searchData, searchListCount: searchFromStore?.data?.total_count, loadingSearch: searchFromStore?.loading,error:searchFromStore?.error };
};

export default useSearch;
