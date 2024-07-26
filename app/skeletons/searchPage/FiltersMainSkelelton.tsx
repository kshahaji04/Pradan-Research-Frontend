import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FiltersMainSkelelton = () => {


  return (
    <>
    {
      Array.from({length:2}).map(()=>{
        return(
          <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
    
              aria-expanded="true"
              aria-controls={`collapse`}
            >
              <h6 className='mb-0'>{
                <Skeleton width={30} height={20} />
              }</h6>
            </button>
          </h2>
    
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              {
                Array.from({ length: 5 }).map((e: any, index: any) => (
                  <div className={'d-flex filterCheckbox'} key={index}>
                    <Skeleton
                     className="form-check-input mx-1"
                     width={10} height={10}
                     />
                    <div className="form-check-label">
                      {<Skeleton width={50} height={20} />}
                    </div>
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

export default FiltersMainSkelelton