import { CONSTANTS } from "@/app/services/config/app-config";
import { imageLoader } from "@/app/utils/image_loader_utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import noImage from "@/public/assets/images/no_image.jpg";
import styles from "@/app/styles/research/researchCard.module.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import pdfIcon from "@/public/assets/images/pdfIcon.svg";
import { ResearchDetailsInterface } from "@/app/interfaces/research_interface";

interface AboutConcludedResearchCardInterface {
  item: ResearchDetailsInterface;
}

function AboutConcludedResearchCard({
  item,
}: AboutConcludedResearchCardInterface) {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <h3
          style={{
            color: "var(--primary)",
            marginBottom: "20px",
          }}
        >
          {item?.title}
        </h3>
        <p style={{ width: "95%" }}>
          <span
            dangerouslySetInnerHTML={{
              __html: item?.description ?? "",
            }}
          ></span>
        </p>
      </div>
      <div className="col-md-6 g-4 p-4">
        <Link href="" style={{ textDecoration: "none" }}>
          <div className={`card  ${styles.car}`}>
            <div>
              <Image
                width={550}
                height={350}
                src={
                  item?.image && !item?.image?.includes("private")
                    ? item?.image
                    : noImage
                }
                alt="about-img"
                loader={imageLoader}
                style={{
                  width: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="row py-3 mx-1">
              <div className="col-8 d-flex align-items-center">
                <div>
                  <h5>Concluded Report</h5>
                  <p className="mb-0">18 March 2024</p>
                </div>
              </div>
              <div className="col-4 text-end">
                <div className="d-flex flex-column align-items-end justify-content-end">
                  <div
                    className="d-flex flex-column align-items-start justify-content-end"
                    style={{ width: "100px" }}
                  >
                    {item?.language &&
                      item?.language?.length > 0 &&
                      item?.language?.map((info: any, index: any) => (
                        <Link
                          href={`${CONSTANTS.API_BASE_URL}${info?.pdf}`}
                          key={index}
                          className={`btn my-0 text-uppercase d-flex pe-2`}
                          style={{ fontSize: "12px" }}
                          target="__blank"
                        >
                          <Image
                            width={16}
                            height={16}
                            src={pdfIcon}
                            alt={"pdf icon"}
                          />
                          <span>
                            <FileDownloadOutlinedIcon
                              style={{
                                width: "16px",
                                height: "16px",
                              }}
                            />
                          </span>{" "}
                          {`  ${info?.language_name}`}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AboutConcludedResearchCard;
