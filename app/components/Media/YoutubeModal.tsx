import React from 'react';
import { Modal } from 'react-bootstrap';

const YoutubeModal = ({ show, toHide, data }: any) => {
    // Function to extract the video ID from the URL
    const extractVideoID = (url: string) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url?.match(regex);
        
        return match ? match[1] : null;
    };
    
    const videoID = extractVideoID(data?.video);
    const videoSrc = videoID ? `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1` : '';
    
    // console.log('url', videoSrc);

    return (
        <Modal show={show} onHide={toHide} size="lg" centered className='youtube-modal'>
            {/* {data && data?.map((item: any, index: number) => { */}

                {/* return (
                    <React.Fragment key={index}> */}
                        <Modal.Header closeButton>
                            <h4>{data?.podcast_title}</h4>
                        </Modal.Header>
                        <Modal.Body>
                            {videoSrc && (
                                <div className="video-responsive">
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={videoSrc}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </Modal.Body>
                    {/* </React.Fragment>
                ); */}
            {/* })} */}
        </Modal>
    );
};

export default YoutubeModal;
