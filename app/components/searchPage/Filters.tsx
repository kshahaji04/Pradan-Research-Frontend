import React, { useState } from 'react';
import styles from '@/app/styles/searchPage/searchPage.module.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FiltersMain from './FiltersMain';
import { Button, Modal } from 'react-bootstrap';

const Filters = ({loading}:any) => {
  const [open, setOpen] = useState(false)
  const toggleModal = () => {
    console.log(open)
    setOpen(!open)
  }
  const handleClose = () => {
    setOpen(false)
  }
const filtersData=[
  {
    id:'1',
    name:'year',
    type:[
     '2024','2023','2022','2021','2020'
    ]
  },
  {
    id:2,
    name:'State',
    type:[
      'Sikkim' , 'Gujrat' , 'Assam' , 'Rajastan'
    ]
  }
]

  return (
    <div className={`my-4 ${styles.filterTop}`}>
      <div className={styles.mainFilter}>
        <div className={`accordion custom_accordian ${styles.filter_container} d-none d-md-block`} id="accordionExample1">
          <FiltersMain data={filtersData} loading={loading}/>
        </div>
        <div className={`d-block d-md-none ${styles.fixedBottomFilter}`} onClick={toggleModal}>
          <FilterAltIcon />
        </div>
        <div className='m-4'>
          <Modal
            show={open}
            onHide={handleClose}
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FiltersMain data={filtersData} loading={loading}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </div>


      </div>
    </div>

  )
}

export default Filters