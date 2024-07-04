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

export default function Home() {
  return (
    <>
      {/* <Skeleton width={'100%'} height={550} /> */}
      <Banner />
      <About />
      {/* <AboutSkeleton /> */}
      <Featured title={'Featured Publications'} />
      {/* <FeaturedSkeleton /> */}
      <Media />
      {/* <MediaSkeleton /> */}
    </>
  );
}
