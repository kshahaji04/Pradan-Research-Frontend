'use client'
import React, { useState } from 'react';
import styles from '@/app/styles/joinOurEvent/join_our_event.module.css'; // Assuming the correct import path
import UpcomingEvents from './Events/UpcomingEvents';
import PastEvents from './Events/PastEvents';
import JoinOurEventMasterSkeleton from '@/app/skeletons/JoinOurEvent/JoinOurEventMasterSkeleton';

const JoinOurEventMaster = () => {
  const [isLoading, setIsLoading] = useState(false); // Use 'isLoading' for clarity
  const [activeTab, setActiveTab] = useState('upcoming_events'); // Use 'activeTab' for clarity

  return (
    <div className="container-fluid p-0">
      <div className="row" >
        <div className="pt-4">
          <div className={`row align-items-center justify-content-center ${styles.mainHeader}`} >
            Events
          </div>
          <div className='position-relative'>
            {/* <div id="exTab3" className="pt-2">
              <ul className="nav nav-tabs mx-auto my-4" style={{ justifyContent: 'center' }}>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === 'upcoming_events' ? 'active' : ''}`} onClick={() => setActiveTab('upcoming_events')}>Upcoming Events</button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === 'past_events' ? 'active' : ''}`} onClick={() => setActiveTab('past_events')}>Past Events</button>
                </li>
              </ul>

              {activeTab === 'upcoming_events' ? <UpcomingEvents /> : <PastEvents />}
            </div> */}
            <UpcomingEvents/>
            <PastEvents/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurEventMaster;
