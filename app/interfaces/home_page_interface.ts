interface BannerImageData {
  details_file_video?: string | null;
  image?: string | null;
  label?: string | null;
  portrait_image?: string | null;
  sequence?: number | null;
  short_description?: string | TrustedHTML | null;
}

export interface BannerDataInterface {
  details?: {
    name?: string | null;
    portrait_image?: BannerImageData[];
    sequence?: number | null;
    url?: string | null;
    video_link?: string | null;
  };
  main_banner_image_mobile?: string | null;
  main_banner_image_web?: string | null;
}

export interface AboutDataInterface {
  title?: string | null;
  image?: string | null;
  url?: string | null;
  short_description?: string | TrustedHTML | null;
}

interface MediaAuthorDataInterface {
  author_name?: string | null;
  author_image?: string | null;
}

export interface MediaDataInterface {
  authors: MediaAuthorDataInterface[];
  creation?: string | null;
  description?: string | null;
  image?: string | null;
  name?: string | null;
  pd?: string | null;
  short_description?: string | null;
  slug?: string | null;
  social_platform_name?: string | null;
  title?: string | null;
  type?: string | null;
  url?: string | null;
}

export interface SpotlightDataInterface {
  Designation?: string | null;
  image?: string | null;
  name?: string | null;
  name1?: string | null;
  short_description?: string | null;
}

export interface FeaturedDataInterface {
  image?: string | null;
  name?: string | null;
  short_description?: string | null;
  slug?: string | null;
  sub_title?: string | null;
  title?: string | null;
  url?: string | null;
}
