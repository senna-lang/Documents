declare namespace NodeJS {
   interface ProcessEnv {
     readonly NODE_ENV: 'development' | 'production';
 
     readonly NOTION_DATABASE_ID: string;
     
   }
 }