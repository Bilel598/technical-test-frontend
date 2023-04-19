export type FormDescription = {
    title: string;
    services: string[];
    fields: FormField[];
  };
  
  export type FormField = {
    name: string;
    label: string;
    type: string;
  };
    