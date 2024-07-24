import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/research/researchCard.module.css"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import pdfIcon from '@/public/assets/images/pdfIcon.svg'
import { imageLoader } from '@/app/utils/image_loader_utils';
import noImage from '@/public/assets/images/no_image.jpg'
import { utimes } from 'fs';
import { ResearchCard } from '@/app/interfaces/research_interface';



function ResearchPageCards({ item, index, link }: ResearchCard) {
    // const languages = ["English", "Hindi", "Marathi", "Bangali", "Telugu"]
    return (
        <div className="col-md-6 col-lg-4 g-4 p-4" key={index}>
            <Link href={link} style={{ textDecoration: 'none' }}>
                <div className={`card ${styles.car}`}>
                    <div>
                        <Image width={470} height={300}
                         className={`${styles.img}`}
                         src={item?.image || noImage.src}
                         alt='Image' 
                         loader={imageLoader}
                         /> 
                    </div>
                    <div className='row card-body h-100'>
                        <div className="col-12">
                            <div className='h-100 d-flex flex-column justify-content-center'>
                                <h5>{item?.title}</h5>
                                <p className='mb-0'>{item?.sub_title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ResearchPageCards