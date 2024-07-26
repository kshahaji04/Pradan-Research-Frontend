import GetResearchListApi from '@/app/services/api/research_api/research_list_api'
import { useStepContext } from '@mui/material'
import React, { useEffect, useState } from 'react'

const useResearchList = (tab: any, page_no: any) => {
    const [data, setData] = useState<any>([])
    const [count, setCount] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const limit = 3
    const getResearchListData = async () => {
        try {
            setLoading(true)
            const response = await GetResearchListApi(tab, page_no)
            setCount(response?.data?.message?.total_count)
            setData(response?.data?.message?.data)
            setLoading(false)
            let error = '';
            if (response.name === "ECONNABORTED") {
                error = "Request timed out";
            } else if (response.code === "ERR_BAD_REQUEST") {
                error = "Bad Request";
            } else if (response.code === "ERR_INVALID_URL") {
                error = "Invalid URL";
            } else if (response.name === "AxiosError") {
                error = "error";
            }
            if (error !== '') {
                setError(true);
            } else {
                setError(false);
            }
        } catch (error) {
            setLoading(false);
            setError(true)
            throw error;
        }
    }

    useEffect(() => {
        getResearchListData()
    }, [page_no])

    return {
        data, loading, error, totalPages: count
    }
}

export default useResearchList;