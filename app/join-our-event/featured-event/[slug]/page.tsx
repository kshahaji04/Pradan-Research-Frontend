import EventDetails from '@/app/components/JoinOurEvent/event-details/EventDetails'
import React from 'react'
import { Metadata } from "next";
import useMetaData from "@/app/hooks/general_hooks/meta_data_hook";
export async function generateMetadata(): Promise<Metadata> {
 return useMetaData('join-our-event-details')
}

const page = () => {
    return (
        <>
            <EventDetails />
        </>
    )
}

export default page