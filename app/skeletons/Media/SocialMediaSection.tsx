import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Link from "next/link";
import styles from '@/styles/NewsSection/news.module.css'
import { useMediaQuery } from '@mui/material';

import img1 from '@/public/Arjun Dhrve.jpg';
import img2 from '@/public/Arvind Netam.jpg';
import img3 from '@/public/Ashwini Kange.jpg';
import img4 from '@/public/Mohan Mandavi.jpg'
// import SocialMediaGridViewCard from "@/cards/MediaSectionCards/PublicationCards/SocialMediaGridViewCard";
// import SocialMediaListViewCard from "@/cards/MediaSectionCards/PublicationCards/SocialMediaListViewCard";
const items = [
  {
    id: 1,
    date: "20 Mar 2024",
    microsite_tag: 'Sal Report',
    tag: "Popular",
    title: "Lorem Ipsum is simply",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
     image: 'https://images.squarespace-cdn.com/content/v1/56706f46cbced6afd974c6d5/1714065985483-LLBE8DERZ5D0YJR9VQGN/image-asset.jpeg?format=750w',
    expertise:'Teacher and Padma Awardee, Madhya Pradesh',
    url:'/blog-details'
  },
  {
    id: 2,
    date: "20 April 2024",
    microsite_tag: 'Micro Site',
    tag: "Latest",
    title: "Lorem Ipsum is simply",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    image: 'https://images.squarespace-cdn.com/content/v1/56706f46cbced6afd974c6d5/1713274362861-0MGOY5YJH9SGE22OJ8WG/annie-spratt-goholCAVTRs-unsplash.jpg?format=500w',
    expertise:'Ex-Central Minister of State (Agriculture) and MP Kanker Constituency, Kanker, Chhattisgarh',
    url:'/blog-details'
  },
  {
    id: 3,
    date: "1 May 2024",
    microsite_tag: 'Micro Site',
    tag: "Trending",
    title: "Lorem Ipsum is simply",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://images.squarespace-cdn.com/content/v1/56706f46cbced6afd974c6d5/1711466611658-889AAFW2GZ34T6NTENZ5/AdobeStock_268031756.jpeg?format=500w',
    expertise:'Founder KBKS( Koya Bhumkal Kranti Sena), Joint Secretary- Sarv Adivasi Samaj , Chhattisgarh',
    url:'/blog-details'
  },
  {
    id: 4,
    date: "20 March 2024",
    microsite_tag: 'Micro Site',
    tag: "Talking",
    title: "Lorem Ipsum is simply",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: 'https://images.squarespace-cdn.com/content/v1/56706f46cbced6afd974c6d5/1694718072840-PJLEMLB610FU543N4QZG/image-asset.jpeg?format=500w',
    expertise:'Member of the Lok Sabha, Kanker Constituency, Chhattisgarh',
    url:'/blog-details'
  }
];

const SocialMediaSection = ({quotes}:any) => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    vertical: true, 
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const isSmallScreen = useMediaQuery('(max-width:776px)');
  return (
    <div className={`container ${styles.news_carousel_container}`} >
      <div className="row">
        <Slider {...settings}>
          {items.map((data:any , index:number) => (
            <div key={index} >
                          {/* {isSmallScreen ?   <SocialMediaGridViewCard data={data}/>  : <SocialMediaListViewCard data={data}/>} */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default  SocialMediaSection  ;
