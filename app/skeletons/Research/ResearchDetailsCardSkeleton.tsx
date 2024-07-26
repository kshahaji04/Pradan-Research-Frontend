import React from "react";
import Skeleton from "react-loading-skeleton";

function ResearchDetailsCardSkeleton() {
  return (
    <div className="d-flex align-items-center mt-4 pb-4">
      <div>
        <Skeleton width={100} height={100} circle={true} />
      </div>
      <div className="ms-4 w-100">
        <h5 style={{ color: "var(--primary)" }}>
          <Skeleton width={"70%"} />
        </h5>
        <p style={{ color: "var(--primary)", margin: "0" }}>
          <Skeleton width={"90%"} />
        </p>
        <p style={{ color: "var(--primary)", margin: "0" }}>
          <Skeleton width={"50%"} />
        </p>
      </div>
    </div>
  );
}

export default ResearchDetailsCardSkeleton;
