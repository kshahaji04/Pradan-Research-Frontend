import GetcontactUs from '@/app/services/api/contactUs/ContactUs'
import { useEffect, useState } from 'react'

const GetContactUs = () => {
  const [contactUs, setContactUs] = useState<any>({})
  const [loading, setLoading] = useState<any>(false)
  const [error, setError] = useState<any>(false)

  const fetchContactUs = async () => {
    try {
      setLoading(true)
      const response = await GetcontactUs()
      console.log(response)
      setContactUs(response?.data)
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
    return;
  }
  useEffect(() => {
    fetchContactUs()
  }, [])

  return {
    contactUs, loading, error
  }
}

export default GetContactUs