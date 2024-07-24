import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/research/researchCard.module.css"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import pdfIcon from '@/public/assets/images/pdfIcon.svg'
import { imageLoader } from '@/app/utils/image_loader_utils';
import noImage from '@/public/assets/images/no_image.jpg'
import { utimes } from 'fs';

interface ResearchCardItem {
    image?: any;
    name?: string; 
    slug?: string; 
    sub_title?: string; 
    title: string; 
    url?: any; 
    languages?: string[]; 
  }

  interface ResearchCard{
    item : ResearchCardItem;
    index : number;
    link:any
  }

function ResearchPageCards({ item, index, link }: ResearchCard) {

    console.log(item,index,link)
    const languages = ["English", "Hindi", "Marathi", "Bangali", "Telugu"]
    console.log(item)
    return (
        <div className="col-md-6 col-lg-4 g-4 p-4" key={index}>
            <Link href={link} style={{ textDecoration: 'none' }}>
                <div className={`card ${styles.car}`}>
                    <div>
                        <Image width={470} height={300}
                         className={`${styles.img || noImage}`}
                         src={item?.image}
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