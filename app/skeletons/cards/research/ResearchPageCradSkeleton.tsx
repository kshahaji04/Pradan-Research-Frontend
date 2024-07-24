import React from 'react'
import styles from "@/app/styles/research/researchCard.module.css"
import Skeleton from 'react-loading-skeleton'
const ResearchPageCradSkeleton = () => {
  return (
    <>
    {
        Array.from({length:3}).map((item,index)=>{
            return(
                <div className="col-md-6 col-lg-4 g-4 p-4" key={index}>
                <div style={{ textDecoration: "none" }}>
                  <div className={`card  ${styles.car}`}>
                    <div>
                      <Skeleton
                        width={"100%"}
                        height={300}
                        className={`${styles.img}`}
                      />
                      {/* <Image width={470} height={300} className={`${styles.img}`} src={item.image} alt='Image' /> */}
                    </div>
                    <div className="p-4">
                      <div>
                        <p>
                          <Skeleton width={"50%"} height={50} />
                          {/* {item.text1} */}
                        </p>
                      </div>
                      <div>
                        <h4>
                          <Skeleton width={"100%"} height={50} />
                          {/* {item.title2} */}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
    }
)
    }
     
    </>
   
  )
}

export default ResearchPageCradSkeleton