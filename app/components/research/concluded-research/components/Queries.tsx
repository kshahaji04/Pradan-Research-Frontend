"use client";
import useQueries from "@/app/hooks/research_hooks/research-queries-hooks";
import NoDataFound from "@/app/components/NoDataFound";
import ErrorComponent from "@/app/components/ErrorComponent";
import { QueriesInterface } from "@/app/interfaces/research_interface";
import QueriesSkeleton from "@/app/skeletons/Research/QueriesSkeleton";
import QueriesCard from "@/app/cards/research/research_details/QueriesCard";

const Queries = () => {
  const { queriesData, loadingQueries, queriesError } = useQueries();

  // console.log(queriesData);

  return (
    <div className="container pb-5">
      {queriesError ? (
        <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
          <ErrorComponent />
        </div>
      ) : loadingQueries ? (
        <QueriesSkeleton />
      ) : (
        <div className="row">
          <div className="col-12">
            <h3
              className="text-center mt-5 mb-5"
              style={{ color: "var(--primary)" }}
            >
              Queries
            </h3>
          </div>
          <div className="col-12">
            {queriesData?.length > 0 ? (
              <>
                {queriesData?.map((item: QueriesInterface, index: any) => (
                  <div className="d-flex justify-content-center" key={index}>
                    <QueriesCard item={item} />
                  </div>
                ))}
              </>
            ) : (
              <div className="mb-5 pt-3">
                <NoDataFound />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
