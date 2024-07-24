'use client'
import { CONSTANTS } from "@/app/services/config/app-config";
import { API_CONFIG } from "@/app/services/config/api-config";
import { play, pause, setCurrentTime } from '@/app/store/slices/media_slice/playerSlice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Layout({ children }: any) {
    const { data, playing, currentTime } = useSelector((state: any) => state.audioPlayer.player);

    const dispatch = useDispatch();

    const audioRef = useRef<any>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.audio.current.currentTime = currentTime;
            if (playing) {
                audioRef?.current?.audio?.current.play();
            } else {
                audioRef?.current?.audio?.current.pause();
            }
        }
    }, [playing, currentTime])

    const handleTimeUpdate = (e: any) => {
        data && dispatch(setCurrentTime(e.target.currentTime));
    };

    const handlePlay = () => {
        data && dispatch(play(data));
    };

    const handlePause = () => {
        data && dispatch(pause());
    };

    return (
        <>
            {children}
            <div className="fixedFooter">
                <div className="container">
                    <div className="col-12 ps-0 pe-0 position-relative">
                        <div className={`player w-full`}>
                            <AudioPlayer
                                src={data?.audio ? `${CONSTANTS.API_BASE_URL}${data?.audio}` : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'}
                                ref={audioRef}
                                autoPlayAfterSrcChange={false}
                                onListen={handleTimeUpdate}
                                onPlay={handlePlay}
                                onPause={handlePause}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout