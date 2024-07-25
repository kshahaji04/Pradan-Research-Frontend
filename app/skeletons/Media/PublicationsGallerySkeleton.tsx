"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Skeleton from "react-loading-skeleton";
export function PublicationsGallerySkeleton({ title }: any) {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center h-100'>
        <Skeleton width={300} height={350} />
      </div>
    </>
  );
}

export function PublicationGallerySlick() {
  return (
    <div>
      {
        Array.from({ length: 6 }).map((info: any, index: number) => (
          <div
            key={index}
            // style={{ width: "95%", height: "100%", maxHeight: "300px" }}
            className={`mx-auto my-0`}
          >
            <Skeleton
              width={200}
              height={200}
            />
          </div>
        ))}
    </div>

  )
}

