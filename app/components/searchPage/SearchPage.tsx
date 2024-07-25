'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/styles/searchPage/searchPage.module.css'
import Link from 'next/link'
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Image from 'next/image';
import SearchPageGridCard from '@/app/cards/serachPage/SearchPageGridCard';
import SearchPageListCard from '@/app/cards/serachPage/SearchPageListCard';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import Filters from './Filters';
import PaginationAll from '@/app/components/PaginationAll';
import SearchPageSkeleton from '@/app/skeletons/searchPage/SearchPageSkeleton';
import useSearch from '@/app/hooks/search_hooks/search_hooks';
import { useRouter } from 'next/navigation';

const SearchPage = () => {
  const [view, setView] = useState('grid')
  const router = useRouter()
  const searchParams = new URLSearchParams(window.location.search);
  const pageNo = searchParams.get('page')
  const searchVal = searchParams.get('search')
  const filter = searchParams.get('filter')
  const [currentPage, setCurrentPage] = useState<any>(pageNo || 1);
  const [selected, setSelected] = useState(filter || 'most_recent')
  const {searchData,loadingSearch} = useSearch(currentPage,searchVal,selected)


  const totalPages = (searchData?.length/3) 
  const handlePageChange = (pageNumber: number) => {
    router.push(
      `search?page=${pageNumber}&filter=${selected}`
    )
    setCurrentPage(pageNumber)
  };

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setView('grid');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

const handleChangeSelect = (e:any)=>{
  router.push(
    `search?page=${currentPage}&filter=${e.target.value}`
  )
  setSelected(e.target.value)
}


  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.unsplash.com/photo-1720983590448-28b749bd403d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: 'Net Zero 101:What, Why and How',
  //     desc: 'I will report on how important the beginning of life is, and show why children’s perspectives',
  //      state: 'Maharashtra',
  //      year: '15-06-2024'
  //   },
  //   {
  //     id: 2,
  //     img: 'https://images.unsplash.com/photo-1586032788085-d75f745f26e0?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: 'When writer met Correspondent member: Eric and Lina ',
  //     desc: 'Nesrine Malik, Eric Holthaus, Irene Caselli, Nesrine Malik, Eric Holthaus, Irene Caselli, Tanmoy Goswami & OluTimehin Adegbeye in conversation',
  //     state: 'Rajasthan', year: '13-02-2023'
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: 'The future of the planet is in our hands',
  //     desc: 'Nesrine Malik, Eric Holthaus, Irene Caselli, Nesrine Malik, Eric Holthaus, Irene Caselli, Tanmoy Goswami & OluTimehin Adegbeye in conversation',
  //     state: 'Gujrat', year: '10-04-2024'
  //   },
  //   {
  //     id: 4,
  //     img: 'https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: 'When writer met Correspondent member: Eric and Lina',
  //     desc: 'New York’s eastern grey squirrels are so much a part of the urban fabric that for a long time, it never occurred to anyone to study urban squirrels at all, which are everywhere today but were absent just a few centuries back.',
  //     state: 'Karnataka', year: '20-02-2023'
  //   },
  //   {
  //     id: 5,
  //     img: 'https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: 'The future of the planet is in our hands',
  //     desc: 'I will report on how important the beginning of life is, and show why children’s perspectives', state: 'Sikkim', year: '16-07-2024'

  //   }

  // ]
  return (
    <div>
      <div className={`container-fluid  ${styles.searchContainer}`}>
        {
           loadingSearch ? <SearchPageSkeleton /> :
           <div className="row">
          <div className="col-6  d-flex align-items-center">
            <div className={`ps-3`}> Search Result: {searchData?.length}</div>
          </div>
          <div className={`col-6 p-0 d-flex align-items-center justify-content-end`}>
            <div className={`most`}>
              Sort by :-
              <select
              value={selected ? selected : '' }
              onChange={handleChangeSelect}
               className={`mx-1 cursor ${styles.slelectNav}`}
              >
                <option  value="most_recent" className='b-none'>Recent</option>
                <option value="most" className='b-none'>Last</option>
              </select>
            </div>
            <div className='ms-2 d-flex direction-row'>
            <div className='m-2 me-0 d-none cursor d-lg-block' onClick={() => setView('grid')}>
              <GridViewIcon className={view === 'grid' ? `${styles.active}` : ''} />
            </div>
            <div className='m-2 cursor d-none d-lg-block' onClick={() => setView('list')}>
              <FormatListBulletedIcon className={!(view === 'grid') ? `${styles.active}` : ''} />
            </div>
            </div>
          </div>
        </div>
        }
        
        <div className="row">
          <div className={`col-md-2 col-12`}>
            <Filters loadingSearch={loadingSearch}/>
          </div>
          <div className="col-md-10 col-12">
            {
              view === 'grid' ? <SearchPageGridCard  loadingSearch={loadingSearch} data={searchData} /> : <SearchPageListCard loadingSearch={loadingSearch} data={searchData} />
            }
          </div>
        </div>
        <PaginationAll currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default SearchPage