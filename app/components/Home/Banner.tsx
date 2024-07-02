import React from 'react'
import Image from 'next/image';
import { Carousel, CarouselItem } from 'react-bootstrap';
// import 'react-loading-skeleton/dist/skeleton.css';

const Banner = () => {

    const items = [
        { id: 3, src: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 1, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', },
        { id: 2, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ]

    return (
        <div className='bgImageWrapper banner-image-wrapper'>
            <div className="container-fluid" style={{ zIndex: '2', position: "relative", padding: "0px" }}>
                <div className="row align-items-center">
                    <div className="col-12 position-relative">
                        <div className="banner-wrapper mt-0">
                            <Carousel controls={false}>
                                {items.map((item: any) => (
                                    <CarouselItem key={item.id}>
                                        <Image src={item.src} width={1200} height={550} alt='banners' className='w-100' style={{objectFit:'cover'}} />
                                    </CarouselItem>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner