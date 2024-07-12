
// import { data } from "@/utils/data";
// import AOS from "aos";
// import React, { useEffect } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import VideoSectionsCards from "../../cards/MediaSectionCards/VideoSectionsCards";
// import AudioSectionsCards from "../../cards/MediaSectionCards/AudioSectionsCards";
// import PublicationSectionsCards from "../../cards/MediaSectionCards/PublicationCards/PublicationSectionsCards";

// const PublicationSection = ({ title }: any) => {
//     useEffect(() => {
//         AOS.init();
//     }, []);

//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         pauseOnHover: true,
//         autoplay: true,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 995,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <>
//             <div className={`container ${title?.toLowerCase() === 'video' ? 'pt-5' : ""}`} style={{ overflow: 'hidden' }}>
//                 <div className="row">
//                     {/* <div className="col-12">
//                         <h5 className="ms-3">
//                             Print Media
//                         </h5>
//                     </div> */}
//                                 <Slider {...settings}>{data?.map((doc) => (<PublicationSectionsCards data={doc} id={doc.id} key={doc.id} />))}</Slider>         
//                 </div>
//             </div>
//         </>
//     )
// }

// export default PublicationSection