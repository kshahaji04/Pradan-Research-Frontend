// 'use client'
import React from 'react'
import ContactUs from '../components/contactUs/ContactUs'
import { Metadata } from "next";
import UseMetaData from "@/app/hooks/general_hooks/meta_data_hook";
export async function generateMetadata(): Promise<Metadata> {
 return UseMetaData('contact-us')
}

const page = () => {
  return (
    <div>
        <ContactUs />
    </div>
  )
}

export default page