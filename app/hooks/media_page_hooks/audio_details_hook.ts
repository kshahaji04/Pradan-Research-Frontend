import { fetchAudioDetails, get_audio_details_from_store } from "@/app/store/slices/media_slice/audio_details_slice";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAudioDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {query}= router;
  const audioDetailsFromStore = useSelector(get_audio_details_from_store);
  const [audioDetails, setAudioDetails] = useState<any>([]);
  // const [slug, setSlug] = useState('');
  // const {slug} = useParams();

  useEffect(() => {
    if(router.isReady){
      // console.log('query', query)
      dispatch(fetchAudioDetails(query.slug) as any);
    }
  }, [router]);


  useEffect(() => {
    if (audioDetailsFromStore?.data) {
      setAudioDetails(audioDetailsFromStore?.data);
    }
  }, [audioDetailsFromStore]);

  return { audioDetails, loadingAudioDetails: audioDetailsFromStore?.loading };
};

export default useAudioDetails;
