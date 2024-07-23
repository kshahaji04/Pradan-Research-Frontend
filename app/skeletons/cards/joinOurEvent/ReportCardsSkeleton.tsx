import React from 'react'
import ModalImage from 'react-modal-image'
import styles from '@/app/styles/joinOurEvent/report.module.css'
import Image from 'next/image'
import pdfIcon from '@/public/assets/images/pdfIcon.svg'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Skeleton from 'react-loading-skeleton'

const ReportCardsSkeleton = ({ item }: any) => {
    const languages = ["English", "Hindi", "Marathi", "Bangali", "Telugu"]
    
    return (
            <div className={`card h-100 rounded-0 ${styles.infographic_card}`} style={{ width: "90%", maxWidth: "380px" }}>
                <Skeleton
                width={'100%'} height={200}
                    className="card-img-top rounded-0"
                />
                <p className={`card-title mt-3 mb-2 ${styles.infographic_title}`}>
                  <Skeleton width={'100%'} height={20} />
                  <Skeleton width={'50%'} height={20} />
                </p>
                <div className={`row mt-2 mb-5`} >
                    <div className="col-sm-4 d-flex flex-column justify-content-between">
                        <p className={`card-text m-0 ${styles.infographic_text}`}>
                          <Skeleton width={'100%'} height={20} />
                        </p>
                          <Skeleton width={'100%'} height={20}/>
                          <Skeleton width={'50%'} height={20}/>
                          
                        <p className="text-start mb-0">{item?.year}</p>
                    </div>
                    <div className="col-sm-8 mt-0">
                        <div className="d-flex flex-column align-items-end justify-content-end">
                            <div className="d-flex flex-column align-items-start justify-content-end" style={{width:'100px'}}>
                                {languages?.map((info: any, index: any) => (<button key={index} className={`btn my-0 text-uppercase pe-2`} style={{ fontSize: '12px' }}>
                                    <Skeleton width={16} height={16} />
                                    <span><Skeleton width={16} height= {16} /></span> <Skeleton width={50} height={10}/>
                                </button>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default ReportCardsSkeleton