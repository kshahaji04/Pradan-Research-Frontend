'use client'
import React, { useState } from 'react'
import OngoingResearch from './OngoingResearch';
import ConcludedResearch from './ConcludedResearch';
import styles from "@/app/styles/research/researchCard.module.css"

function Research() {
  const [tab, setTab] = useState('ongoing');
  return (
    <div className="container mb-4">
      <div className="row pb-4" >
        <div className="container">
          <div className={`row align-items-center justify-content-center mainHeader`} >
            Pradan Research
          </div>
          <div className='container position-relative'>
            <div id="exTab3" className="container pt-2">
              <ul className="nav nav-tabs mx-auto my-4" style={{  justifyContent: 'center', borderBottomColor:'var(--primary)' }}>
                <li className="nav-item">
                  <button className={`nav-link ${tab === 'ongoing' ? 'active' : ''}`} onClick={() => setTab('ongoing')}>Ongoing</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${tab === 'concluded' ? 'active' : ''}`} onClick={() => setTab('concluded')}>Concluded</button>
                </li>
              </ul>

              {tab === 'ongoing' ? <OngoingResearch /> : <ConcludedResearch />}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research