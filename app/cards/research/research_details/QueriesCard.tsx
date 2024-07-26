import { imageLoader } from "@/app/utils/image_loader_utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import noImage from "@/public/assets/images/no_image.jpg";
import { QueriesInterface } from "@/app/interfaces/research_interface";

interface QueriesCardInterface {
    item: QueriesInterface;
}

function QueriesCard({ item }: QueriesCardInterface) {
  return (
    <div
      className="card shadow d-flex flex-md-row align-items-center py-4"
      style={{ width: "40rem" }}
    >
      <div>
        <Image
          src={item?.image || noImage}
          height={200}
          width={200}
          alt={item?.heading || ""}
          loader={imageLoader}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{item?.title}</h5>
        <p className="card-text">{item?.sub_title}</p>
        <Link href={item?.url || ""} className="btn btn-outline-success">
          For Queries
        </Link>
      </div>
    </div>
  );
}

export default QueriesCard;
