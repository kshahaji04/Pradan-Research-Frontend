import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/research/researchCard.module.css"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import pdfIcon from '@/public/assets/images/pdfIcon.svg'
function ResearchCards({ item, index, link }: any) {
    const languages = ["English", "Hindi", "Marathi", "Bangali", "Telugu"]

    return (
        <div className="col-md-6 col-lg-4 g-4 p-4" key={index}>
            <Link href={link} style={{ textDecoration: 'none' }}>
                <div className={`card ${styles.car}`}>
                    <div>
                        <Image width={470} height={300} className={`${styles.img}`} src={item.image} alt='Image' />
                    </div>

                    <div className='row card-body h-100'>
                        <div className="col-9">
                            <div className='h-100 d-flex flex-column justify-content-center'>
                                <h5>{item.text1}</h5>
                                <p className='mb-0'>{item.title2}</p>
                            </div>
                        </div>
                        <div className="col-3 text-end">
                            <div className="d-flex flex-column align-items-end justify-content-end">
                                <div className="d-flex flex-column align-items-start justify-content-end" style={{ width: '100px' }}>
                                    {languages?.length > 0 && languages?.map((info: any, index: any) => (<button key={index} className={`btn my-0 text-uppercase d-flex pe-2`} style={{ fontSize: '12px' }}>
                                        <Image width={16} height={16} src={pdfIcon} alt={'pdf icon'} />
                                        <span><FileDownloadOutlinedIcon style={{ width: '16px', height: '16px' }} /></span> {`  ${info}`}
                                    </button>))}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResearchCards