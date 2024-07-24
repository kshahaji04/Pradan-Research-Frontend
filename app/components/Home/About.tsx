"use client";
import React from "react";
import styles from "@/app/styles/Home/about.module.css";
// import SalImg from '@/public/assets/images/SAL.png'
import SalImg from "@/public/assets/images/salImage.avif";
import Image from "next/image";
import Link from "next/link";
import whiteBanner from "@/public/assets/images/bg/whiteBanner.jpg";
import useAboutUsShortInfo from "@/app/hooks/home_page_hooks/about_us_short_info_hooks";
import ErrorComponent from "../ErrorComponent";
import Skeleton from "react-loading-skeleton";
import { imageLoader } from "@/app/utils/image_loader_utils";
import AboutSkeleton from "@/app/skeletons/Home/AboutSkeleton";
import noImage from "@/public/assets/images/no_image.jpg";

function About() {
  const { shortInfoData, loadingShortInfo, shortInfoError } =
    useAboutUsShortInfo();
  // console.log(shortInfoData, loadingShortInfo, shortInfoError)
  return (
    <>
      {loadingShortInfo ? (
        <AboutSkeleton />
      ) : (
        <div className="bgImageWrapper">
          {shortInfoError ? (
            <div className="mb-5 pb-5 position-relative" style={{ zIndex: 9 }}>
              <ErrorComponent />
            </div>
          ) : (
            <div className={`${styles.about_section_wrapper} py-5`}>
              {/* <SectionDivider /> */}
              <div
                className="container"
                style={{
                  zIndex: "2",
                  position: "relative",
                  padding: "0px 20px 120px",
                  marginTop: "-40px",
                }}
              >
                <div className="row">
                  <div className="col-lg-7">
                    <div className={`${styles.about_wrapper}`}>
                      <div className="row">
                        {/* <div className="col-4">
                  <div className={`${styles.sal_logo}`}>
                    <Image src={salLogoWithoutBg.src} alt='Sal logo' width={150} height={150} />
                  </div>
                </div> */}
                        <div className="col-11">
                          <div className={`${styles.content} mb-3`}>
                            <h3 style={{ color: "var(--primary)" }}>
                              {shortInfoData?.title}
                            </h3>
                            <p>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html:
                                    shortInfoData?.short_description ?? "",
                                }}
                              ></span>
                            </p>
                            <Link
                              href="/research"
                              className="btn btn-outline-danger"
                            >
                              {" "}
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className={`${styles.image_wrapper}`}>
                      <div className={`${styles.cover_image}`}>
                        <Image
                          src={shortInfoData?.image || noImage}
                          alt="Sal Image"
                          width={1200}
                          height={1200}
                          className="rounded-4"
                          loader={imageLoader}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <figure>
            {/* {width < 768 ?
                                <Image width={1200} height={1200} src={mobWhiteBanner} alt="bg" /> : */}
            <Image width={1200} height={1200} src={whiteBanner} alt="bg" />
            {/* } */}
          </figure>
        </div>
      )}
    </>
  );
}

export default About;
