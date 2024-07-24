export interface ResearchCardItem {
    image?: any;
    name?: string; 
    slug?: string; 
    sub_title?: string; 
    title: string; 
    url?: any; 
    languages?: string[]; 
  }

 
 export interface ResearchCard{
    item : ResearchCardItem;
    index : number;
    link:any
  }