import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Home/Banner";
import About from "./components/Home/About";
import Media from "./components/Home/Media";
import Featured from "./components/Home/Featured";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Featured title={'Featured Publications'} />
      <Media />
    </>
  );
}
