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
import { LogoDataInterface, NavbarDataInteface } from '@/app/interfaces/general_interface';
import { useRouter } from 'next/navigation'; 
import { useDispatch, UseDispatch } from 'react-redux';
import { fetchSearch } from '@/app/store/slices/search_slice/search_slice';
import useSearch from '@/app/hooks/search_hooks/search_hooks';
import { number } from 'yup';
interface WebNavbarInterface {
  navbarData: NavbarDataInteface[];
  logoData: LogoDataInterface[];
}

function WebNavbar({ navbarData, logoData }: WebNavbarInterface) {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("");
  // const [voiceInput, setVoiceInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recordingDuration = 5000; // 5 seconds
  const router = useRouter();

  // const { navbarData, loadingNavbar } = useNavbar();
  // const { logoData, loadingLogo } = useLogo();

  // console.log("navbar: ", navbarData, loadingNavbar);
  // console.log("logo: ", logoData);

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
    e.preventDefault()
    const inputValueCheck = inputValue.trim()
    if(inputValueCheck !== '') {
      console.log(inputValue)
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
    <div className={`py-2 px-5 ${styles.navbar_container}`}>
      <nav className={`navbar navbar-expand-sm row ${styles.nav_top}`}>
        <div className={styles.navGrid}>
          <div className=''>
            <div className='d-flex align-items-center'>
              <div>
                {
                  logoData && logoData.length > 0 ? <Link className={`navbar-brand ${styles.vertical_bar} ${styles.header_logo_link}`} href="/">
                    {logoData.map((logo: any, index: number) => {
                      return (

                        <Image key={index} src={logo?.image} alt={logo?.logo_name} width={160} height={60}
                          className={styles.logo} loader={imageLoader} />

                      )
                    })}</Link>
                    : ""
                }
                {/* <Link className={`navbar-brand ${styles.vertical_bar} ${styles.header_logo_link}`} href="/">
                <Image src={logo} width={160} height={60}
                  className={styles.logo} alt="Logo" />
              </Link> */}
              </div>
              <div>
                <Link href='/'>
                <h3 className='mb-0 primary' style={{ fontSize: '1.5rem' }}>Pradan</h3>
                <p className='mb-0'><i>Research</i></p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <nav className={`navbar navbar-expand-sm row py-3`}>
              <div className={`col d-flex justify-content-center ${styles.navbar_list}`}>
                {navbarData?.length > 0 ? navbarData?.map((menu: any, index: any) => (
                  <div key={index} className={styles.dropdown}>
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
            <div className={`form-inline my-2 my-lg-0 search_form d-flex ${styles.search_form_web}`}>
              <input 
                onKeyDown={handleKeyDown}
              className={`form-control mr-sm-2 ${styles.search_input}`} value={inputValue} onChange={handleInputChange} placeholder="Search" aria-label="Search" />
              <i className={`fa fa-search ${styles.search_icon}`} aria-hidden="true" onClick={searchHandler}></i>
            </div>
            <div className={styles.mic_icon_container}>
              <i className={`fa fa-microphone ${styles.mic_icon} ${isRecording ? styles.activeMic : ''}`} aria-hidden="true" onClick={startRecording}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default WebNavbar



















