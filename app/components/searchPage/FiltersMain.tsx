import FiltersMainSkelelton from '@/app/skeletons/searchPage/FiltersMainSkelelton'
import React from 'react'

const FiltersMain = ({ data, loading }: any) => {
  return (
    <>
      {
        loading ? <FiltersMainSkelelton/> :
        data?.map((item: any) => {
          return (
            <div className="accordion-item  me-2" key={item?.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item?.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse`}
                >
                  <h6 className='mb-0'>{item?.name}</h6>
                </button>
              </h2>

              <div id={`${item?.id}`} className="accordion-collapse collapse show">
                <div className="accordion-body ps-0">
                  {
                    item?.type?.map((e: any, index: any) => (
                      <div className={'d-flex filterCheckbox'} key={index}>
                        <input className="form-check-input mx-1" type="checkbox" id='grid' />
                        <label className="form-check-label" htmlFor='grid'>{e}</label>
                      </div>
                    ))
                  }


                </div>
              </div>

            </div>
          )
        })
      }


    </>
  )
}

export default FiltersMain