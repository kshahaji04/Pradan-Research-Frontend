import React from "react";
import styles from "@/app/styles/research/researchCard.module.css";
import Skeleton from "react-loading-skeleton";

function ResearchCardsSkeleton() {
  return (
    <div className="col-12 g-4 p-4">
      <div className={`card ${styles.car}`}>
        <div className={`${styles.img}`} style={{marginTop:'-7px'}}>
          <Skeleton width={"100%"} height={300} />
        </div>

        <div className="row card-body h-100">
          <div className="col-9">
            <div className="h-100 d-flex flex-column justify-content-center">
              <h5>
                <Skeleton width={"60%"} />
              </h5>
              <p className="mb-0">
                <Skeleton width={"90%"} />
              </p>
            </div>
          </div>
          <div className="col-3 px-0 text-end">
            <div className="">
              <div
                className=""
                // style={{ width: "100px" }}
              >
                <div
                  className={` my-0 text-uppercase pe-2`}
                  // style={{ fontSize: "12px" }}
                >
                  <Skeleton width={80} height={16} />
                  <Skeleton width={80} height={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchCardsSkeleton;
