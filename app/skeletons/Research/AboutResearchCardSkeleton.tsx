import { imageLoader } from "@/app/utils/image_loader_utils";
import Image from "next/image";
import React from "react";
import noImage from "@/public/assets/images/no_image.jpg";
import { ResearchDetailsInterface } from "@/app/interfaces/research_interface";
import Skeleton from "react-loading-skeleton";

function AboutResearchCardSkeleton() {
  return (
    <div className="row">
      <div className="col-md-7">
        <h3 style={{ color: "var(--primary)", marginBottom: "20px" }}>
          <Skeleton width={280} />
        </h3>
        <p style={{ width: "95%" }}>
          <Skeleton count={4} /> <Skeleton width={"60%"} />
        </p>
        <p style={{ width: "95%" }}>
          <Skeleton count={4} /> <Skeleton width={"60%"} />
        </p>
        <p style={{ width: "95%" }}>
          <Skeleton count={4} /> <Skeleton width={"60%"} />
        </p>
      </div>
      <div className="col-md-5 pt-4">
        <div>
          <Skeleton width={"100%"} height={350} />
        </div>
      </div>
    </div>
  );
}

export default AboutResearchCardSkeleton;
