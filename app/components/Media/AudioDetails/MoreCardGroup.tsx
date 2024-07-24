import Image from 'next/image'
import React from 'react'
import styles from '@/app/styles/joinOurEvent/moreCardsGroup.module.css';
import Link from 'next/link'
import NoImage from '@/public/assets/images/no_image.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { imageLoader } from '@/app/utils/image_loader_utils';
import { play, setCurrentTime } from '@/app/store/slices/media_slice/playerSlice';
import { useDispatch } from 'react-redux';
import { CONSTANTS } from '@/app/services/config/app-config';

const MoreCardGroup = ({ data, detailsVisible = true, loadingAudioDetails }: any) => {
    const dispatch = useDispatch()
    // console.log(data, 'audi');

    return (
        <>
            <div className={`row col-12 d-flex align-items-center bg-white py-3 px-1 ${styles.listViewCard}`}>
                <div className="col-9 d-flex align-items-start">
                    <div className="position-relative">
                        <Link
                            target={`${data?.details_page_url?.includes('podcast') ? '_blank' : ''}`}
                            href={`${data?.details_page_url?.includes('podcast') ? `${CONSTANTS.PODCAST_LINK}${data?.details_page_url}` : data?.details_page_url}`}
                        >
                            {/* <Image src={"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                className="card-img-top rounded-0" height={170} width={'170'} style={{ maxWidth: "70px", maxHeight: '70px' }} alt='' /> */}
                            {data?.artwork === null && data?.artwork !== '' ? <Image src={data?.artwork} className="card-img-top rounded-0" height={70} width={'70'} style={{ maxWidth: "70px" }} alt='' loader={imageLoader} /> : <Image src={NoImage.src} className="card-img-top rounded-0" height={70} width={70} style={{ maxWidth: "70px" }} alt='' object-fit="cover" />}
                        </Link>
                        <div className={styles.listViewPlayBtn}
                        // onClick={() => { handleClick(); data && dispatch(play(data)) }}
                        >
                            <PlayArrowIcon />
                            {/* {player.playing === false ? <TiMediaPlay /> : <>{slug === player?.data?.slug ? <TiMediaPause /> : <TiMediaPlay />}</>} */}
                        </div>
                    </div>
                    <div className={styles.listViewData}>
                        {detailsVisible ? <p><span>Episode {data?.episode_number}</span>
                            &middot; {data?.pradan_category} &middot; {data?.date_of_publishing}</p> :
                            <p><span>Episode {data?.episode_number}</span></p>}
                        <Link onClick={() => { dispatch(play(data)); dispatch(setCurrentTime(0)) }} href={`${data?.details_page_url || '#'}`}>
                            <p>{data?.podcast_title?.length > 18 ? `${data?.podcast_title?.slice(0, 18)}...` : data?.podcast_title}</p>
                        </Link>
                    </div>
                </div>
                <div className={`col-3 ${styles.icons} ${styles.listViewIcons}`}>
                    <Link href={`#`}>
                        <i className={`${styles.iconContainer}`} style={{ borderLeft: '0' }}>
                            <ArrowDownwardIcon />
                            <span className={`${styles.iconText}`}>Download</span>
                        </i>
                    </Link>
                    <Link 
                        target={`${data?.details_page_url?.includes('podcast') ? '_blank' : ''}`}
                        href={`${data?.details_page_url?.includes('podcast') ? `${CONSTANTS.PODCAST_LINK}${data?.details_page_url}/transcript` : `${data?.details_page_url}/transcript`}`}
                    >
                        <i className={`${styles.iconContainer}`}>
                            <TextSnippetIcon />
                            <span className={`${styles.iconText}`}>Transcript</span>
                        </i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MoreCardGroup