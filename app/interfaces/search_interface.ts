export interface ImageData {
    image: string;
    slug: string;
    sub_title: string;
    title: string;
    type: string;
    url: null;
  }
  
 export interface SearchPageGridCardProps {
    data: ImageData[];
    loading: boolean;
  }