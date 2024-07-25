'use client'
import React, { useEffect, useState } from 'react'
import FeaturedPublicationCards from '@/app/cards/FeaturedPublication/FeaturedPublicationCards';
import useFeaturedPublicationList from '@/app/hooks/featured_publication_hooks/featured_publication_list_hooks'
import PaginationAll from '../../PaginationAll';
import { useParams, useRouter } from "next/navigation";
import PublicationSectionsCardsSkeleton from '@/app/skeletons/MediaPage/MediaSectionCardsSkeleton/PublicationCardsSkeleton/PublicationSectionsCardsSkeleton';
import ErrorComponent from '@/app/components/ErrorComponent';
import NoDataFound from '@/app/components/NoDataFound';
import { featuredPublicationListData } from '@/app/interfaces/featured_publication_interface';

const FeaturedPublicationSection = () => {
    let params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page_no');
    const router = useRouter();
    const { slug } = useParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(pageParam) || 1);
    const { featuredPublicationListData, featuredPublicationListError, featuredPublicationListLoading, totalCount } = useFeaturedPublicationList(currentPage);

    console.log("featuredPublicationListData", featuredPublicationListData)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        router.push(`/featured-publication-list/${slug}?page_no=${pageNumber}`)
    }

    const limit = 1;
    const totalPages = Math.ceil(totalCount / limit);

    const SkeletonLoader = () => {
        return (
            <div className='d-flex gap-4'>
                {Array.from({ length: limit || 2 }).map((_, index) => (
                    <PublicationSectionsCardsSkeleton key={index} />

                ))}
            </div>
        );
    };
    return (
        <>
            {featuredPublicationListError ? <ErrorComponent /> : <div className={'container-fluid'}>
                {featuredPublicationListLoading ? <SkeletonLoader /> : <div className="row">
                    {/* <div className="col-12">
                        <h5 className="ms-3">
                            Print Media
                        </h5>
                    </div> */}
                    {featuredPublicationListData?.length > 0 ? featuredPublicationListData?.map((info: featuredPublicationListData, index: number) => (<FeaturedPublicationCards data={info} key={index} />)) : <NoDataFound />}
                </div>}


                <div className="my-5">
                    {featuredPublicationListData?.length > 0 && <PaginationAll currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
                </div>

            </div>}

        </>
    )
}

export default FeaturedPublicationSection



