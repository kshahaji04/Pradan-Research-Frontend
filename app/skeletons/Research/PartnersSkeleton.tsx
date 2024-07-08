"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import styles from "@/app/styles/research/partnerCard.module.css";
function Partners() {
  const arr = [
    {
      img: "https://archive.cdn-thecorrespondent.com/image/KYLF_5N3RYgrBKQQ2wbRJJTWixM=/380x440/0495c5cb7d0a420a88dd1871292f1afb.png",
      title1: "OluTimehin Adegbeye",
      title2: "Othering correspondent",
      text: "As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism.",
    },
    {
      img: "https://archive.cdn-thecorrespondent.com/image/vN99Hg0cW0j0xvHFO9zaTnxRjaQ=/380x440/1c2433e933c84307ae162c52b706f750.png",
      title1: "Eric Holthaus",
      title2: "Climate correspondent",
      text: "As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism",
    },
    {
      img: "https://archive.cdn-thecorrespondent.com/image/VQXB9E7AZmUbkQDc-YZRNCyne5Q=/380x440/cb67e766a93b428a870c6a23de77204d.png",
      title1: "Sanne Blauw",
      title2: "Numeracy correspondent",
      text: 'Sanne holds a PhD in Econometrics from the Erasmus School of Economics. As the Numeracy correspondent, she explores the world of numbers and how they affect our lives. She is the author of the Dutch bestseller "The Number Bias".',
    },
    {
      img: "https://archive.cdn-thecorrespondent.com/image/KYLF_5N3RYgrBKQQ2wbRJJTWixM=/380x440/0495c5cb7d0a420a88dd1871292f1afb.png",
      title1: "Irane Caseli",
      title2: "Numeracy correspondent",
      text: "I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.",
    },
    {
      img: "https://archive.cdn-thecorrespondent.com/image/vN99Hg0cW0j0xvHFO9zaTnxRjaQ=/380x440/1c2433e933c84307ae162c52b706f750.png",
      title1: "Thomas Oudman",
      title2: "Food correspondent for De Correspodent",
      text: "I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container" style={{ marginBottom: "-10px" }}>
      <div className="row">
        <div className="container p-4">
          <div
            className={`row align-items-center justify-content-center mainHeader`}
          >
            <Skeleton width={180} />
          </div>
          <div className={`container teams pb-5`}>
            <div className="h-100">
              <Slider {...settings}>
                {arr.map((item, index) => (
                  <div className={`card col-sm-6 ${styles.car}`} key={index}>
                    <div className={styles.topContainer}>
                      <Skeleton width={170} height={190} />
                    </div>
                    <div className="card-body">
                      <div className={`card-title ${styles.card1}`}>
                        <Skeleton width={220} />
                      </div>
                      <div className={`card-title ${styles.cardTitle}`}>
                        <Skeleton />
                        <Skeleton width={180} />
                      </div>
                      <p className={`card-text ${styles.cardText}`}>
                        <Skeleton count={5} />
                        <Skeleton width={"60%"} />
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
