import { imageLoader } from "@/app/utils/image_loader_utils";
import Image from "next/image";
import React from "react";
import noImage from "@/public/assets/images/no_image.jpg";
import { ResearchDetailsInterface } from "@/app/interfaces/research_interface";

interface AboutResearchCardInterface {
    item: ResearchDetailsInterface
}

function AboutResearchCard({item}:AboutResearchCardInterface) {
  return (
    <div className="row align-items-center">
      <div className="col-md-7">
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
      <div className="col-md-5 pt-4">
        <Image
          width={550}
          height={350}
          src={item?.image && !item?.image?.includes('private') ? item?.image : noImage}
          alt="about-img"
          loader={imageLoader}
          style={{
            width: "100%",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}

export default AboutResearchCard;
