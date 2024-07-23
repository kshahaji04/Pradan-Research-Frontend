import { fetchAudioVideoList, get_audio_video_list_from_store } from "@/app/store/slices/media_slice/audio_video_list_slice"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAudioVideoList = () => {
  const dispatch = useDispatch();
  const AudioVideoListFromStore = useSelector(get_audio_video_list_from_store);
  const [audioList, setAudioList] = useState<any>([]);
  const [videoList, setVideoList] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchAudioVideoList() as any);
  }, []);

  useEffect(() => {
    // console.log(AudioVideoListFromStore);
    if (AudioVideoListFromStore?.data && AudioVideoListFromStore?.data?.data?.length > 0) {
      const audioList = AudioVideoListFromStore?.data?.data?.filter((info:any)=> info.audio !== null && info.audio !== "")
      setAudioList(audioList);
      const videoList = AudioVideoListFromStore?.data?.data?.filter((info:any)=> info.video !== null && info.video !== "")
      setVideoList(videoList);

      // console.log(audioList, videoList, AudioVideoListFromStore?.data?.data, "data")
    }
  }, [AudioVideoListFromStore]);


  return { audioList, videoList, loadingAudioVideoList: AudioVideoListFromStore?.loading };
};

export default useAudioVideoList;
