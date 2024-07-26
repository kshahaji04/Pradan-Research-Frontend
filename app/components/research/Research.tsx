'use client'
import React, { useState } from 'react'
import OngoingResearch from './OngoingResearch';
import ConcludedResearch from './ConcludedResearch';
import whiteBanner from '@/public/assets/images/bg/whiteBanner.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Research() {
  let searchParams = new URLSearchParams(window.location.search);
  const type = searchParams.get('type')
  const router = useRouter()
    const pageNo = searchParams.get('page')
  const [tab, setTab] = useState(type || 'ongoing');
  const [pageChange,setCurrentPage] = useState(pageNo || 1)
  const handleTabChange = (e:any)=>{
    router.push(`research/?page=1&type=${e}`)
    setTab(e)
    setCurrentPage(1)
  }
  return (
    <div className="bgImageWrapper">
      <div className="container" style={{ zIndex: '2', position: "relative" }}>
        {
        <div className="row pb-4" >
          <div className="container">
            <div className={`row align-items-center justify-content-center mainHeader`} >
              Pradan Research
            </div>
            <div className='container position-relative'>
              <div id="exTab3" className="container pt-2">
                <ul className="nav nav-tabs mx-auto my-4" style={{ justifyContent: 'center', borderBottomColor: 'var(--primary)' }}>
                  <li className="nav-item">
                    <button className={`nav-link ${tab === 'ongoing' ? 'active' : ''}`} onClick={() =>handleTabChange('ongoing')}>Ongoing</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${tab === 'concluded' ? 'active' : ''}`} onClick={()=>handleTabChange('concluded')}>Concluded</button>
                  </li>
                </ul>
                {tab === 'ongoing' ? <OngoingResearch pageNumber={pageChange}/> : <ConcludedResearch pageNumber={pageChange}/>}

              </div>
            </div>
          </div>
        </div>
         }
      </div>
      <figure>
        {/* {width < 768 ?
                                <Image width={1200} height={1200} src={mobWhiteBanner} alt="bg" /> : */}
        <Image width={1400} height={1400} src={whiteBanner} alt="bg" />
        {/* } */}
      </figure>
    </div>
  )
}

export default Research