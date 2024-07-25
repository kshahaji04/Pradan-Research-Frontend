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
    <div className='d-flex align-items-center justify-content-center h-100'>
      <Skeleton width={100} height={150} />
    </div>

  )
}

