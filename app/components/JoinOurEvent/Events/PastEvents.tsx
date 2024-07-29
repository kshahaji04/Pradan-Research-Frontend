import React from 'react'
import MediaMaster from '../../Media/MediaMaster'

const PastEvents = () => {
    return (

        <div style={{ zIndex: '2', position: "relative" }}>
            <div className="row">
                <div className="col-12 my-4">
                    <h2 className="mb-4 text-center ms-0">Past Events</h2>
                </div>
            </div>
            <MediaMaster />
        </div>
    )
}

export default PastEvents
