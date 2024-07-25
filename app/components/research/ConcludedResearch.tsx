import React, { useState } from 'react'
import PaginationAll from '@/app/components/PaginationAll'
import ResearchPageCards from '@/app/cards/research/ResearchPageCards';
import research_hooks from '@/app/hooks/research_hooks/research_hooks';
import { useRouter } from 'next/navigation';
import ErrorComponent from '../ErrorComponent';
import ResearchPageCradSkeleton from '@/app/skeletons/cards/research/ResearchPageCradSkeleton';
import NoDataFound from '../NoDataFound';
import useResearchList from '@/app/hooks/research_hooks/research_hooks';
interface ResearchCardItem {
    image?: any;
    name?: string; 
    slug?: string; 
    sub_title?: string; 
    title: string; 
    url?: any; 
    languages?: string[]; 
  }
function ConcludedResearch() {
    const router = useRouter()
    let searchParams = new URLSearchParams(window.location.search);
    const pageNo = searchParams.get('page') 
    const [currentPage, setCurrentPage] = useState<any>(pageNo || 1);
    const {data,totalPages,loading,error} = useResearchList(`Concluded Research`,currentPage)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        router.push(`/research?page=${pageNumber}&type=concluded`)
    }

    return (
        <>     
           {
             error ? <div className="mb-5 pb-5"><ErrorComponent /></div> :
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
                    {
                    loading ? <ResearchPageCradSkeleton /> :
                    data?.length > 0 ?
                    data.map((item: ResearchCardItem, index: number) => (
                        <ResearchPageCards link={`/research/concluded-research/about-the-research`} item={item} index={index} key={index} />
                    ))
                    : <NoDataFound/>
                    }
                </div>
                <div className="my-5">
                    <PaginationAll currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
                }
                </>

    )
}

export default ConcludedResearch