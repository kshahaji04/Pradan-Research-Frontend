'use client'
import React from 'react'
import FeaturedPublicationSection from './components/FeaturedPublicationSection'
import { useParams, useRouter } from "next/navigation";

const FeaturedPublicationListMaster = () => {

    const { slug } = useParams();
    {/* @ts-ignore */}
    const decodedSlug = decodeURIComponent(slug);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h2 className="mb-5 text-center ms-0">{decodedSlug}</h2>
                    </div>
                    <div className="col-md-12">
                        {/* <h5 className="ms-4">
                            Print Media
                        </h5> */}
                        <FeaturedPublicationSection />
                    </div>
                   

                </div>
            </div>
        </>
    )
}

export default FeaturedPublicationListMaster