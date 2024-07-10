import { fetchProjectList, get_project_list_from_store } from "@/app/store/slices/general_slice/project_list_slice";
import { fetchLogo, get_logo_from_store } from "@/app/store/slices/home_page_slice/logo_slice";
import { fetchNavbar, get_navbar_from_store } from "@/app/store/slices/home_page_slice/navbar_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProjectList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const projectListFromStore = useSelector(get_project_list_from_store);
  const [projectList, setProjectList] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchProjectList() as any);
  }, []);

  useEffect(() => {
    if (projectListFromStore?.data) {
      setProjectList(projectListFromStore?.data);
    }
  }, [projectListFromStore]);

  return { projectList, loadingProjectList: projectListFromStore?.loading };
};

export default useProjectList;
