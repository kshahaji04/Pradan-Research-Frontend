'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Navbar/Navbar.module.css';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import logo from '@/public/logo.png';
import Image from 'next/image';

const navMenu = [
    { id: 1, menu_title: 'Research', link: '/research' },
    { id: 2, menu_title: 'Contact Us', link: '/' },
    { id: 3, menu_title: 'Join Our Event', link: '/' },
    { id: 4, menu_title: 'Meet Our Team', link: '/' },
];

function NavbarMobile({navbarData, logoData}:any) {
    const [inputValue, setInputValue] = useState("");
    // const [voiceInput, setVoiceInput] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    // const [showMobileDropDown, setShowMobileDropDown] = useState(false);
    const recordingDuration = 5000; // 5 seconds
    // const [drop, setDrop] = useState()

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
        <>
            <div className='container-fluid' style={{ position: 'fixed', top: '0', zIndex: '99999', backgroundColor: '#fff' }}>
                <div className='row py-2'>
                    <div className='col-9'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <Link className={`navbar-brand ${styles.header_logo_link}`} href="/">
                                    <Image src={logo} width={140} height={60}
                                        className={styles.logo} alt="Logo" />
                                </Link>
                            </div>
                            <div>
                                <h5 className='mb-0'>Pradan Research</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col-3 ${styles.bar_icon}`}>
                        <a className='h-100 d-flex align-items-center justify-content-center' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" aria-hidden="true">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`offcanvas offcanvas-start mobile_sidebar ${styles.mobile_sidebar}`} tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <div className=''>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body pt-5">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 d-flex'>
                                <form className={`form-inline my-2 my-lg-0 search_form d-flex ${styles.search_form_mobile}`}>
                                    <input className="form-control mr-sm-2" type="search" value={inputValue} onChange={handleInputChange} placeholder="Search" aria-label="Search" />
                                    <i className={`fa fa-search ${styles.search_icon}`} aria-hidden="true" onClick={searchHandler}></i>
                                </form>
                                <div className={`px-4 ${styles.mic_icon_container} `}>
                                    <i className={`fa fa-microphone ${styles.mic_icon}`} aria-hidden="true" onClick={handleVoiceInput}></i>
                                </div>
                            </div>

                            {navMenu.map(menu => (
                                <div key={menu.id} className='col-12 mt-2'>
                                    <Link href={menu.link}>
                                        <button type="button" className={`btn ${styles.log_btn_mobile}`}>
                                            {menu.menu_title}
                                        </button>
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarMobile
