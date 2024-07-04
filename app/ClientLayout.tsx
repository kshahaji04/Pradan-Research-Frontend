'use client'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function ClientLayout({children}:any) {
    return (
        <>
            <Navbar />
            <div style={{marginTop:'76px'}}>{children}</div>
            <Footer />
        </>
    )
}

export default ClientLayout