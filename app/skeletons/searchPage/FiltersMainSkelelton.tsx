import React from 'react';
import Skeleton from 'react-loading-skeleton';

const FiltersMainSkeleton = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, outerIndex) => (
        <div className="accordion-item" key={`outer-${outerIndex}`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls={`collapse-${outerIndex}`}
            >
              <h6 className="mb-0">
                <Skeleton width={30} height={20} />
              </h6>
            </button>
          </h2>

          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              {Array.from({ length: 5 }).map((__, innerIndex) => (
                <div className="d-flex filterCheckbox" key={`inner-${innerIndex}`}>
                  <Skeleton className="form-check-input mx-1" width={10} height={10} />
                  <div className="form-check-label">
                    <Skeleton width={50} height={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FiltersMainSkeleton;
