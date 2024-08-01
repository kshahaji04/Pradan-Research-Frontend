export interface NavbarDataInteface {
  image?: string | null;
  label?: string | null;
  name?: string | null;
  sequence?: number | null;
  short_description?: string | null;
  slug?: string | null;
  url?: string | null;
  values?: any[] | null;
}

export interface LogoDataInterface {
  image?: string | null;
  logo_name?: string | null;
  sequence?: number | null;
}

interface ContactUsInterface {
  logo_image?: string | null;
  email_id?: string | null;
  facebook_url?: string | null;
  instagram_url?: string | null;
  whatsapp_url?: string | null;
  linked_in_url?: string | null;
  x_url?: string | null;
}

interface QuickLinksInterface { name?: string | null; seq?: number | null; url?: string | null }

export interface FooterDataInterface {
  general_info?: {
    contact_us_email?: string | null;
    copy_right_text?: string | null;
    description?: string | null;
    heading?: string | null;
  };

  nrlm_contact_us?: ContactUsInterface | null;
  pradan_contact_us?: ContactUsInterface | null;
  quick_links?: {
    heading?: string | null;
    data?: QuickLinksInterface[] | null;
  };
  subscription_text?: {
    heading?: string | null;
    short_description?: string | null;
    btn_title?: string | null;
    placeholder_text?: string | null;
  };
}
