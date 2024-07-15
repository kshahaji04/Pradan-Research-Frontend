'use client'
import React, { useEffect, useState } from 'react';
import WebNavbar from './WebNavbar';
import NavbarMobile from './Navbarmobile';
import WebNavbarSkeleton from '@/app/skeletons/Navbar/WebNavbarSkeleton';
import NavbarmobileSkeleton from '@/app/skeletons/Navbar/NavbarmobileSkeleton';
import useNavbar from '@/app/hooks/home_page_hooks/navbar_hooks';
import useLogo from '@/app/hooks/home_page_hooks/logo_hooks';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { navbarData, loadingNavbar, navbarError } = useNavbar();
  const { logoData, loadingLogo, logoError } = useLogo();

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

  // console.log(navbarError, 'nav');

  return (
    <>
      {navbarError || logoError ? <>
      <nav className="navbar">
        <div className="w-100 d-flex align-items-center justify-content-center py-3" style={{marginBottom:'-76px'}}>
          <h3>Navbar Not Available For this page</h3>
        </div>
      </nav>
      </> : <>
        {loadingLogo || loadingNavbar ?
          <>{isMobile ? <NavbarmobileSkeleton /> : <WebNavbarSkeleton />}</> :
          <>{isMobile ? <NavbarMobile navbarData={navbarData} logoData={logoData} /> : <WebNavbar navbarData={navbarData} logoData={logoData} />}</>}
        {/* {isMobile ? <NavbarmobileSkeleton /> : <WebNavbarSkeleton />} */}
      </>}
    </>
  );
}

export default Navbar
