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
import ErrorComponent from '../ErrorComponent';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '@/app/store/slices/search_slice/search_slice';

const SearchPage = () => {
  const [view, setView] = useState('grid')
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = new URLSearchParams(window.location.search);
  const pageNo = searchParams.get('page')
  const searchVal = searchParams.get('search')
  const filter = searchParams.get('filter')
  const [currentPage, setCurrentPage] = useState<any>(pageNo || 1);
  const [selected, setSelected] = useState(filter || 'most_recent')
  console.log(currentPage,searchVal,selected,"console in search page")
  const {searchData,loadingSearch,error,searchListCount} = useSearch(pageNo,searchVal,selected)

  const totalPages = searchListCount ? searchListCount : ''

  const handlePageChange = (pageNumber: number) => {
    router.push(
      `/search?page=${pageNumber}&search=${searchVal}&filter=${selected}`
    )
    setCurrentPage(pageNumber)
    dispatch(fetchSearch({ page: pageNumber , searchQuery: searchVal, sortBy: filter || ''}) as any);
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
    `/search?page=${currentPage}&search=${searchVal}&filter=${e.target.value}`
  )
  dispatch(fetchSearch({ page: currentPage , searchQuery: searchVal, sortBy: e.target.value}) as any);
  setSelected(e.target.value)
}

 
  return (
    <div>
      {
        error ? <ErrorComponent/> :
        <div className={`container-fluid  ${styles.searchContainer}`}>
        {
           loadingSearch ? <SearchPageSkeleton /> :
           <div className="row">
          <div className="col-6  d-flex align-items-center">
            <div className={`ps-3`}> Search Result: {totalPages}</div>
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
          <div className={`col-md-1 d-none d-md-block`}>
            {/* <Filters loadingSearch={loadingSearch}/> */}
          </div>
          <div className="col-md-10 col-12">
            {
              view === 'grid' ? <SearchPageGridCard  loading={loadingSearch} data={searchData} /> : <SearchPageListCard loading={loadingSearch} data={searchData} />
            }
          </div>
          <div className="col-md-1 d-none d-md-block">

          </div>

        </div>
        <PaginationAll currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      }
     
    </div>
  )
}

export default SearchPage