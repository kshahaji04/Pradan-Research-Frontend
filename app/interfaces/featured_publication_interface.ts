export interface FeaturedPublicationData {
  name?: string | null;
  title?: string | null;
  short_description?: string | null;
  image?: string | null;
  icon_logo_image?: string | null;
  url?: string | null;
  latest_category?: number;
}


export interface ImageOverlayProps {
  isText?: boolean;
  icon?: string | null;
  src?: string | null;
  text?: string | null;
}


interface Author {
  author_name?: string | null;
  author_image?: string | null;
}

export interface featuredPublicationListData {
  name?: string | null;
  title?: string | null;
  slug?: string | null;
  image?: string | null;
  type?: string | null;
  short_description?: string | null;
  description?: string | null;
  creation?: string | null;
  url?: string | null;
  pdf?: string | null;
  social_platform_name?: string | null;
  authors?: Author[] | []
}

