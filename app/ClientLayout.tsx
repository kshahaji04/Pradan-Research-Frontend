'use client'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import FooterSkeleton from './skeletons/Footer/FooterSkeleton';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { persistor, store } from "@/app/store/store";
import useFooter from './hooks/home_page_hooks/footer_hooks';

function ClientLayout({ children }: any) {
    const { footerData, loadingFooter } = useFooter();
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navbar />
                    <div style={{ marginTop: '76px' }}>{children}</div>
                    {loadingFooter && footerData ? <FooterSkeleton /> : <Footer footerData={footerData} />}
                    <ToastContainer />
                </PersistGate>
            </Provider>
        </>
    )
}

export default ClientLayout