import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ReactPlayer from 'react-player';
import AudioDetailsTop from './AudioDetailsTopSkeleton';
import styles from "@/app/styles/joinOurEvent/audioDetails.module.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import NoImage from '@/public/assets/images/no-image.jpg'
import MoreCardGroup from './MoreCardGroupSkeleton';

import { useDispatch, useSelector } from 'react-redux';
import MoreCardGroupSkeleton from './MoreCardGroupSkeleton';
import AudioDetailsTopSkeleton from './AudioDetailsTopSkeleton';
import Skeleton from 'react-loading-skeleton';

function AudioDetailsSkeleton() {

    return (
        <div className={`${styles.details}`} style={{ margin: '92px 0' }}>
            <div>
                <AudioDetailsTopSkeleton />
            </div>
            <div className="container collection my-4">
                <div className="row">
                    <div className="col-lg-8">
                        <div className={`col-lg-11`}>
                            <p><Skeleton width={270} /></p>
                            <p className='col-lg-8'><Skeleton height={71} /></p>
                            <div className={`${styles.headerImg}`}>
                                <div className={styles.image_wrapper}>
                                    <Skeleton height={400} />
                                </div>
                            </div>
                            <div className={`${styles.buttons}`} >
                                <Skeleton width={180} height={38} />
                                <Skeleton width={180} height={38} />
                                <Skeleton width={180} height={38} />
                            </div>
                        </div>
                        <div className="col-lg-11">
                            <div className={`${styles.data} mt-4 pt-1`}>
                                <div>
                                    <Skeleton width={39} height={39} />
                                </div>
                                <div>
                                    <p><Skeleton width={60} /></p>
                                </div>
                                <div>
                                    <p><Skeleton width={90} /></p>
                                </div>
                                <div>
                                    <p><Skeleton width={180} /></p>
                                </div>
                                {/* <div className={`${styles.icons}`}>
                                    <div><Skeleton width={24} height={24} /></div>
                                    <div><Skeleton width={24} height={24} /></div>
                                </div> */}
                            </div>
                        </div>
                        <div className={`${styles.info} col-lg-11`}>
                            <h2><Skeleton width={140} /></h2>
                            <p><Skeleton count={2} /> <Skeleton width={'60%'} /></p>
                            <Skeleton width={'100%'} height={400} />
                            <h2 className='mt-4'><Skeleton width={140} /></h2>
                            <p><Skeleton count={2} /> <Skeleton width={'60%'} /></p>
                            <Skeleton width={'100%'} height={400} />
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className={`col-12 filter`}>
                            <div className={'filterTitle'}><p>More</p></div>
                            <div className="row gap-3 d-flex justify-content-center row-gap px-0 mx-0 mt-4"> {audioDetails?.more_episodes?.map((info: any, index: any) => (
                                <MoreCardGroupSkeleton loadingAudioDetails={loadingAudioDetails} detailsVisible={false} data={info} key={index} />))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AudioDetailsSkeleton