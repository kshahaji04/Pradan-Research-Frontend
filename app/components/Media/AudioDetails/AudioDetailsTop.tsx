import React from 'react'
import Image from 'next/image'
import styles from "@/app/styles/joinOurEvent/audioDetailsTop.module.css"
import { imageLoader } from '@/app/utils/image_loader_utils';

const AudioDetailsTop: React.FC<{ details: any }> = ({ details }) => {
    return (
        <div>
            <div className="container ">
                <div className={styles.main}>
                    <div className={styles.uperSection}>
                        <div className={`${styles.para1}`}>
                            {details.podcast_type}
                        </div>
                        <div >
                            <div className={styles.time}>
                                <div>
                                    {details.date_of_publishing}
                                </div>
                                <div className={styles.fullStop}>
                                    .
                                </div>
                                <div>
                                    {details.read_time_minute}  read
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.p}>
                        <p>
                            {
                                details.podcast_description
                            }
                        </p>

                    </div>
                </div>
                <div className={styles.main2}>
                    {details.podcast_title}
                </div>
            </div>

            <div className={styles.footer}>
                {Array.isArray(details?.authors) && details?.authors.length > 0 && (
                    details?.authors?.map((e: any, index: number) => (
                        <div key={index} className={styles.footText}>
                            <div className={styles.imgContainer}>
                                {e?.author_image !== null && e?.author_image !== '' && <Image
                                    src={e?.author_image}
                                    width={150}
                                    height={150}
                                    alt={e?.imageAltText ? e?.imageAltText : "Author Image"}
                                    className={styles.img}
                                    loader={imageLoader}
                                />}
                            </div>
                            {
                                <div>
                                    {e?.author_name}
                                </div>
                            }
                        </div>
                    ))
                )}
            </div>
        </div>

    )
}

export default AudioDetailsTop