'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ReactPlayer from 'react-player';
import AudioDetailsTop from './AudioDetailsTop';
import styles from "@/app/styles/joinOurEvent/audioDetails.module.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import NoImage from '@/public/assets/images/no_image.jpg'
import MoreCardGroup from './MoreCardGroup';
import useAudioDetails from '@/app/hooks/media_page_hooks/audio_details_hook';
import { CONSTANTS } from '@/app/services/config/app-config';
import { pause, play, setCurrentTime } from '@/app/store/slices/media_slice/playerSlice';
import { useDispatch, useSelector } from 'react-redux';
import AudioDetailsSkeleton from '@/app/skeletons/MediaPage/AudioDetailsSkeleton/AudioDetailsSkeleton';
import NoDataFound from '@/app/components/NoDataFound';
import ErrorComponent from '@/app/components/ErrorComponent';

function AudioDetails() {
    const { playing } = useSelector((state: any) => state.audioPlayer.player);

    const { audioDetails, loadingAudioDetails, audioDetailError } = useAudioDetails();

    // console.log(audioDetails, "podcast")

    const dispatch = useDispatch();

    const imageLoader = ({ src, width, quality }: any) => {
        return `${CONSTANTS.API_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
    };

    return (
        <>
            {
                audioDetailError ? <ErrorComponent /> : (
                    <div>
                        {loadingAudioDetails ? <AudioDetailsSkeleton /> : <div className={`${styles.details}`} style={{ margin: '92px 0' }}>
                            {audioDetails && Object.keys(audioDetails)?.length > 0 ? (<>
                                <div>
                                    <AudioDetailsTop details={audioDetails} />
                                </div>
                                <div className="container collection my-4">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className={`${styles.header} col-lg-11`}>
                                                <p>Episode {audioDetails?.episode_number}</p>
                                                <p className='col-lg-8'>{audioDetails?.name}</p>
                                                <div className={`${styles.headerImg}`}
                                                >
                                                    <div className={styles.image_wrapper}>
                                                        {audioDetails?.artwork !== null && audioDetails?.artwork !== '' ? <Image src={audioDetails?.artwork}
                                                            height={100} width={100} alt='artwork'
                                                            loader={imageLoader} priority={true}
                                                        /> : <Image src={NoImage.src}
                                                            height={100} width={100} alt='no image' priority={true} />}
                                                        <div className={`${styles.playBtn}`} onClick={() => playing ? dispatch(pause()) : dispatch(play(audioDetails))}>
                                                            {/* <PlayArrowIcon fontSize={'large'} /> */}
                                                            {playing === false ? <PlayArrowIcon fontSize={'large'} /> : <PauseOutlinedIcon fontSize={'large'} />}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.buttons}`} >
                                                    {Array.isArray(audioDetails?.social_media_links) && audioDetails?.social_media_links?.length > 0 &&
                                                        audioDetails?.social_media_links?.map((e: any, index: number) => (
                                                            <button key={index} onClick={() => window.location.href = `${e?.url}`}>
                                                                <span>{e?.icon ? e?.icon : <AppleIcon />}</span>
                                                                <label>{e?.name1}</label>
                                                            </button>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-lg-11">
                                                <div className={`${styles.data} mt-4 pt-1`}>
                                                    <div>
                                                        <Image src={'/assets/architecture.svg'} width={39} height={39} alt='icon' />
                                                    </div>
                                                    <div>
                                                        <p>{audioDetails?.pradan_category}</p>
                                                    </div>
                                                    <div>
                                                        <p>{audioDetails?.date_of_publishing}</p>
                                                    </div>
                                                    <div>
                                                        <p>{audioDetails?.authors?.length > 0 && audioDetails?.authors?.map((e: any) => (`${e?.author_name} `)).join(',')}</p>

                                                    </div>
                                                    <div className={`${styles.icons}`}>
                                                        <Link href={`#`}>
                                                            <i className={`${styles.iconContainer}`}>
                                                                <ArrowDownwardIcon />
                                                                <span className={`${styles.iconText}`}>Download</span>
                                                            </i>
                                                        </Link>
                                                        <i className={`${styles.iconContainer}`} onClick={() => { dispatch(play(audioDetails)) }}>
                                                            <Link href={`${audioDetails?.details_page_url ? `${audioDetails?.details_page_url}/transcript` : null}`}>
                                                                <TextSnippetIcon />
                                                            </Link>
                                                            <span className={`${styles.iconText}`}>Transcript</span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.info} col-lg-11`}>
                                                {Array.isArray(audioDetails?.details) && audioDetails?.details?.length > 0 && audioDetails?.details?.map((info: any, index: number) => (
                                                    <div key={index}>
                                                        {info?.title && <h2 className={styles.infoTitle}>{info?.title}</h2>}
                                                        {info?.description && <p dangerouslySetInnerHTML={{ __html: info?.description ? info?.description : '' }}></p>}
                                                        {info?.image !== null && info?.image !== '' && <Image src={info?.image} alt='Image' width={1200} height={1200}
                                                            loader={imageLoader}
                                                        />}
                                                        {info?.video && <ReactPlayer wrapper={({ children }) => { return (<div className='detailPageReactPlayer pt-2' style={{ height: '450px' }}>{children}</div>) }} url={info?.video} />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            {/* <div className={`col-12 filter`}>
                            <div className={'filterTitle'}><p>Explore</p></div>
                            <div className="row mt-1 pt-1">
                                {Array.isArray(categoryData) && categoryData.length > 0 && categoryData?.map((info: any, index: number) => (
                                    <div className='col-5 filterCheckbox' key={index}>
                                        <Link href={'#'}
                                        // href={`/podcast-list/${info?.name}?page_no=1`} 
                                        style={{ textDecoration: "none" }}>
                                            <div className='m-2 me-0 d-flex align-items-center '>
                                                <span className="icon ms-1"><Image src={'/assets/architecture.svg'} width={39} height={39} alt='icon' /></span>
                                                <label className="form-check-label ps-2" htmlFor={info?.name} >{info?.name}</label>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                                            {Array.isArray(audioDetails?.more_episodes) && audioDetails?.more_episodes?.length > 0 &&
                                                <div className={`col-12 filter`}>
                                                    <div className={'filterTitle'}><p>More</p></div>
                                                    <div className="row gap-3 d-flex justify-content-center row-gap px-0 mx-0 mt-4"> {audioDetails?.more_episodes?.map((info: any, index: any) => (
                                                        <MoreCardGroup loadingAudioDetails={loadingAudioDetails} detailsVisible={false} data={info} key={index} />))}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                            ) : <NoDataFound />}

                        </div>
                        }
                    </div>)
            }
        </>
    )
}

export default AudioDetails