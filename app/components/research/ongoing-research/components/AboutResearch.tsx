'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutResearch({title}:any) {

    const arr = [
        {
            src: 'https://archive.cdn-thecorrespondent.com/image/KYLF_5N3RYgrBKQQ2wbRJJTWixM=/380x440/0495c5cb7d0a420a88dd1871292f1afb.png',
            name: 'Omkar',
            position: 'Managing Director',
            company: 'Hitech Info'
        },
        {
            src: 'https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Aniket',
            position: 'Marketing Manager',
            company: 'Hitech Info'
        },
        {
            src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Kunal',
            position: 'Chief Of Supply',
            company: 'Hitech Info'
        },
        {
            src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Akash',
            position: 'Chief Executive Officer',
            company: 'Hitech Info'
        },
        {
            src: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Shivam',
            position: 'Creative Director',
            company: 'Hitech Info'
        },
        {
            src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: 'Shavay',
            position: 'Auto-Mobile Engineer',
            company: 'Hitech Info'
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    };

    function Card({ data }: any) {
        return (
            <div className="d-flex align-items-center mt-4 pb-4">
                <div>
                    <Image width={100} height={100}
                        src={data.src}
                        alt='about-img'
                        style={{ borderRadius: '150px' }} />
                </div>
                <div className="ms-4">
                    <h5 style={{ color: 'var(--primary)' }}>{data.name}</h5>
                    <p style={{ color: 'var(--primary)', margin: '0' }}>{data.position}</p>
                    <p style={{ color: 'var(--primary)', margin: '0' }}>{data.company}</p>

                </div>
            </div>
        )
    }

    return (
        <div className='row'>
            <div className="col-lg-8">
                <div className="container py-5 px-5">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>About the Research</h3>
                            <p style={{ width: '95%' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-md-5 pt-4">
                            <Image width={550} height={350}
                                src='https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt='about-img'
                                style={{ width: '100%', borderRadius: '5px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center" style={{ background: '#f7f7f7' }}>
                <div className="container pt-2 pb-5 ps-5">
                    <h3 className='pb-2' style={{ color: 'var(--primary)' }}>Our Team</h3>
                    {/* <h4 className='pb-2'>Research</h4> */}
                    <Slider {...settings}>{arr.map((data: any, index: any) => <Card data={data} key={index} />)}</Slider>
                </div>
            </div>
        </div>
    )
}

export default AboutResearch