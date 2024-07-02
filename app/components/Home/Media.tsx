'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import moment from 'moment';

const Media = () => {
    const items = [
        {
            src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Oilseed farming is a crucial component of rural Indias agricultural landscape, involving the cultivation of crops such as mustard, soybean, groundnut, sunflower, and sesame',
            date: '05.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            date: '03.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Oilseed farming is a crucial component of rural Indias agricultural landscape, involving the cultivation of crops such as mustard, soybean, groundnut, sunflower, and sesame',
            date: '09.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            date: '08.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Oilseed farming is a crucial component of rural Indias agricultural landscape, involving the cultivation of crops such as mustard, soybean, groundnut, sunflower, and sesame',
            date: '05.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            date: '03.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Oilseed farming is a crucial component of rural Indias agricultural landscape, involving the cultivation of crops such as mustard, soybean, groundnut, sunflower, and sesame',
            date: '09.18.24'
        },
        {
            src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            date: '08.18.24'
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center w-100">
                <h2 style={{color:'var(--primary)'}}>Social Media</h2>
            </div>
            <div className="row my-5">
                <Slider {...settings}>
                    {items?.slice(0, 5).map((item) => (
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <div className={`card h-100 rounded-0`} style={{ width: "90%", maxWidth: "380px", border:0 }}>
                                <Link href={'/media'} className="w-full d-flex align-items-center justify-content-center position-relative">
                                    <Image src={item.src} className="rounded-circle" height={150} width={150} alt={'media'} />
                                </Link>
                                <Link href={'/media'} className="card-body position-relative text-decoration-none text-start py-4">
                                    <p className={`card-title m-0`}>
                                        {item.para?.length > 140 ? `${item.para.slice(0, 140)}...` : item.para}
                                    </p>
                                </Link>
                                <div className={`card-footer`} style={{background:'transparent', border:0}}>
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="col-12 pb-3">
                                            <div>
                                                <p>{moment(item.date).format('MMM DD, YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Media