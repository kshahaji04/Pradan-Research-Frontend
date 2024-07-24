import { MediaDataInterface } from '@/app/interfaces/home_page_interface'
import { iconHandler } from '@/app/utils/icon_handler'
import { imageLoader } from '@/app/utils/image_loader_utils'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import noImage from '@/public/assets/images/no_image.jpg'

interface MediaCardInterface {
    item: MediaDataInterface;
}

function MediaCard({ item }: MediaCardInterface) {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className={`card h-100 rounded-0`} style={{ width: "90%", maxWidth: "380px", border: 0 }}>
                <Link href={'#'} className="w-full d-flex align-items-center justify-content-center position-relative">
                    <Image src={item?.image || noImage} loader={imageLoader} className="rounded-circle" height={150} width={150} alt={item?.title ?? ''} />
                </Link>
                <Link href={'#'} className="card-body position-relative text-decoration-none text-start py-4">
                    <p className={`card-title m-0`}>
                        <span dangerouslySetInnerHTML={{ __html: item?.short_description ?? '' }}></span>
                    </p>
                </Link>
                <div className={`card-footer`} style={{ background: 'transparent', border: 0 }}>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-6">
                            <div>
                                <p className='mb-0'>{item?.creation && moment(item.creation).format('MMM DD, YYYY')}</p>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            {item?.social_platform_name && <Link href={item?.url ?? ''}>{iconHandler(item.social_platform_name)}</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaCard