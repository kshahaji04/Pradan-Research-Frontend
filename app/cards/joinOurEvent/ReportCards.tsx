import React, { useState } from 'react'
import ModalImage from 'react-modal-image'
import styles from '@/app/styles/joinOurEvent/report.module.css'
import Image from 'next/image'
import pdfIcon from '@/public/assets/images/pdfIcon.svg'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ReportCardsSkeleton from '@/app/skeletons/cards/joinOurEvent/ReportCardsSkeleton'
import noImage from '@/public/assets/images/no_image.jpg'
import { CONSTANTS } from '@/app/services/config/app-config'
import { imageLoader } from '@/app/utils/image_loader_utils'
import { ReportCard } from '@/app/interfaces/join_our_events/past_events_interface'



const ReportCards :  React.FC<ReportCard>=({ item,loading }) => {
   
    const handleClick = (url:any)=>{      
        if (url.startsWith('/file')) {
            window.open(`${CONSTANTS.API_BASE_URL}${url}`, '_blank');
          } else {
            window.open(url, '_blank');
          }
    }
    return (
        <div className='col-md-4 w-100' >
                    <div className={`card h-100 rounded-0 ${styles.infographic_card}`} style={{ width: "90%", maxWidth: "380px" }}>
                        {/* <ModalImage
                            small={item?.image ? `${CONSTANTS.API_BASE_URL}/${item?.image}` : noImage.src }
                            large={item?.image ? `${CONSTANTS.API_BASE_URL}/${item?.image}` : noImage.src}
                            alt={ item?.image ? `${CONSTANTS.API_BASE_URL}/${item?.image}` : noImage.src}
                            className="card-img-top rounded-0"
                        /> */}
                        
                        {
                            item?.image ? 
                            <Image src={item?.image}
                            className='card-img-top rounded-0' loader={imageLoader }
                            width={350} height={200} alt='card Image'
                          /> : 
                          <Image src={noImage.src}
                          className='card-img-top rounded-0'
                          width={350} height={200} alt='card Image'
                        />
                        }
                        <p className={`card-title mt-3 mb-2 ${styles.infographic_title}`}>
                            {item?.short_description?.length > 30 ? `${item?.short_description?.slice(0, 30)}...` : item?.short_description}
                        </p>
                        <div className={`row mt-2 mb-5`} >
                            <div className="col-4 d-flex flex-column justify-content-between">
                                <p className={`card-text m-0 ${styles.infographic_text}`}>
                                   {item?.title}
                                </p>
                                <p className='mb-0'>{item?.state}</p>
                                <p className="text-start mb-0">{item?.year}</p>
                            </div>
                            <div className="col-8 mt-0">
                                <div className="d-flex flex-column align-items-end justify-content-end">
                                    <div className="d-flex flex-column align-items-start justify-content-end" style={{ width: '100px' }}>
                                        {item?.reports_detail?.length > 0 && item?.reports_detail?.map((info: any, index: any) => (
                                            <button key={index} className={`btn my-0 text-uppercase pe-2`} style={{ fontSize: '12px' }} onClick={()=>handleClick(info?.pdf)}>
                                            <Image width={16} height={16} src={pdfIcon} alt={'pdf icon'} />
                                            <span><FileDownloadOutlinedIcon style={{ width: '16px', height: '16px' }} /></span> {`  ${info?.language_name}`}
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
        </div>
    )
}

export default ReportCards