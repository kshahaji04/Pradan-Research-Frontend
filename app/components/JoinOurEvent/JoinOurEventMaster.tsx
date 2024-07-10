"use client"
import React, { useState } from 'react';
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';

const JoinOurEventMaster = () => {
    const [tab, setTab] = useState('upcoming_events');
  return (
    <div className="container mb-4">
      <div className="row pb-4" >
        <div className="container p-4">
          <div className={`row align-items-center justify-content-center ${styles.mainHeader}`} >
            Events
          </div>
          <div className='container position-relative'>
            <div id="exTab3" className="container pt-2">
              <ul className="nav nav-tabs mx-auto my-4" style={{  justifyContent: 'center' }}>
                <li className="nav-item">
                  <button className={`nav-link ${tab === 'upcoming_events' ? 'active' : ''}`} onClick={() => setTab('upcoming_events')}>Upcoming Events</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${tab === 'past_events' ? 'active' : ''}`} onClick={() => setTab('past_events')}>Past Events</button>
                </li>
              </ul>

              {tab === 'upcoming_events' ? <UpcomingEvents /> : <PastEvents />}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinOurEventMaster
