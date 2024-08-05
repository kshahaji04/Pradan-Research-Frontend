import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Home/Banner";
import About from "./components/Home/About";
import Media from "./components/Home/Media";
import Featured from "./components/Home/Featured";
import Skeleton from "react-loading-skeleton";
import AboutSkeleton from "./skeletons/Home/AboutSkeleton";
import MediaSkeleton from "./skeletons/Home/MediaSkeleton";
import FeaturedSkeleton from "./skeletons/Home/FeaturedSkeleton";
import FeaturedResearch from "./components/featuredResearch/FeaturedResearch";
import whiteBannerDots from '@/public/assets/images/bg/whiteBannerDots.jpg';
import topBorders from '@/public/assets/images/bg/topBorders.jpeg';
import { Metadata } from "next";
import UseMetaData from "@/app/hooks/general_hooks/meta_data_hook";
export async function generateMetadata(): Promise<Metadata> {
 return UseMetaData('home')
}

export default function Home() {
  return (
    <>
      {/* <Skeleton width={'100%'} height={550} /> */}
      <Banner />
      <About />
      {/* <AboutSkeleton /> */}
      <div className="bgImageWrapper" style={{ backgroundColor: '#f5f5f5' }}>
        <div style={{ zIndex: '2', position: "relative", padding: "40px 20px" }}>
          <Featured title={'Featured Publications'} />
        </div>
        {/* <figure>
          <Image width={1200} height={1200} src={bannerBg} alt="bg" />
        </figure> */}
      </div>
      <div className="bgImageWrapper">
        <div className="container" style={{ zIndex: '2', position: "relative", padding: "140px 20px 80px" }}>
          <div className="row teamSlider">
            <FeaturedResearch />
          </div>
        </div>
        <figure>
          <Image width={1200} height={1200} src={whiteBannerDots} alt="bg" />
        </figure>
      </div>
      {/* <FeaturedSkeleton /> */}
      <div className="bgImageWrapper">
        <div style={{ zIndex: '2', position: "relative", padding: "80px 20px 80px" }}>
          <Media />
        </div>
        <figure>
          <Image width={1200} height={1200} src={topBorders} alt="bg" />
        </figure>
      </div>
      {/* <MediaSkeleton /> */}
    </>
  );
}
