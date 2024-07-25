import styles from "@/app/styles/research/researchCard.module.css";
import Skeleton from "react-loading-skeleton";

function AboutConcludedResearchCardSkeleton() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <h3 style={{ color: "var(--primary)", marginBottom: "20px" }}>
          <Skeleton width={280} />
        </h3>
        <p style={{ width: "95%" }}>
          <Skeleton count={4} /> <Skeleton width={"60%"} />
        </p>
        <p style={{ width: "95%" }}>
          <Skeleton count={4} /> <Skeleton width={"60%"} />
        </p>
        <p style={{ width: "95%" }}>
          <Skeleton count={4} /> <Skeleton width={"60%"} />
        </p>
      </div>
      <div className="col-md-6 g-4 p-4">
        <div style={{ textDecoration: "none" }}>
          <div className={`card  ${styles.car}`}>
            <div style={{marginTop:'-7px'}}>
              <Skeleton width={"100%"} height={350} />
            </div>
            <div className="row py-3 mx-1">
              <div className="col-8">
                <div>
                  <h5>
                    <Skeleton width={"80%"} />
                  </h5>
                  <p className="mb-0">
                    <Skeleton width={"60%"} />
                  </p>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="">
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
    </div>
  );
}

export default AboutConcludedResearchCardSkeleton;
