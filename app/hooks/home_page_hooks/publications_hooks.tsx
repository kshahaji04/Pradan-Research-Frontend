import GetPublicationsApi from '@/app/services/api/home_page_api/get_publications_api';
import React, { useEffect, useState } from 'react'

const usePublications = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [publications, setPublications] = useState<any>([]);
    const [error, setError] = useState<any>(null);

    const fetchData = async () => {

        setLoading(true);

        try {
            const data = await GetPublicationsApi();
            console.log('quotes', data)
            if( data?.length > 0 )  {
                setPublications(data);
                setLoading(false);
            }else {
                setPublications([])
                setLoading(true)
            }
        } catch (err) {
            setError(err);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    return { publications, loading }
}

export default usePublications;
