import { fetchWhatsAppDetail, get_whats_app_detail_from_store } from "@/app/store/slices/home_page_slice/whats_app_slice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useWhatsAppDetail = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const whatsAppDetailFromStore = useSelector(get_whats_app_detail_from_store);
    const [whatsAppDetailData, setWhatsAppDetailData] = useState<any>([]);


    useEffect(() => {
        dispatch(fetchWhatsAppDetail() as any);
    }, []);

    useEffect(() => {
        if (whatsAppDetailFromStore?.data) {
            setWhatsAppDetailData(whatsAppDetailFromStore?.data);
        }
    }, [whatsAppDetailFromStore]);

    return { whatsAppDetailData, loadingwhatsAppDetail: whatsAppDetailFromStore?.loading, error: whatsAppDetailFromStore?.error };
};

export default useWhatsAppDetail;
