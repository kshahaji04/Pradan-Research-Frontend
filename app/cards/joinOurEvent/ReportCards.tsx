import React, { useState } from 'react'
import ModalImage from 'react-modal-image'
import styles from '@/app/styles/joinOurEvent/report.module.css'
import Image from 'next/image'
import pdfIcon from '@/public/assets/images/pdfIcon.svg'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ReportCardsSkeleton from '@/app/skeletons/cards/joinOurEvent/ReportCardsSkeleton'

const ReportCards = ({ item }: any) => {
    const [loading, setLoading] = useState(false)
    const languages = ["English", "Hindi", "Marathi", "Bangali", "Telugu"]

    return (
        <div className='col-md-4 w-100'>
            {
                loading ? <ReportCardsSkeleton /> :
                    <div className={`card h-100 rounded-0 ${styles.infographic_card}`} style={{ width: "90%", maxWidth: "380px" }}>
                        <ModalImage
                            small={item?.src}
                            large={item?.src}
                            alt={item?.text}
                            className="card-img-top rounded-0"
                        />
                        <p className={`card-title mt-3 mb-2 ${styles.infographic_title}`}>
                            {item?.text?.length > 30 ? `${item?.text.slice(0, 30)}...` : item?.text}
                        </p>
                        <div className={`row mt-2 mb-5`} >
                            <div className="col-sm-4 d-flex flex-column justify-content-between">
                                <p className={`card-text m-0 ${styles.infographic_text}`}>
                                    Chapter {item?.id}
                                </p>
                                <p className='mb-0'>{item?.state}</p>
                                <p className="text-start mb-0">{item?.year}</p>
                            </div>
                            <div className="col-sm-8 mt-0">
                                <div className="d-flex flex-column align-items-end justify-content-end">
                                    <div className="d-flex flex-column align-items-start justify-content-end" style={{ width: '100px' }}>
                                        {languages?.length > 0 && languages?.map((info: any, index: any) => (<button key={index} className={`btn my-0 text-uppercase pe-2`} style={{ fontSize: '12px' }}>
                                            <Image width={16} height={16} src={pdfIcon} alt={'pdf icon'} />
                                            <span><FileDownloadOutlinedIcon style={{ width: '16px', height: '16px' }} /></span> {`  ${info}`}
                                        </button>))}
                                    </div>
                                    {/* <button className={`btn text-uppercase ps-2`}>
                                   <Image width={30} height={30} src={excel} alt={'excel icon'} />
                                   <span><FileDownloadOutlinedIcon /></span>
                               </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default ReportCards