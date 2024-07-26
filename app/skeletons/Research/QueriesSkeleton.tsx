import React from "react";
import Skeleton from "react-loading-skeleton";

function QueriesSkeleton() {
  return (
    <div className="row">
      <div className="col-12">
        <h3
          className="text-center mt-5 mb-5"
          style={{ color: "var(--primary)" }}
        >
          <Skeleton width={200} />
        </h3>
      </div>
      <div className="col-12">
        <div>
          <div className="mx-auto" style={{ width: "fit-content" }}>
            <div
              className="card shadow d-flex flex-row align-items-center py-4 ps-3"
              style={{ width: "40rem" }}
            >
              <div>
                <Skeleton width={200} height={200} circle={true} />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton width={"80%"} />
                </h5>
                <p className="card-text">
                  <Skeleton width={"70%"} />
                </p>
                <Skeleton width={110} height={38} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueriesSkeleton;
