import React from 'react'
import styles from '@/app/styles/Home/about.module.css'
import SalImg from '@/public/assets/images/SAL.png'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className={`${styles.about_section_wrapper} py-5`}>
      {/* <SectionDivider /> */}
      <div className='container' style={{ zIndex: '2', position: "relative", padding: '40px 20px' }}>
        <div className="row">
          <div className='col-md-7'>
            <div className={`${styles.about_wrapper}`}>
              <div className="row">
                {/* <div className="col-4">
                  <div className={`${styles.sal_logo}`}>
                    <Image src={salLogoWithoutBg.src} alt='Sal logo' width={150} height={150} />
                  </div>
                </div> */}
                <div className="col-11">
                  <div className={`${styles.content}`}>
                    <h3 style={{ color: 'var(--primary)' }}>Welcome To Pradan Research</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <Link href='/research' className='btn btn-outline-danger'> Learn More</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className={`${styles.image_wrapper}`}>
              <div className={`${styles.cover_image}`}>
                <Image src={"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt='Sal Image'
                  width={300}
                  height={300}
                  className='rounded-4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
