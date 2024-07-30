import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/styles/joinOurEvent/video.module.css'
// import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import moment from 'moment';
import { imageLoader } from '@/app/utils/image_loader_utils';
import NoImage from '@/public/assets/images/no_image.jpg';
import { showToast } from '@/app/components/ToastNotification';
import YoutubeModal from '@/app/components/Media/YoutubeModal';

const VideoSectionsCards = ({ audioVideoData, loadingAudioVideoList }: any) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <div className={`card h-100 rounded-0 ${styles.videoCard}`} style={{ width: "90%", maxWidth: "380px" }}>
                    <div className="card-img-top position-relative">
                        {audioVideoData?.artwork !== null && audioVideoData?.artwork !== '' ? <Image src={audioVideoData?.artwork} className="card-img-top rounded-0"
                            height={200} width={100} alt='' loader={imageLoader} /> : <Image src={NoImage.src} className="card-img-top rounded-0"
                                height={200} width={200} alt='' object-fit="cover" />}
                        {/* <Image src={data.src} className="card-img-top rounded-0" height={200} width={100} alt={data.text} /> */}
                        <div className={styles.videoPlayBtn} onClick={() => (audioVideoData?.video !== null && audioVideoData?.video !== '') ? handleShowModal() : showToast('No Video Found', 'warning')}>
                            <PlayCircleOutlineOutlinedIcon />
                        </div>
                    </div>
                    <div className="card-body pt-2 ps-0 mt-2 position-relative" style={{ height: '100px' }}>
                        {audioVideoData?.Authors?.length > 0 && audioVideoData?.Authors?.map((info: any, i: number) => <p className={`card-text m-0 mb-2 ${styles.videoText}`} key={i}>{info?.author_name}</p>)}
                        {/* <p className={`card-text m-0 mb-2 ${styles.videoText}`}>
                        {data.author?.length > 0 && data.author[0]}
                    </p> */}
                        <p className={`card-title m-0 ${styles.videoTitle}`}>
                            <span dangerouslySetInnerHTML={{ __html: audioVideoData?.podcast_description?.length > 40 ? `${audioVideoData?.podcast_description.slice(0, 40)}...` : audioVideoData?.podcast_description }}></span>
                            {/* {data.text?.length > 40 ? `${data.text.slice(0, 40)}...` : data.text} */}
                        </p>
                    </div>
                    <div className={`card-footer p-0 ${styles.videoFooter}`}>
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="col-12 pb-3">
                                <div>
                                    <p>{audioVideoData?.date_of_publishing && moment(audioVideoData?.date_of_publishing).format('MMM.YYYY')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <YoutubeModal show={showModal} toHide={() => setShowModal(false)} data={audioVideoData} />
        </>
    )
}

export default VideoSectionsCards