"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/styles/Navbar/Navbar.module.css';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import logo from '@/public/logo.png';
import useNavbar from '@/app/hooks/home_page_hooks/navbar_hooks';
import useLogo from '@/app/hooks/home_page_hooks/logo_hooks';
import { imageLoader } from '@/app/utils/image_loader_utils';
import WebNavbarSkeleton from '@/app/skeletons/Navbar/WebNavbarSkeleton';

const navMenu = [
  { id: 1, menu_title: 'Research', link: '/research' },
  { id: 2, menu_title: 'Contact Us', link: '/' },
  { id: 3, menu_title: 'Join Our Event', link: '/' },
  { id: 4, menu_title: 'Meet Our Team', link: '/' },
];

function WebNavbar({ navbarData, logoData }: any) {
  const [inputValue, setInputValue] = useState("");
  // const [voiceInput, setVoiceInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recordingDuration = 5000; // 5 seconds

  // const { navbarData, loadingNavbar } = useNavbar();
  // const { logoData, loadingLogo } = useLogo();

  // console.log("navbar: ", navbarData, loadingNavbar);
  // console.log("logo: ", logoData, loadingLogo);

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    console.log("browser doesn't support speech recognition");
  }

  const handleVoiceInput = () => {
    if (!isRecording) {
      SpeechRecognition.startListening({ continuous: true });
      setIsRecording(true);

      setTimeout(() => {
        stopVoiceInput();
      }, recordingDuration);
    }
  };

  const stopVoiceInput = () => {
    SpeechRecognition.stopListening();
    setIsRecording(false);
    // setVoiceInput(transcript);
    setInputValue(prevValue => `${prevValue} ${transcript}`.trim());
  };

  useEffect(() => {
    if (finalTranscript) {
      setInputValue(prevValue => `${prevValue} ${finalTranscript}`.trim());
    }
  }, [finalTranscript]);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  const searchHandler = () => {
    console.log("searching")
  }

  return (
    <div className={`py-2 px-5 ${styles.navbar_container}`}>
      <nav className={`navbar navbar-expand-sm row ${styles.nav_top}`}>
        <div className={styles.navGrid}>
          <div className=''>
            <div className='d-flex align-items-center'>
              <div>
                {
                  logoData && logoData.length > 0 ? logoData.map((logo: any, index: number) => {
                    return (
                      <Link className={`navbar-brand ${styles.vertical_bar} ${styles.header_logo_link}`} href="/" key={index}>
                        <Image src={logo?.image} alt={logo?.logo_name} width={160} height={60}
                          className={styles.logo} loader={imageLoader} />
                      </Link>
                    )
                  })
                    : ""
                }
                {/* <Link className={`navbar-brand ${styles.vertical_bar} ${styles.header_logo_link}`} href="/">
                <Image src={logo} width={160} height={60}
                  className={styles.logo} alt="Logo" />
              </Link> */}
              </div>
              <div>
                <h3 className='mb-0 primary' style={{ fontSize: '1.5rem' }}>Pradan</h3>
                <p className='mb-0'><i>Research</i></p>
              </div>
            </div>
          </div>
          <div>
            <nav className={`navbar navbar-expand-sm row py-3`}>
              <div className={`col d-flex justify-content-center ${styles.navbar_list}`}>
                {navbarData?.length > 0 ? navbarData?.map((menu: any, index: any) => (
                  <div key={menu.id} className={styles.dropdown}>
                    <Link href={menu?.url}>
                      <button className={styles.dropbtn}>{menu?.label}</button>
                    </Link>
                    {/* <DropdownList sections={menu.sections || []} /> */}
                  </div>
                )) : ''}
                {/* {navMenu.map(menu => (
                <div key={menu.id} className={styles.dropdown}>
                  <Link href={menu.link}>
                    <button className={styles.dropbtn}>{menu.menu_title}</button>
                  </Link>
                </div>
              ))} */}

              </div>
            </nav>
          </div>
          <div className='d-flex justify-content-center'>
            <form className={`form-inline my-2 my-lg-0 search_form d-flex ${styles.search_form_web}`}>
              <input className={`form-control mr-sm-2 ${styles.search_input}`} value={inputValue} onChange={handleInputChange} placeholder="Search" aria-label="Search" />
              <i className={`fa fa-search ${styles.search_icon}`} aria-hidden="true" onClick={searchHandler}></i>
            </form>
            <div className={styles.mic_icon_container}>
              <i className={`fa fa-microphone ${styles.mic_icon}`} aria-hidden="true" onClick={handleVoiceInput}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default WebNavbar



















