import React, { useState } from 'react'
import PaginationAll from '@/app/components/PaginationAll'
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/styles/research/researchCard.module.css"
import ResearchCards from '@/app/cards/research/ResearchCards';

const ConcludedResearch = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(4);
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        console.log(pageNumber);
        // const url = constructUrl(category, pageNumber, typeParam, authorsParam, yearsParam)
        // const options = constructOptions(category, pageNumber, typeParam, authorsParam, yearsParam)
        // dispatch(fetchPodcastList(options) as any);
        // router.push(url);
    }

    const arr = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text1: 'Executive Summary',
            title2: 'Executive Summary'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text1: 'Introduction',
            title2: 'Introduction'
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text1: 'Chapter 1',
            title2: 'Global economic inequality insights'
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text1: 'Chapter 3',
            title2: 'Global Carbon inequality'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text1: 'Chapter 2',
            title2: 'Rich Countries, poor Government'
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text1: 'Chapter 4',
            title2: 'Global Health'
        },
    ]

    return (
        <div className="row pt-3">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-2 text-center ms-0">Concluded Research</h2>
                    </div>
                </div>
            </div>

            {/*research card section with pagination*/}
            <div className='col-12'>
                <div className='row'>
                    {arr.map((item: any, index: number) => (
                        <ResearchCards link={`/research/concluded-research/about-the-research`} item={item} index={index} />
                    ))}
                </div>
                <div className="my-5">
                    <PaginationAll currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    )
}

export default ConcludedResearch