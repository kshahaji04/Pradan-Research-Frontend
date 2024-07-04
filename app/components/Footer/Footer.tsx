import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Footer/Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
// import AOS from "aos";
// import "aos/dist/aos.css";
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

function Footer() {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
// }, []);
  return (
    <div className={`${styles.footer_wrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h2 className={`${styles.footer_heading}`}>SEVEN GRAMS CAFFÉ | INDEPENDENT. ROASTERS. BAKERS.</h2>

            <div>
              <p className={`${styles.footer_text}`}>We roast great coffee, we bake sensational cookies (and cakes, and brownies, but, come on – the cookies), and&nbsp;we take immense pride in being a small, independent business. No investors, no suits, no big corporates. Just a dream, hard work, and a deep passion for what we do.</p><p className={`${styles.footer_text}`}>Contact Us: <br /><strong>info@pradan.com</strong></p>
            </div>
          </div>
          <div className={`col-md-5 ${styles.quick_link_container}`}>
            <h2 className={`${styles.footer_heading}`}>Quick Links</h2>
            <ul className={`${styles.quick_link}`}>
              {quickLinks && quickLinks.map(({ link }) => <li className={`${styles.footer_text} ${styles.footer_link_list}`}>
                <Link href="#" className={`${styles.quick_link_list}`}>{link}</Link>
              </li>)}
            </ul>
          </div>
          <div className='col-md-3'>
            <h2 className={`${styles.footer_heading}`}>Stay in touch</h2>
            <div className="Footer__Content Rte">
              <p className={`${styles.footer_text}`}>Subscribe to receive updates, access to exclusive deals, and more.</p>
            </div>

            {/* form */}
            <form>
              <div className="mb-3">
                <input type="email" className={`form-control ${styles.footer_input}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address' />
              </div>
              <button type="submit" className={`btn text-uppercase py-2 px-5 ${styles.footer_btn}`}>Subscribe</button>
            </form>

            {/* social links */}
            <ul className='list-inline my-4'>
              <li className='list-inline-item'><Link href='#'><FacebookIcon /></Link></li>
              <li className='list-inline-item'><Link href='#' className={`${styles.insta_icon}`}><InstagramIcon /></Link></li>
              <li className='list-inline-item'><Link href='#' className={`${styles.whats_app_icon}`}><WhatsAppIcon /></Link></li>
              <li className='list-inline-item'><Link href='#'><LinkedInIcon /></Link></li>
              <li className='list-inline-item'><Link href='#' className={`${styles.tweeter_icon}`}><XIcon /></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className={`${styles.footer_line}`} />

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link href="/" className={`${styles.footer_heading}`}>2024 © Pradan. All Rights Reserved</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
