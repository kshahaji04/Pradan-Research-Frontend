"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/app/styles/Navbar/Navbar.module.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import logo from "@/public/logo.png";
import Image from "next/image";
import { imageLoader } from "@/app/utils/image_loader_utils";

import {
  LogoDataInterface,
  NavbarDataInteface,
} from "@/app/interfaces/general_interface";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchSearch } from "@/app/store/slices/search_slice/search_slice";
interface NavbarMobileInterface {
  navbarData: NavbarDataInteface[];
  logoData: LogoDataInterface[];
}

function NavbarMobile({ navbarData, logoData }: NavbarMobileInterface) {
  const dispatch = useDispatch()
 const router  = useRouter()
  const [inputValue, setInputValue] = useState("");
  // const [voiceInput, setVoiceInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  // const [showMobileDropDown, setShowMobileDropDown] = useState(false);
  const recordingDuration = 5000; // 5 seconds
  // const [drop, setDrop] = useState()

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.log("browser doesn't support speech recognition");
  }

  const startRecording = () => {
    if (!isRecording) {
      resetTranscript(); // Clear any existing transcript
      SpeechRecognition.startListening({ continuous: true });
      setIsRecording(true);
      setTimeout(() => {
        SpeechRecognition.stopListening();
        setIsRecording(false);
      }, recordingDuration);
    }
  };


  useEffect(() => {
    // Update capturedTranscript whenever transcript changes
    if (!isRecording) {
      setInputValue(transcript);
      if (transcript) {
        dispatch(fetchSearch({page:1,searchQuery:transcript})as any)
        router.push(`/search?page=1&search=${transcript}`)
      }
    }
  }, [transcript, isRecording]);


  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };


  const searchHandler =async (e:any) => {
    const inputValueCheck = inputValue.trim()
    if(inputValueCheck !== '') {
      dispatch(fetchSearch({page:1,searchQuery:inputValue}) as any)
      router.push(`/search?page=1&search=${inputValue}`)
    }
    // else{
    //   const filter = 'most_recent'
    //   dispatch(fetchSearch({page:1,searchQuery:inputValue,sortBy:filter}) as any)
    //   router.push(`/search?page=1&search=${inputValue}&filter=${filter}`)
    // }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler(e);
    }
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          position: "fixed",
          top: "0",
          zIndex: "99999",
          backgroundColor: "#fff",
        }}
      >
        <div className="row py-2">
          <div className="col-9">
            <div className="d-flex align-items-center">
              <div>
                {/* <Link className={`navbar-brand ${styles.vertical_bar} ${styles.header_logo_link}`} href="/">
                                    <Image src={logo} width={140} height={60}
                                        className={styles.logo} alt="Logo" />
                                </Link> */}
                {logoData && logoData.length > 0
                  ? logoData.map((logo: any, index: number) => {
                    return (
                      <Link
                        className={`navbar-brand me-1 ${styles.vertical_bar} ${styles.header_logo_link}`}
                        href="/"
                        key={index}
                      >
                        <Image
                          src={logo?.image}
                          alt={logo?.logo_name}
                          width={140}
                          height={60}
                          className={styles.logo}
                          loader={imageLoader}
                        />
                      </Link>
                    );
                  })
                  : ""}
              </div>
              <div>
                <div className="ms-2">
                  <h3 className="mb-0 primary" style={{ fontSize: "1.5rem" }}>
                    Pradan
                  </h3>
                  <p className="mb-0">
                    <i>Research</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-3 ${styles.bar_icon}`}>
            <a
              className="h-100 d-flex align-items-center justify-content-center"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              aria-hidden="true"
            >
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`offcanvas offcanvas-start mobile_sidebar ${styles.mobile_sidebar}`}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <div className=""></div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex">
               < div className={`form-inline my-2 my-lg-0 search_form d-flex ${styles.search_form_mobile}`}>
                  <input className="form-control mr-sm-2" value={inputValue} onKeyDown={handleKeyDown} onChange={handleInputChange} placeholder="Search" aria-label="Search" />
                  <i className={`fa fa-search ${styles.search_icon}`} aria-hidden="true" onClick={searchHandler}></i>
                </div>
                <div className={`px-4 ${styles.mic_icon_container} `}>
                  <i
                    className={`fa fa-microphone ${styles.mic_icon}`}
                    aria-hidden="true"
                    onClick={startRecording}
                  ></i>
                </div>
              </div>

              {/* {navMenu.map(menu => (
                                <div key={menu.id} className='col-12 mt-2'>
                                    <Link href={menu.link}>
                                        <button type="button" className={`btn ${styles.log_btn_mobile}`}>
                                            {menu.menu_title}
                                        </button>
                                    </Link>
                                </div>
                            ))} */}
              {navbarData?.length > 0
                ? navbarData?.map((menu: any, index: any) => (
                  <div key={index} className={styles.dropdown}>
                    <Link href={menu?.url}>
                      <button className={styles.dropbtn}>
                        {menu?.label}
                      </button>
                    </Link>
                  </div>
                ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
