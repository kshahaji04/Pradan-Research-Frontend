import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

export const iconHandler = (title: string) => {
    // console.log("iconHandler",title)
    switch (title.toLowerCase()) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'whatsapp':
        return <WhatsAppIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'twitter':
        return <XIcon />;
      default:
        return null;
    }
  };