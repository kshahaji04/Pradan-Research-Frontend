import React from 'react';
import styles from '@/app/styles/Footer/Footer.module.css';
import Skeleton from 'react-loading-skeleton';
const quickLinks = [
  {
    link: 'Our Story'
  },
  {
    link: 'FAQs'
  },
  {
    link: 'Locations'
  },
  {
    link: 'Gift Cards'
  },
  {
    link: 'Help'
  },
  {
    link: 'Feed Back'
  },
  {
    link: 'Terms of Service'
  },
  {
    link: 'Accessibility'
  }
]

const FooterSkeleton = () => {
  return (
    <div className={`${styles.footer_wrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h2 className={`${styles.footer_heading}`}><Skeleton count={1} /> <Skeleton width={'50%'} /></h2>

            <div>
              <p className={`${styles.footer_text}`}><Skeleton count={5} /> <Skeleton width={'50%'} /></p>
              <p className={`${styles.footer_text} mb-0`}><Skeleton width={'50%'} /></p>
              <strong><Skeleton width={'70%'} /></strong>
            </div>
          </div>
          <div className={`col-md-5 ${styles.quick_link_container}`}>
            <h2 className={`${styles.footer_heading}`}><Skeleton width={'40%'} /></h2>
            <ul className={`${styles.quick_link}`}>
              {quickLinks && quickLinks.map(({ link }) => <li className={`${styles.footer_text} ${styles.footer_link_list}`}>
                <div className={`${styles.quick_link_list}`}><Skeleton width={'50%'} /></div>
              </li>)}
            </ul>
          </div>
          <div className='col-md-3'>
            <h2 className={`${styles.footer_heading}`}><Skeleton width={'70%'} /></h2>
            <div className="Footer__Content Rte">
              <p className={`${styles.footer_text}`}><Skeleton /> <Skeleton width={'30%'} /></p>
            </div>

            {/* form */}
            <form>
              <div className="mb-3">
                <Skeleton height={40} width={'100%'} />
              </div>
              <Skeleton height={40} width={'80%'} />
            </form>

            {/* social links */}
            <ul className='list-inline my-4'>
              <li className='list-inline-item'><Skeleton width={20} height={20} /></li>
              <li className='list-inline-item'><Skeleton width={20} height={20} /></li>
              <li className='list-inline-item'><Skeleton width={20} height={20} /></li>
              <li className='list-inline-item'><Skeleton width={20} height={20} /></li>
              <li className='list-inline-item'><Skeleton width={20} height={20} /></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className={`${styles.footer_line}`} />

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Skeleton width={'70%'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSkeleton
