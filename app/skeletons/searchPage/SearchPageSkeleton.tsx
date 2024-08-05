'use client'
import React, { useState } from 'react'
import styles from '@/app/styles/searchPage/searchPage.module.css'
import Link from 'next/link'
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Image from 'next/image';

import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const SearchPageSkeleton = () => {
  return (
  
        <div className="row">
          <div className="col-6  d-flex align-items-center">
            <div className={`ps-3`}>
              <Skeleton width={100} height={30}/>
            </div>
          </div>
          <div className={`col-6 p-0 d-flex   align-items-center justify-content-end`}>
            
            <div className={``}>
            <Skeleton width={30} height={15}/>
            </div>
            <div className='ms-2 d-flex direction-row'>
            <div className='m-2 me-0 d-none cursor d-lg-block' >
            <Skeleton width={20} height={'20'} />
            </div>
            <div className='m-2 cursor d-none d-lg-block' >
            <Skeleton width={20} height={'20'} />
            </div>
            </div>
          </div>
        </div>

  )
}

export default SearchPageSkeleton