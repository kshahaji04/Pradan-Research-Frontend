export interface ResearchCardItem {
  image?: any;
  name?: string;
  slug?: string;
  sub_title?: string;
  title: string;
  url?: any;
  languages?: string[];
}

export interface ResearchCard {
  item: ResearchCardItem;
  index: number;
  link: any;
}

interface LanguageInterface {
  language_code?: string | null;
  language_name?: string | null;
  pdf?: string | null;
}

export interface ResearchDetailsInterface {
  date?: string | null;
  description?: string | null;
  image?: string | null;
  language?: LanguageInterface[] | null;
  title?: string | null;
}

export interface TeamInterface {
  company?: string | null;
  designation?: string | null;
  image?: string | null;
  team_member_name?: string | null;
}

export interface PartnerInterface {
  partners_name?: string | null;
  partners_image?: string | null;
}

export interface QueriesInterface {
  heading?: string | null;
  image?: string | null;
  sub_title?: string | null;
  title?: string | null;
  url?: string | null;
}

export interface ReportsInterface {
  image?: string | null;
  name?: string | null;
  reports_detail?: LanguageInterface[] | null;
  short_description?: string | null;
  sub_title?: string | null;
  title?: string | null;
}
