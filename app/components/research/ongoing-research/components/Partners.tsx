'use client'

import React from 'react'
import PartnerCards from '@/app/cards/research/PartnerCards'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Partners() {
    const arr = [
        {
            img: 'https://www.pradan.net/wp-content/uploads/2017/02/icici.jpg',
            title1: 'OluTimehin Adegbeye',
            title2: 'Othering correspondent',
            text: 'As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism.',
        },
        {
            img: 'https://www.pradan.net/wp-content/uploads/2017/02/ifci_img.jpg',
            title1: 'Eric Holthaus',
            title2: 'Climate correspondent',
            text: 'As the Climate correspondent, I seek to tell better stories about the biggest problem facing our world – from the complex science to visions of a better society that works for everyone. Ask me about: slow travel, beekeeping, autism'
        },
        {
            img: 'https://www.pradan.net/wp-content/uploads/2017/02/ifad_img.jpg',
            title1: 'Sanne Blauw',
            title2: 'Numeracy correspondent',
            text: 'Sanne holds a PhD in Econometrics from the Erasmus School of Economics. As the Numeracy correspondent, she explores the world of numbers and how they affect our lives. She is the author of the Dutch bestseller "The Number Bias".'
        },
        {
            img: 'https://www.pradan.net/wp-content/uploads/2017/02/acc.jpg',
            title1: 'Irane Caseli',
            title2: 'Numeracy correspondent',
            text: 'I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.'
        },
        {
            img: 'https://www.pradan.net/wp-content/uploads/2017/02/mother_dairy.jpg',
            title1: 'Thomas Oudman',
            title2: 'Food correspondent for De Correspodent',
            text: 'I will report on how important the beginning of life is, and show why children’s perspectives should not be left out of journalism and policymaking. Ask me about: nomadic lifestyles, breastfeeding, Latin America.'
        }
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
        <div className="container my-5">
            <div className="row" >
                <div className="col-12">
                    <div className='text-center' >
                    <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Partners</h3>
                    </div>
                </div>
                <div className="col-12 py-5">
                            <Slider {...settings}>{arr.map((item, index) => (
                                <PartnerCards item={item} index={index} key={index} />
                            ))}</Slider>
                </div>
            </div>
        </div>
    )
}

export default Partners


