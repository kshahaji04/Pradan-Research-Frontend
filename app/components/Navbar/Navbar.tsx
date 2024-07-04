'use client'
import React, { useEffect, useState } from 'react';
import WebNavbar from './WebNavbar';
import NavbarMobile from './Navbarmobile';
// import WebNavbarSkeleton from '@/skeletons/Navbar/WebNavbarSkeleton';
// import NavbarmobileSkeleton from '@/skeletons/Navbar/NavbarmobileSkeleton';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1210);
      };
  
      // Initial check
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div>
        {isMobile ? <NavbarMobile /> : <WebNavbar />}
        {/* {isMobile ? <NavbarmobileSkeleton /> : <WebNavbarSkeleton />} */}
      </div>
    );
}

export default Navbar
