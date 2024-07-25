import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/Footer/Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import useFooter from '@/app/hooks/home_page_hooks/footer_hooks';
import { CONSTANTS } from '@/app/services/config/app-config';
import axios from 'axios';
import { API_CONFIG } from '@/app/services/config/api-config';
import { showToast } from '../ToastNotification';
import FooterSkeleton from '@/app/skeletons/Footer/FooterSkeleton';
import { FooterDataInterface } from '@/app/interfaces/general_interface';
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

interface FooterInterface {
  footerData: FooterDataInterface
}

function Footer({ footerData }: FooterInterface) {
  const [email, setEmail] = useState('');


  //   useEffect(() => {
  //     AOS.init();
  //     AOS.refresh();
  // }, []);

  // const { footerData, loadingFooter } = useFooter();
  // console.log('footer ', footerData);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (email !== '') {
      try {
        const response = await axios.post(`${CONSTANTS.API_BASE_URL}/api/method/pradan.pradan.doctype.subscriber.api.create_subscriber.create_subscriber`, {
          email: email
        }, {
          ...API_CONFIG,
          timeout: 5000,
        });
        if (response.data?.message?.status === 'success') {
          showToast(response.data?.message?.data?.message || 'Subscription successful!!', 'success')
          setEmail('');
        } else if (response.data?.message?.status === 'error') {
          showToast(response.data?.message?.data?.error || 'User is already subscribed', 'error')
          setEmail('');
        } else {
          showToast('User is already subscribed', 'warning')
        }
      } catch (error) {
        showToast('Error in subscribing', 'error')
        console.error('Error in subscribing:', error);
      }
    } else {
      showToast('Please enter email to continue', 'warning')
    }
  };

  const general_info = footerData?.general_info ?? {};
  const quick_links = footerData?.quick_links ?? {};
  const subscription_text = footerData?.subscription_text ?? {};
  const pradan_contact_us = footerData?.pradan_contact_us ?? {};

  return (
    <div className={`${styles.footer_wrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h2 className={`${styles.footer_heading}`}>{general_info?.heading}</h2>

            <div>
              <p className={`${styles.footer_text}`}>{general_info?.description}</p>
              <p className={`${styles.footer_text}`}>Contact Us: <br /><strong>{general_info?.contact_us_email}</strong></p>
            </div>
          </div>
          <div className={`col-md-5 ${styles.quick_link_container}`}>
            <h2 className={`${styles.footer_heading}`}>Quick Links</h2>
            <ul className={`${styles.quick_link}`}>
              {Array.isArray(quick_links?.data) && quick_links?.data.length > 0 && quick_links?.data?.map(({ url, seq, name }: any) => (
                <li key={seq} className={`${styles.footer_text} ${styles.footer_link_list}`}>
                  <Link href={url ?? '#'} className={styles.quick_link_list}>
                    {name}
                  </Link>
                </li>
              ))}
              {/* {quickLinks && quickLinks.map(({ link }, index) => <li className={`${styles.footer_text} ${styles.footer_link_list}`} key={index}>
              <Link href="#" className={`${styles.quick_link_list}`}>{link}</Link>
            </li>)} */}
            </ul>
          </div>
          <div className='col-md-3'>
            <h2 className={`${styles.footer_heading}`}>Stay in touch</h2>
            <div className="Footer__Content Rte">
              <p className={`${styles.footer_text}`}>{subscription_text?.short_description}</p>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="email" className={`form-control ${styles.footer_input}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button type="submit" className={`btn  text-uppercase ${styles.footer_btn}`}>Subscribe</button>
            </form>

            {/* social links */}
            <ul className='list-inline my-4'>
              <li className='list-inline-item'><Link href={pradan_contact_us?.facebook_url ?? '/'} className={`${styles.blue_icon}`}><FacebookIcon /></Link></li>
              <li className='list-inline-item'><Link href={pradan_contact_us?.instagram_url ?? '/'} className={`${styles.insta_icon}`}><InstagramIcon /></Link></li>
              <li className='list-inline-item'><Link href={pradan_contact_us?.whatsapp_url ?? '/'} className={`${styles.whats_app_icon}`}><WhatsAppIcon /></Link></li>
              <li className='list-inline-item'><Link href={pradan_contact_us?.linked_in_url ?? '#'} className={`${styles.blue_icon}`}><LinkedInIcon /></Link></li>
              <li className='list-inline-item'><Link href={pradan_contact_us?.x_url ?? '/'} className={`${styles.tweeter_icon}`}><XIcon /></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className={`${styles.footer_line}`} />

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link href="/" className={`${styles.footer_heading}`}>{general_info?.copy_right_text}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
