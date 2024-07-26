interface Item{
    image?: string; 
    short_description?: any; // Optional short description
    title?: string; // Report title
    state?: string; // State associated with the report (optional)
    year?: string; // Year of the report (optional)
    reports_detail?: any ; // Array of report details
}
export interface ReportCard {
    item:Item
    loading:boolean
  }