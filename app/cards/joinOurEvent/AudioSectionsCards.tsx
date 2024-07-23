import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/styles/joinOurEvent/audio.module.css'
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import moment from 'moment';
import AudioSectionsCardsSkeleton from '@/app/skeletons/MediaPage/MediaSectionCardsSkeleton/AudioSectionsCardsSkeleton';
import { imageLoader } from '@/app/utils/image_loader_utils';
import NoImage from '@/public/assets/images/no_image.jpg';
import { useDispatch } from 'react-redux';
import { CONSTANTS } from '@/app/services/config/app-config';
import { play, setCurrentTime } from '@/app/store/slices/media_slice/playerSlice';

const AudioSectionsCards = ({ audioData, loadingAudioVideoList }: any) => {
    const dispatch = useDispatch();
    return (
        <>{loadingAudioVideoList ? <AudioSectionsCardsSkeleton /> : <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0 ${styles.gridViewCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                <div className="card-img-top position-relative">
                    {audioData?.artwork !== null && audioData?.artwork !== '' ? <Image src={audioData?.artwork} className="card-img-top rounded-0"
                        height={200} width={100} alt='' loader={imageLoader} /> : <Image src={NoImage.src} className="card-img-top rounded-0"
                            height={200} width={200} alt='' object-fit="cover" />}
                    {/* <Image src={data.src} className="card-img-top rounded-0" height={200} width={100} alt={data.text} /> */}
                    <div className={styles.gridViewPlayBtn} style={{ cursor: 'auto' }}>
                        <PlayCircleFilledWhiteRoundedIcon />
                    </div>
                </div>
                <div className="card-body pt-4 mt-2 position-relative">
                    <p className={`card-title m-0 ${styles.gridViewTitle}`}>
                        {/* {data.text?.length > 50 ? `${data.text.slice(0, 50)}...` : data.text} */}
                        <span dangerouslySetInnerHTML={{ __html: audioData?.podcast_description?.length > 50 ? `${audioData?.podcast_description?.slice(0, 50)}...` : audioData?.podcast_description }}></span>
                    </p>
                </div>
                <div className={`card-footer pb-0 pe-0 pt-0 ${styles.gridViewFooter}`}>
                    <div className="d-flex align-items-end justify-content-between">
                        <div className="col-6 pb-3">
                            <div>
                                {/* <p>{data.author?.length > 0 && data.author[0]}</p> */}
                                {audioData?.Authors?.length > 0 && audioData?.Authors?.map((info: any, i: number) => <p key={i}>{info?.author_name}</p>)}
                                {/* {data.author?.map((info: any, i: number) => <p key={i}>{info}</p>)} */}
                            </div>
                            {audioData?.details_page_url !== null && audioData?.details_page_url !== "" ?
                                <Link target={`${audioData?.details_page_url?.includes('podcast') ? '_blank' : ''}`} href={`${audioData?.details_page_url?.includes('podcast') ? `${CONSTANTS.PODCAST_LINK}${audioData?.details_page_url}` : audioData?.details_page_url}`} onClick={() => { dispatch(play(audioData)); dispatch(setCurrentTime(0)) }} className="d-flex align-items-center g-2 pt-2">
                                    <p>{'View More'}</p>
                                </Link> : <div className="d-flex align-items-center g-2 pt-2">
                                    <p>{'View More'}</p>
                                </div>}
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center justify-content-end g-2">
                                {audioData?.Authors?.length > 0 && audioData?.Authors?.map((info: any, i: number) =>
                                    <Image key={i} width={60} height={60} src={info?.author_image} alt='avatars' className='w-25' loader={imageLoader} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}</>
    )
}

export default AudioSectionsCards