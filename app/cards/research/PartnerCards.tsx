import React from "react";
import styles from "@/app/styles/research/partnerCard.module.css";
import Image from "next/image";
import { imageLoader } from "@/app/utils/image_loader_utils";
import noImage from "@/public/assets/images/no_image.jpg"
import { PartnerInterface } from "@/app/interfaces/research_interface";

interface PartnerCardsInterface {
  item: PartnerInterface;
}

function PartnerCards({ item }: PartnerCardsInterface) {
  return (
    <div className="d-flex justify-content-center">
      <Image
        // className={`card-img-top`}
        width={100}
        height={50}
        src={item.partners_image && !item.partners_image?.includes('private') ? item.partners_image : noImage}
        alt="Partner Image"
        loader={imageLoader}
      />
    </div>
  );
}

export default PartnerCards;
