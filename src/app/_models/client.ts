export interface Client {
    id?: number;
    name?: string;
    email: string;  
    CreatedAt?: Date; 
  }

  export interface User {
    email: string;
    password: string;  
  }

  

  export interface Data {
    clients: Client[];
    page: number;
    per_page:number;
    total: number;  
    total_pages: number; 
  }
