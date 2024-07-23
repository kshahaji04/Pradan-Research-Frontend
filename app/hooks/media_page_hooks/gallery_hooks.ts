import GetGalleryApi from '@/app/services/api/media_page_api/galleery_details_api'
import React, { useState, useEffect } from 'react'


const gallery_hooks = () => {
    const [gallery, setGallery] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setIsloading(true)
            const response = await GetGalleryApi()
            setGallery(response?.data)
            setIsloading(false)


            let error = '';
            if (response.code === "ECONNABORTED") {
                error = "Request timed out";
            } else if (response.code === "ERR_BAD_REQUEST") {
                error = "Bad Request";
            } else if (response.code === "ERR_INVALID_URL") {
                error = "Invalid URL";
            }
            if (error !== '') {
                setError(true);
            } else {
                setError(false);
            }
        } catch (error) {
            setIsloading(false);
            setError(true)
            throw error;
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return { gallery, isLoading, galleryError: error }
}

export default gallery_hooks