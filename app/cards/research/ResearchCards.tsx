import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/app/styles/research/researchCard.module.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import pdfIcon from "@/public/assets/images/pdfIcon.svg";
import noImage from "@/public/assets/images/no_image.jpg";
import { imageLoader } from "@/app/utils/image_loader_utils";
import { CONSTANTS } from "@/app/services/config/app-config";
import { ReportsInterface } from "@/app/interfaces/research_interface";

interface ResearchCardsInterface {
    item: ReportsInterface
}

function ResearchCards({ item }: ResearchCardsInterface) {
  return (
    <div className="col-md-12 g-4 p-4">
      <div className={`card ${styles.car}`}>
        <div>
          <Image
            width={470}
            height={300}
            className={`${styles.img}`}
            src={item?.image && !item?.image?.includes('private') ? item?.image : noImage}
            alt="Image"
            loader={imageLoader}
          />
        </div>

        <div className="row card-body h-100">
          <div className="col-9">
            <div className="h-100 d-flex flex-column justify-content-center">
              <h5>{item?.name}</h5>
              <p className="mb-0">{item?.title}</p>
            </div>
          </div>
          <div className="col-3 text-end">
            <div className="d-flex flex-column align-items-end justify-content-end">
              <div
                className="d-flex flex-column align-items-start justify-content-end"
                style={{ width: "100px" }}
              >
                {item?.reports_detail && item?.reports_detail?.length > 0 &&
                  item?.reports_detail?.map((info: any, index: any) => (
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
                          style={{ width: "16px", height: "16px" }}
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
    </div>
  );
}

export default ResearchCards;
