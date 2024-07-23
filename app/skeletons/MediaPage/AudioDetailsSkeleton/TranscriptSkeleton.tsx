'use client'
import React from 'react'
import styles2 from '@/app/styles/joinOurEvent/tranScript.module.css'
import Link from 'next/link';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import MoreCardGroup from './MoreCardGroupSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const TranScriptSkeleton = () => {
    return (
        <><div className='container collection' style={{ background: '#fff' }}>
            <div className="row mb-4">
                <div className={`col-lg-8 p-5`} >
                    <div className={styles2.cardInner}>
                        <div className={`${styles2.postContent}`}>
                            <div className={styles2.postHeader}  style={{backgroundColor:'transparent'}}>
                                <div className={styles2.heading}>
                                    <h4>
                                        <Skeleton width={120} />
                                    </h4>
                                    <span className='ss'></span>
                                    <h2 className={styles2.postTitle} style={{backgroundColor:'transparent', paddingLeft:'0'}}>
                                        <Skeleton width={'80%'} />
                                    </h2>
                                </div>
                            </div>
                            <div className={styles2.postActions}>
                                <ul className={styles2.ActionRow}>
                                    <li className={styles2.listItem1}>
                                        <Skeleton width={30} height={30} />
                                    </li>
                                    <li className={styles2.listItem3}></li>
                                    <li className={styles2.listItem1}>
                                        <Skeleton width={30} height={30} />
                                    </li>
                                </ul>
                                <ul className={styles2.ActioRow2}>
                                    <li className={styles2.list2Item}>
                                        <p className={styles2.p}>
                                            <Skeleton width={70} />
                                        </p>
                                        <div className={styles2.strongText}>
                                            <Skeleton width={60} />
                                        </div>
                                    </li>
                                    <li className={styles2.listItem3}></li>
                                    <li className={styles2.list2Item}>
                                        <p className={styles2.p}>
                                            <Skeleton width={40} />
                                        </p>
                                        <div className={styles2.strongTex}>
                                            <Skeleton width={'90%'} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles2.expertSection}>
                            <h2 className='mt-3'><Skeleton width={190} /></h2>
                            <p><Skeleton count={4} /><Skeleton width={'70%'} /></p>
                            <h2 className='mt-3'><Skeleton width={190} /></h2>
                            <p><Skeleton count={4} /><Skeleton width={'70%'} /></p>
                            <h2 className='mt-3'><Skeleton width={190} /></h2>
                            <p><Skeleton count={5} /><Skeleton width={'70%'} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TranScriptSkeleton