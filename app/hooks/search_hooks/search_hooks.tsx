import { fetchSearch, get_search_from_store } from "@/app/store/slices/search_slice/search_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useSearch = (pageParam: any, searchKeyParam: any, sortByParam: any, filterParam: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchFromStore = useSelector(get_search_from_store);
  const [searchData, setSetSearchData] = useState<any>([]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchSearch({ page: pageParam, searchQuery: searchKeyParam, sortBy: sortByParam, selectedFilters: filterParam }) as any);
  }, []);

  useEffect(() => {
    if (searchFromStore?.data?.data) {
      setSetSearchData(searchFromStore?.data?.data);
    }
  }, [searchFromStore]);

  return { searchData, searchListCount: searchFromStore?.data?.total_count, loadingSearch: searchFromStore?.loading };
};

export default useSearch;
