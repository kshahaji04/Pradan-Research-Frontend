import { imageLoader } from "@/app/utils/image_loader_utils";
import Image from "next/image";
import React from "react";
import noImage from "@/public/assets/images/no_image.jpg";
import { TeamInterface } from "@/app/interfaces/research_interface";

interface ResearchDetailsCardInterface {
  data: TeamInterface;
}

function ResearchDetailsCard({ data }: ResearchDetailsCardInterface) {
  return (
    <div className="d-flex align-items-center mt-4 pb-4">
      <div>
        <Image
          width={100}
          height={100}
          src={
            data?.image && !data?.image?.includes("private")
              ? data?.image
              : noImage
          }
          loader={imageLoader}
          alt="about-img"
          style={{ borderRadius: "150px" }}
        />
      </div>
      <div className="ms-4">
        <h5 style={{ color: "var(--primary)" }}>{data?.team_member_name}</h5>
        <p style={{ color: "var(--primary)", margin: "0" }}>
          {data.designation}
        </p>
        <p style={{ color: "var(--primary)", margin: "0" }}>{data?.company}</p>
      </div>
    </div>
  );
}

export default ResearchDetailsCard;
