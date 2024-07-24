import useQueries from "@/app/hooks/research_hooks/research-queries-hooks";
import { imageLoader } from "@/app/utils/image_loader_utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NoDataFound from "@/app/components/NoDataFound";
import ErrorComponent from "@/app/components/ErrorComponent";
import noImage from "@/public/assets/images/no_image.jpg";
import { QueriesInterface } from "@/app/interfaces/research_interface";

const Queries = () => {
  const { queriesData, loadingQueries, queriesError } = useQueries();

  // console.log(queriesData);

  return (
    <div className="container pb-5">
      {queriesError ? (
        <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
          <ErrorComponent />
        </div>
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
                    <div
                      className="card shadow d-flex flex-row align-items-center py-4"
                      style={{ width: "40rem" }}
                    >
                      <div>
                        <Image
                          src={item?.image || noImage}
                          height={200}
                          width={200}
                          alt={item?.heading || ''}
                          loader={imageLoader}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item?.title}</h5>
                        <p className="card-text">{item?.sub_title}</p>
                        <Link
                          href={item?.url || ''}
                          className="btn btn-outline-success"
                        >
                          For Queries
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              !loadingQueries && (
                <div className="mb-5 pt-3">
                  <NoDataFound />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
