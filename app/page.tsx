import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Home/Banner";
import About from "./components/Home/About";
import Media from "./components/Home/Media";
import Featured from "./components/Home/Featured";

export default function Home() {
  return (
    <>
      {/* <h4>Research comming soon</h4> */}
      <div className="row justify-content-center py-5">
        <div className="col-6">
          <h1 className="text-center">Pradan Research</h1>
        </div>
      </div>
      <Banner />
      <About />
      <Featured />
      <Media />
      <div className="row justify-content-center pb-5">
        <div className="col-6">
          <h1 className="text-center">Footer</h1>
        </div>
      </div>
    </>
  );
}
